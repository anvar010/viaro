import { Types } from 'mongoose';
import { Wallet, type WalletDocument, type WalletOwnerType } from '../../models/Wallet';
import { Transaction, type TransactionType } from '../../models/Transaction';
import { PaymentMethod } from '../../models/PaymentMethod';
import { Trip } from '../../models/Trip';
import { Booking } from '../../models/Booking';
import { Driver } from '../../models/Driver';
import { Company } from '../../models/Company';
import { User } from '../../models/User';
import { env } from '../../config/env';
import { ApiError } from '../../utils/ApiError';
import { pct, round2 } from '../../utils/money';
import type { UserRole } from '../../utils/roles';
import * as events from '../events/events.bus';
import { logger } from '../../utils/logger';
import { paginated, toSkipLimit, type PaginationQuery } from '../../utils/pagination';
import {
  collectPayment as collectFromGateway,
  payoutToBeneficiary as payoutFromGateway,
} from '../../integrations/paymentGateway';
import * as notify from '../notifications/notifications.service';
import { NOTIFICATION_TYPES } from '../notifications/notifications.service';

/* -------------------------------------------------------------------------- */
/* Wallet primitives                                                           */
/* -------------------------------------------------------------------------- */

export async function getOrCreateWallet(
  ownerId: Types.ObjectId | string,
  ownerType: WalletOwnerType,
): Promise<WalletDocument> {
  const existing = await Wallet.findOne({ ownerId, ownerType });
  if (existing) return existing;
  return Wallet.create({ ownerId, ownerType, balance: 0 });
}

/**
 * The platform (admin) side of the revenue split.
 *
 * ASSUMPTION: a single designated platform wallet holds the admin's 40%, rather than one
 * wallet per admin user. Admins are operators of one platform, so per-admin wallets would
 * split the same pot arbitrarily. It is identified by ownerType 'platform' with a null
 * ownerId, and created on first use.
 */
export async function getPlatformWallet(): Promise<WalletDocument> {
  const existing = await Wallet.findOne({ ownerType: 'platform', ownerId: null });
  if (existing) return existing;
  return Wallet.create({ ownerId: null, ownerType: 'platform', balance: 0 });
}

/** Atomic credit: balance moves and the ledger row is written together. */
export async function credit(
  walletId: Types.ObjectId | string,
  amount: number,
  type: Extract<TransactionType, 'credit' | 'refund'>,
  meta: Record<string, unknown> = {},
): Promise<void> {
  const value = round2(amount);
  if (value <= 0) return;

  await Wallet.updateOne({ _id: walletId }, { $inc: { balance: value } });
  // feeApplied is always 0 here — fees exist only on withdrawal (spec §8 rule 3).
  await Transaction.create({ walletId, type, amount: value, feeApplied: 0, meta });
}

/** Atomic debit guarded by sufficient balance — the filter prevents a negative wallet. */
export async function debit(
  walletId: Types.ObjectId | string,
  amount: number,
  type: Extract<TransactionType, 'debit' | 'withdrawal'>,
  feeApplied: number,
  meta: Record<string, unknown> = {},
): Promise<void> {
  const value = round2(amount);
  if (value <= 0) throw ApiError.badRequest('Amount must be greater than zero');

  const result = await Wallet.updateOne(
    { _id: walletId, balance: { $gte: value } },
    { $inc: { balance: -value } },
  );

  if (result.modifiedCount === 0) throw ApiError.badRequest('Insufficient wallet balance');

  await Transaction.create({ walletId, type, amount: value, feeApplied: round2(feeApplied), meta });
}

/* -------------------------------------------------------------------------- */
/* Revenue split — spec §8, fired on trip completion                           */
/* -------------------------------------------------------------------------- */

/**
 * Who employs this driver, and therefore who pays them.
 *
 * A driver on a company's roster is that company's; everyone else belongs to the
 * admin/platform. Ownership is derived from Company.driverIds rather than duplicated onto
 * the Driver, so the roster stays the single source of truth.
 */
