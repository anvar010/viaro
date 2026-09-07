import crypto from 'node:crypto';
import { env } from '../config/env';
import { logger } from '../utils/logger';

/**
 * Payment gateway client (spec §4.7).
 *
 * PAYMENT_GATEWAY_PROVIDER selects the adapter: `stripe` is implemented against the live
 * REST API (no SDK dependency); with no provider or key configured it falls back to
 * `mock` so the system still runs end to end. Adding checkout.com / tap means adding one
 * adapter here and nothing else.
 */
export interface ChargeRequest {
  amount: number;
  currency?: string;
  reference: string;
  description?: string;
  /** Saved payment method / customer token, when the client already holds one. */
  paymentMethodId?: string;
}

export interface ChargeResult {
  success: boolean;
  gatewayReference: string;
  amount: number;
  currency: string;
  provider: string;
  status: string;
  placeholder: boolean;
  /** Present when the gateway needs the customer to complete 3-D Secure. */
  requiresAction?: boolean;
  clientSecret?: string;
}

const REQUEST_TIMEOUT_MS = 15_000;
const DEFAULT_CURRENCY = 'USD';

export async function collectPayment(request: ChargeRequest): Promise<ChargeResult> {
  const provider = (env.PAYMENT_GATEWAY_PROVIDER || '').toLowerCase();
  const currency = request.currency ?? DEFAULT_CURRENCY;

  if (!provider || !env.PAYMENT_GATEWAY_SECRET_KEY) return mockCharge(request, currency, provider || 'mock');

  try {
    switch (provider) {
      case 'stripe':
        return await chargeStripe(request, currency);
      default:
        logger.warn(`Unknown PAYMENT_GATEWAY_PROVIDER '${provider}' — no charge attempted`);
        return mockCharge(request, currency, provider);
    }
  } catch (err) {
    logger.error(`Payment failed for ${request.reference} via ${provider}`, err);
    return {
      success: false,
      gatewayReference: '',
      amount: request.amount,
      currency,
      provider,
      status: 'failed',
      placeholder: false,
    };
  }
}

/* ---------------------------------- stripe -------------------------------- */

interface StripePaymentIntent {
  id: string;
  status: string;
  amount: number;
  currency: string;
  client_secret?: string;
}

async function chargeStripe(request: ChargeRequest, currency: string): Promise<ChargeResult> {
  // Stripe works in the currency's smallest unit — cents, not dollars.
  const form = new URLSearchParams({
    amount: String(Math.round(request.amount * 100)),
    currency: currency.toLowerCase(),
    'metadata[reference]': request.reference,
    confirm: 'true',
  });

  if (request.description) form.set('description', request.description);
  if (request.paymentMethodId) form.set('payment_method', request.paymentMethodId);
  // Off-session: the trip is already over, the customer is not at the checkout page.
  form.set('off_session', 'true');

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.PAYMENT_GATEWAY_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        // Protects against a retried request charging the customer twice.
        'Idempotency-Key': `viaro_${request.reference}`,
      },
      body: form,
      signal: controller.signal,
    });

    const intent = (await res.json()) as StripePaymentIntent & { error?: { message: string } };

    if (!res.ok) throw new Error(intent.error?.message ?? `${res.status} ${res.statusText}`);

    return {
      success: intent.status === 'succeeded',
      gatewayReference: intent.id,
      amount: intent.amount / 100,
      currency: intent.currency.toUpperCase(),
      provider: 'stripe',
      status: intent.status,
      placeholder: false,
      requiresAction: intent.status === 'requires_action',
      clientSecret: intent.client_secret,
    };
  } finally {
    clearTimeout(timer);
  }
}

/* ---------------------------------- payouts ------------------------------- */

/**
 * UML: "Withdraw Wallet Balance" «include» «system» Payment Gateway / Wallet.
 *
 * Money leaving the platform to a driver's bank/card. On Stripe this is a Transfer to a
 * connected account; other gateways call it a payout or disbursement.
 *
 * `destination` is the driver's gateway account id. Until drivers are onboarded to the
 * gateway there will be none, in which case this returns a mock result — the ledger entry
 * is still authoritative and the real transfer can be replayed from it.
 */
export interface PayoutRequest {
  amount: number;
  currency?: string;
  reference: string;
  destination?: string;
  description?: string;
}