export interface DriverOwner {
  type: 'company' | 'platform';
  walletId: Types.ObjectId;
  /** The company document, when company-owned. */
  companyId?: Types.ObjectId;
  revenueSharePct: number;
}

export async function resolveDriverOwner(driverId: Types.ObjectId | string): Promise<DriverOwner> {
  const company = await Company.findOne({ driverIds: driverId });

  if (company) {
    const wallet = await getOrCreateWallet(company.userId, 'company');
    return {
      type: 'company',
      walletId: wallet._id,
      companyId: company._id,
      revenueSharePct: company.revenueSharePct ?? env.COMPANY_REVENUE_PCT,
    };
  }

  const wallet = await getPlatformWallet();
  return { type: 'platform', walletId: wallet._id, revenueSharePct: env.ADMIN_REVENUE_PCT };
}

/**
 * Settlement of a completed trip — the money model, in order:
 *
 *   1. The customer's fare is split between the company and the admin/platform
 *      (COMPANY_REVENUE_PCT / ADMIN_REVENUE_PCT, default 60/40 per the UML).
 *   2. The driver is then paid BY WHOEVER OWNS THEM, OUT OF THAT OWNER'S SHARE —
 *      a company pays its own roster drivers, the admin pays platform drivers.
 *      The driver is never paid straight from the fare.
 *
 * This is what makes the arithmetic close: the fare is allocated exactly once, and the
 * driver's pay is a transfer between two internal wallets, not new money. A public-pool
 * ride taken by a company's driver still splits 60/40, and that company then pays its
 * driver out of its 60.
 *
 * The rate itself is per driver (Driver.payout), set by their owner — a flat charge per
 * trip or a percentage of the owner's share.
 */
export async function applyRevenueSplit(tripId: Types.ObjectId | string): Promise<void> {
  const trip = await Trip.findById(tripId);
  if (!trip) throw ApiError.notFound('Trip not found');

  // Idempotency: /complete could be retried by a flaky mobile client.
  if (trip.settled) {
    logger.warn(`Revenue split skipped — trip ${String(tripId)} already settled`);
    return;
  }

  const fare = round2(trip.fareAmount);
  const driver = await Driver.findById(trip.driverId);
  if (!driver) throw ApiError.notFound('Driver not found');

  const owner = await resolveDriverOwner(driver._id);
  const company = owner.type === 'company' ? await Company.findById(owner.companyId) : null;

  const companyPct = company?.revenueSharePct ?? env.COMPANY_REVENUE_PCT;
  const platformPct = 100 - companyPct;

  let ownerShare: number;

  if (company) {
    const companyShare = pct(fare, companyPct);
    const platformShare = round2(fare - companyShare);
    ownerShare = companyShare;

    await credit(owner.walletId, companyShare, 'credit', {
      tripId: trip._id,
      reason: 'revenue_split_company',
      sharePct: companyPct,
    });

    await credit((await getPlatformWallet())._id, platformShare, 'credit', {
      tripId: trip._id,
      reason: 'revenue_split_platform',
      sharePct: platformPct,
    });
  } else {
    // Platform-owned driver: there is no company to take a share, so the whole fare is
    // the platform's — and the platform pays the driver out of it.
    ownerShare = fare;
    await credit(owner.walletId, fare, 'credit', {
      tripId: trip._id,
      reason: 'revenue_split_platform',
      sharePct: 100,
    });
  }

  await creditDriverWallet(trip._id, owner, ownerShare);

  trip.settled = true;
  await trip.save();
}

/** Resolves what this driver is owed for one trip, given their owner's share of it. */
export function resolveDriverPayout(
  driver: { payout?: { mode: 'percentage' | 'flat'; value: number } | null },
  ownerShare: number,
): { amount: number; mode: string; value: number } {
  const mode = driver.payout?.mode ?? env.DRIVER_PAYOUT_MODE;
  const value = driver.payout?.value ?? env.DRIVER_PAYOUT_VALUE;

  // A flat rate is capped at the owner's share only in reporting, not here — if an owner
  // agreed a flat charge above what the trip earned, they wear the difference (below).
  const amount = mode === 'flat' ? round2(value) : pct(ownerShare, value);
  return { amount, mode, value };
}

/**
 * Moves the driver's pay from their owner's wallet into the driver's wallet.
 *
 * This is a TRANSFER, not a credit out of thin air: the owner is debited and the driver
 * credited, so the two ledgers always reconcile against the fare.
 */
export async function creditDriverWallet(
  tripId: Types.ObjectId | string,
  ownerOverride?: DriverOwner,
  ownerShareOverride?: number,
): Promise<void> {
  const trip = await Trip.findById(tripId);
  if (!trip) throw ApiError.notFound('Trip not found');

  const driver = await Driver.findById(trip.driverId);
  if (!driver) throw ApiError.notFound('Driver not found');

  const owner = ownerOverride ?? (await resolveDriverOwner(driver._id));
  const ownerShare =
    ownerShareOverride ??
    (owner.type === 'company' ? pct(trip.fareAmount, owner.revenueSharePct) : round2(trip.fareAmount));

  const payout = resolveDriverPayout(driver, ownerShare);
  if (payout.amount <= 0) return;

  const meta = {
    tripId: trip._id,
    reason: 'driver_earnings',
    paidBy: owner.type,
    payoutMode: payout.mode,
    payoutValue: payout.value,
    ownerShare,
  };

  /**
   * Deliberately NOT the guarded debit() used for withdrawals: an owner still owes their
   * driver even if a flat rate exceeds what the trip earned them. The shortfall shows up
   * as a negative owner balance — a real debt they can see — rather than a silently
   * skipped payment.
   */
  await Wallet.updateOne({ _id: owner.walletId }, { $inc: { balance: -payout.amount } });
  await Transaction.create({
    walletId: owner.walletId,
    type: 'debit',
    amount: payout.amount,
    feeApplied: 0,
    meta: { ...meta, reason: 'driver_payout_paid' },
  });

  if (payout.amount > ownerShare) {
    logger.warn(
      `Driver payout ${payout.amount} exceeds ${owner.type} share ${ownerShare} on trip ${String(trip._id)}`,
    );
  }

  const driverWallet = await getOrCreateWallet(driver.userId, 'driver');
  await credit(driverWallet._id, payout.amount, 'credit', meta);

  await notify.send(driver.userId, NOTIFICATION_TYPES.TRIP_COMPLETED, {
    message: `You earned ${payout.amount.toFixed(2)} for this trip`,
    tripId: String(trip._id),
    amount: payout.amount,
    paidBy: owner.type,
  });
}

/* -------------------------------------------------------------------------- */
/* Customer / driver facing operations                                         */
/* -------------------------------------------------------------------------- */

export async function getWalletForUser(userId: string, q: PaginationQuery) {
  const user = await User.findById(userId).lean();
  if (!user) throw ApiError.notFound('User not found');

  const ownerType: WalletOwnerType = user.role === 'driver' ? 'driver' : 'customer';
  const wallet = await getOrCreateWallet(userId, ownerType);

  const { skip, limit } = toSkipLimit(q);
  const [items, total] = await Promise.all([
    Transaction.find({ walletId: wallet._id }).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Transaction.countDocuments({ walletId: wallet._id }),
  ]);

  return {
    walletId: wallet._id,
    ownerType: wallet.ownerType,
    balance: round2(wallet.balance),
    transactions: paginated(
      items.map((t) => shapeTransaction(t as unknown as TransactionRow, ownerType)),
      total,
      q,
    ),
  };
}