export async function payoutToBeneficiary(request: PayoutRequest): Promise<ChargeResult> {
  const provider = (env.PAYMENT_GATEWAY_PROVIDER || '').toLowerCase();
  const currency = request.currency ?? DEFAULT_CURRENCY;

  if (!provider || !env.PAYMENT_GATEWAY_SECRET_KEY || !request.destination) {
    logger.warn('paymentGateway: mock payout — no provider/key/destination configured', {
      reference: request.reference,
      amount: request.amount,
    });
    return {
      success: true,
      gatewayReference: `mock_payout_${crypto.randomUUID()}`,
      amount: request.amount,
      currency,
      provider: provider || 'mock',
      status: 'paid',
      placeholder: true,
    };
  }

  try {
    if (provider !== 'stripe') {
      logger.warn(`Payouts not implemented for provider '${provider}'`);
      throw new Error(`Payouts not implemented for '${provider}'`);
    }

    const form = new URLSearchParams({
      amount: String(Math.round(request.amount * 100)),
      currency: currency.toLowerCase(),
      destination: request.destination,
      'metadata[reference]': request.reference,
    });
    if (request.description) form.set('description', request.description);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch('https://api.stripe.com/v1/transfers', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.PAYMENT_GATEWAY_SECRET_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          // Stops a retried withdrawal from paying the driver twice.
          'Idempotency-Key': `viaro_payout_${request.reference}`,
        },
        body: form,
        signal: controller.signal,
      });

      const transfer = (await res.json()) as {
        id?: string;
        amount?: number;
        currency?: string;
        error?: { message: string };
      };

      if (!res.ok) throw new Error(transfer.error?.message ?? `${res.status} ${res.statusText}`);

      return {
        success: true,
        gatewayReference: transfer.id ?? '',
        amount: (transfer.amount ?? 0) / 100,
        currency: (transfer.currency ?? currency).toUpperCase(),
        provider: 'stripe',
        status: 'paid',
        placeholder: false,
      };
    } finally {
      clearTimeout(timer);
    }
  } catch (err) {
    logger.error(`Payout failed for ${request.reference}`, err);
    return {
      success: false,
      gatewayReference: '',
      amount: request.amount,
      currency,
      provider,
      status: 'failed',
      placeholder: false,
    };
  }
}

/* ------------------------------ webhook security -------------------------- */

/**
 * Verifies a webhook came from the gateway.
 *
 * `rawBody` MUST be the exact bytes received — app.ts captures them before JSON parsing,
 * because re-serialising the parsed object changes key order and whitespace and the
 * signature then never matches.
 *
 * Stripe signs `${timestamp}.${payload}` with HMAC-SHA256 and sends
 * `t=<ts>,v1=<sig>`. Unknown providers fall back to a plain HMAC of the body.
 * The check is always enforced — an unsigned request is rejected either way.
 */
export function verifyWebhookSignature(rawBody: string, signature: string | undefined): boolean {
  const secret = env.PAYMENT_GATEWAY_WEBHOOK_SECRET;

  if (!secret) {
    logger.error('Payment webhook rejected — PAYMENT_GATEWAY_WEBHOOK_SECRET is not configured');
    return false;
  }
  if (!signature) return false;

  const provider = (env.PAYMENT_GATEWAY_PROVIDER || '').toLowerCase();
  return provider === 'stripe'
    ? verifyStripeSignature(rawBody, signature, secret)
    : timingSafeEquals(signature, crypto.createHmac('sha256', secret).update(rawBody).digest('hex'));
}

/** Rejects replays older than this even when the signature itself is valid. */
export const WEBHOOK_TOLERANCE_SECONDS = 300;

function verifyStripeSignature(rawBody: string, header: string, secret: string): boolean {
  const parts = Object.fromEntries(
    header.split(',').map((kv) => {
      const [k, ...rest] = kv.split('=');
      return [k.trim(), rest.join('=').trim()];
    }),
  );

  const timestamp = parts.t;
  const provided = parts.v1;
  if (!timestamp || !provided) return false;

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > WEBHOOK_TOLERANCE_SECONDS) {
    logger.warn('Payment webhook rejected — signature timestamp outside tolerance');
    return false;
  }

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex');

  return timingSafeEquals(provided, expected);
}

function timingSafeEquals(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  // Length check first — timingSafeEqual throws on a length mismatch.
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/* ----------------------------------- mock --------------------------------- */

function mockCharge(request: ChargeRequest, currency: string, provider: string): ChargeResult {
  logger.warn('paymentGateway: mock charge — no provider/key configured, no money moved', {
    reference: request.reference,
    amount: request.amount,
    provider,
  });

  return {
    success: true,
    gatewayReference: `mock_${crypto.randomUUID()}`,
    amount: request.amount,
    currency,
    provider: provider || 'mock',
    status: 'succeeded',
    placeholder: true,
  };
}