/**
 * Spec §8 rule 2 keeps the trip fare hidden from drivers. `meta.ownerShare` is a
 * percentage of that fare, so leaving it on a driver's ledger row would hand back the
 * number the trip endpoint carefully strips. It is removed here, and `reason` is lifted
 * out of meta so clients do not have to dig for it.
 *
 * Note this cannot be perfect by design: a driver on a percentage contract knows their
 * own rate and their own pay, and can always divide. Only the explicit disclosure is
 * removed. A flat per-trip rate reveals nothing.
 */
type TransactionRow = Record<string, unknown> & { meta?: Record<string, unknown> };

function shapeTransaction(transaction: TransactionRow, ownerType: WalletOwnerType) {
  const meta = { ...(transaction.meta ?? {}) };
  if (ownerType === 'driver') delete meta.ownerShare;

  return { ...transaction, reason: meta.reason ?? null, meta };
}

/**
 * Driver withdrawal — spec §4.7 / §8 rule 3: a 10% fee applies.
 * Kept deliberately separate from useCredit() below: this is the ONLY path that charges a
 * fee, and merging the two would make it far too easy to start charging it on refunds.
 */
export async function withdraw(userId: string, amount: number, destination?: string) {
  const value = round2(amount);
  if (value <= 0) throw ApiError.badRequest('Withdrawal amount must be greater than zero');

  const wallet = await getOrCreateWallet(userId, 'driver');
  const feeApplied = pct(value, env.WITHDRAWAL_FEE_PCT);
  const netPayout = round2(value - feeApplied);
  const reference = `wd_${String(wallet._id)}_${Date.now()}`;

  // Debit first: the guarded debit() is what enforces sufficient balance and prevents two
  // concurrent withdrawals from both passing the check.
  await debit(wallet._id, value, 'withdrawal', feeApplied, {
    reason: 'driver_withdrawal',
    feePct: env.WITHDRAWAL_FEE_PCT,
    netPayout,
    reference,
    payoutStatus: 'pending',
  });

  // UML: "Withdraw Wallet Balance" «include» «system» Payment Gateway / Wallet.
  // Only the NET amount leaves the platform — the fee is retained.
  const payout = await payoutFromGateway({
    amount: netPayout,
    reference,
    destination,
    description: 'Viaro driver withdrawal',
  });

  if (!payout.success) {
    // The money never left, so the driver must not be out of pocket. Put it back and
    // record the reversal rather than leaving a silent hole in the ledger.
    await Wallet.updateOne({ _id: wallet._id }, { $inc: { balance: value } });
    await Transaction.create({
      walletId: wallet._id,
      type: 'credit',
      amount: value,
      feeApplied: 0,
      meta: { reason: 'withdrawal_reversed', reference, provider: payout.provider },
    });
    throw new ApiError(402, 'Payout was declined by the payment gateway — your balance is unchanged');
  }

  await Transaction.updateOne(
    { walletId: wallet._id, 'meta.reference': reference, type: 'withdrawal' },
    {
      $set: {
        'meta.payoutStatus': 'paid',
        'meta.gatewayReference': payout.gatewayReference,
        'meta.provider': payout.provider,
        'meta.placeholder': payout.placeholder,
      },
    },
  );

  const updated = await Wallet.findById(wallet._id).lean();

  return {
    requested: value,
    feeApplied,
    netPayout,
    balance: round2(updated?.balance ?? 0),
    payout: {
      status: payout.status,
      gatewayReference: payout.gatewayReference,
      provider: payout.provider,
      placeholder: payout.placeholder,
    },
  };
}

/**
 * Spends the credit a passenger chose at booking, now that a Trip exists to spend it on.
 *
 * Called from both places a Trip is created — the chauffeur accepting from the pool, and
 * operations assigning one directly — so the choice is honoured whichever way the ride
 * is filled.
 *
 * Everything here is best-effort and clamped. The booking may have been made days ago:
 * the balance can have been spent elsewhere, and the fare can have changed with a
 * vehicle-class amendment. Applying `min(requested, balance, fare)` means a stale
 * intention quietly does less rather than failing the assignment — which is the right
 * trade, because nobody would want a chauffeur assignment to fail over a discount.
 */
export async function applyRequestedCredit(tripId: Types.ObjectId | string): Promise<number> {
  const trip = await Trip.findById(tripId);
  if (!trip) return 0;

  const booking = await Booking.findById(trip.bookingId).lean();
  const requested = booking?.walletCreditRequested ?? 0;
  if (!booking || requested <= 0) return 0;

  const wallet = await getOrCreateWallet(booking.customerId, 'customer');
  const outstanding = round2(trip.fareAmount - trip.creditApplied);

  const value = round2(Math.min(requested, round2(wallet.balance), outstanding));
  if (value <= 0) return 0;

  // Same fee-free path as a manual application (spec §8 rule 3).
  await debit(wallet._id, value, 'debit', 0, {
    reason: 'ride_credit',
    tripId: trip._id,
    fromBookingIntent: true,
  });

  trip.creditApplied = round2(trip.creditApplied + value);
  await trip.save();

  logger.info(`Applied ${value} wallet credit to trip ${String(trip._id)} from booking intent`);
  return value;
}

/**
 * Puts wallet credit back that was applied to a ride.
 *
 * The mirror of useCredit(), and deliberately a separate function rather than a negative
 * amount through the same one: releasing has its own rules that applying does not have,
 * and folding them together is how one of them ends up skipped.
 *
 * Two things make this safe to expose:
 *
 *   - it cannot run once the fare has been charged. `collectPayment` bills
 *     `fareAmount - creditApplied`, so releasing credit afterwards would hand the money
 *     back on a trip that was already invoiced at the discounted figure.
 *   - it never returns more than was applied, so it cannot mint balance.
 *
 * Reachable by the customer who applied it and by operations. `actorRole` is trusted
 * from the verified token; a customer still has to own the trip.
 */
export async function releaseCredit(
  actorUserId: string,
  actorRole: UserRole,
  tripId: string,
  /** Omit to release everything currently applied. */
  amount?: number,
) {
  const trip = await Trip.findById(tripId);
  if (!trip) throw ApiError.notFound('Trip not found');

  const booking = await Booking.findById(trip.bookingId).lean();
  if (!booking) throw ApiError.notFound('Booking not found');

  if (actorRole !== 'admin' && String(booking.customerId) !== actorUserId) {
    throw ApiError.forbidden('You can only change credit on your own trip');
  }

  if (trip.creditApplied <= 0) {
    throw ApiError.conflict('No wallet credit has been applied to this trip');
  }

  const charged = await Transaction.findOne({
    'meta.tripId': trip._id,
    'meta.reason': 'trip_payment',
  }).lean();

  if (charged) {
    throw new ApiError(409, 'This fare has already been charged, so its credit cannot be released', {
      code: 'FARE_ALREADY_CHARGED',
    });
  }

  const value = amount === undefined ? trip.creditApplied : round2(amount);
  if (value <= 0) throw ApiError.badRequest('Amount must be greater than zero');
  if (value > trip.creditApplied) {
    throw ApiError.badRequest(
      `Only ${trip.creditApplied.toFixed(2)} of credit is applied to this trip`,
    );
  }

  // The customer's own wallet, not the actor's — an operator releasing credit must
  // return it to the passenger it came from.
  const wallet = await getOrCreateWallet(booking.customerId, 'customer');

  // No fee, matching useCredit(): spec §8 rule 3 keeps credit movements fee-free, and a
  // fee on an undo would quietly charge someone for changing their mind.
  await credit(wallet._id, value, 'refund', {
    reason: 'ride_credit_released',
    tripId: trip._id,
    releasedBy: actorRole,
  });

  trip.creditApplied = round2(trip.creditApplied - value);
  await trip.save();

  const updated = await Wallet.findById(wallet._id).lean();

  events.publish({
    topic: 'wallet',
    action: 'credit_released',
    id: String(trip._id),
    roles: ['admin'],
    userIds: [String(booking.customerId)],
  });

  return {
    tripId: trip._id,
    released: value,
    creditApplied: trip.creditApplied,
    outstandingFare: round2(trip.fareAmount - trip.creditApplied),
    feeApplied: 0,
    balance: round2(updated?.balance ?? 0),
  };
}

/**
 * POST /payments/collect — charge the customer for a completed trip (spec §4.7).
 * Calls the PLACEHOLDER gateway and records the resulting ledger row against the
 * customer's wallet, so the money trail exists before a real provider is wired in.
 */
export async function collectPayment(tripId: string) {
  const trip = await Trip.findById(tripId);
  if (!trip) throw ApiError.notFound('Trip not found');

  const booking = await Booking.findById(trip.bookingId).lean();
  if (!booking) throw ApiError.notFound('Booking not found');

  const amountDue = round2(trip.fareAmount - trip.creditApplied);
  if (amountDue <= 0) {
    return { charged: 0, reason: 'Fare already covered by wallet credit', gateway: null };
  }

  /*
   * Idempotent, the same way applyRevenueSplit() is.
   *
   * Nothing stopped this running twice: a retried request, a double-clicked Collect
   * button or a gateway timeout that was actually a success would each bill the customer
   * a second time, and the only trace was two ledger rows with different gateway
   * references. Charging money is the one operation here that must never be repeated by
   * accident, so a prior charge is reported rather than a new one made.
   */
  const already = await Transaction.findOne({
    'meta.tripId': trip._id,
    'meta.reason': 'trip_payment',
  }).lean();

  if (already) {
    return {
      charged: 0,
      alreadyCharged: true,
      amount: round2(already.amount),
      reason: 'This fare has already been charged',
      gateway: null,
    };
  }

  const gateway = await collectFromGateway({
    amount: amountDue,
    reference: String(trip._id),
    description: `Viaro ${booking.tripType} trip`,
  });

  if (!gateway.success) throw new ApiError(402, 'Payment was declined by the gateway');

  const wallet = await getOrCreateWallet(booking.customerId, 'customer');
  await Transaction.create({
    walletId: wallet._id,
    type: 'debit',
    amount: amountDue,
    feeApplied: 0,
    meta: {
      reason: 'trip_payment',
      tripId: trip._id,
      gatewayReference: gateway.gatewayReference,
      provider: gateway.provider,
      placeholder: gateway.placeholder,
    },
  });

  return { charged: amountDue, gateway };
}

/* -------------------------------------------------------------------------- */
/* Saved cards (customer screen 12 "Payment")                                  */
/* -------------------------------------------------------------------------- */

/**
 * Cards are tokenised by the gateway in the client; only the token and display
 * details reach us. Never accept a raw card number on this API — see PaymentMethod.
 */
export async function savePaymentMethod(
  userId: string,
  input: { gatewayToken: string; brand?: string; last4?: string; expMonth?: number; expYear?: number; makeDefault?: boolean },
) {
  const provider = env.PAYMENT_GATEWAY_PROVIDER || 'mock';
  const existing = await PaymentMethod.countDocuments({ userId });

  if (input.makeDefault || existing === 0) {
    await PaymentMethod.updateMany({ userId }, { $set: { isDefault: false } });
  }

  try {
    return await PaymentMethod.create({
      userId,
      gatewayToken: input.gatewayToken,
      provider,
      brand: input.brand,
      last4: input.last4,
      expMonth: input.expMonth,
      expYear: input.expYear,
      isDefault: input.makeDefault || existing === 0,
    });
  } catch (err) {
    if (typeof err === 'object' && err && 'code' in err && (err as { code: number }).code === 11000) {
      throw ApiError.conflict('That card is already saved');
    }
    throw err;
  }
}

export async function listPaymentMethods(userId: string) {
  return PaymentMethod.find({ userId }).sort({ isDefault: -1, createdAt: -1 }).lean();
}

export async function deletePaymentMethod(userId: string, methodId: string) {
  const method = await PaymentMethod.findOneAndDelete({ _id: methodId, userId });
  if (!method) throw ApiError.notFound('Payment method not found');

  // Never leave the customer without a default card.
  if (method.isDefault) {
    const next = await PaymentMethod.findOne({ userId }).sort({ createdAt: -1 });
    if (next) {
      next.isDefault = true;
      await next.save();
    }
  }

  return { deleted: true };
}

/**
 * Webhook event handler (spec §4.7). Called only after the signature has been verified.
 *
 * Gateways deliver the same event more than once, so every branch must be idempotent —
 * here that means keying off the gateway reference already stored on the Transaction.
 */
export async function handleGatewayEvent(event: {
  type?: string;
  data?: { object?: Record<string, unknown> };
}): Promise<void> {
  const object = event.data?.object ?? {};
  const reference =
    (object.metadata as { reference?: string } | undefined)?.reference ?? (object.id as string | undefined);

  switch (event.type) {
    case 'payment_intent.succeeded':
    case 'charge.succeeded': {
      if (!reference) break;
      const existing = await Transaction.findOne({ 'meta.tripId': reference }).lean();
      if (existing) {
        logger.info(`Gateway confirmed payment already recorded for trip ${reference}`);
      } else {
        logger.warn(`Gateway reported a payment with no matching transaction: ${reference}`);
      }
      break;
    }

    case 'payment_intent.payment_failed':
    case 'charge.failed': {
      logger.error(`Gateway reported a FAILED payment for ${reference ?? 'unknown reference'}`);
      break;
    }

    case 'charge.refunded': {
      logger.info(`Gateway reported a refund for ${reference ?? 'unknown reference'}`);
      break;
    }

    default:
      logger.info(`Unhandled gateway event '${event.type ?? 'unknown'}'`);
  }
}

/**
 * Customer applies wallet credit to a ride — spec §4.7 / §8 rule 3: NO fee, ever.
 * Separate code path from withdraw() on purpose.
 */
export async function useCredit(userId: string, tripId: string, amount: number) {
  const value = round2(amount);
  if (value <= 0) throw ApiError.badRequest('Credit amount must be greater than zero');

  const trip = await Trip.findById(tripId);
  if (!trip) throw ApiError.notFound('Trip not found');

  const booking = await Booking.findById(trip.bookingId).lean();
  if (!booking) throw ApiError.notFound('Booking not found');
  if (String(booking.customerId) !== userId) {
    throw ApiError.forbidden('You can only apply credit to your own trip');
  }

  const outstanding = round2(trip.fareAmount - trip.creditApplied);
  if (outstanding <= 0) throw ApiError.conflict('This trip is already fully covered by credit');
  if (value > outstanding) {
    throw ApiError.badRequest(`Credit exceeds the outstanding fare of ${outstanding.toFixed(2)}`);
  }

  const wallet = await getOrCreateWallet(userId, 'customer');

  // feeApplied is explicitly 0 — see spec §8 rule 3.
  await debit(wallet._id, value, 'debit', 0, {
    reason: 'ride_credit',
    tripId: trip._id,
  });

  trip.creditApplied = round2(trip.creditApplied + value);
  await trip.save();

  const updated = await Wallet.findById(wallet._id).lean();

  return {
    tripId: trip._id,
    creditApplied: trip.creditApplied,
    outstandingFare: round2(trip.fareAmount - trip.creditApplied),
    feeApplied: 0,
    balance: round2(updated?.balance ?? 0),
  };
}
