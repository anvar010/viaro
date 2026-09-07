import "server-only";
import { api } from "./client";
import type { PaymentMethod, Subscription, Wallet } from "./types";

export const getMyWallet = (page = 1, limit = 20) =>
  api.get<Wallet>("/wallet/me", { query: { page, limit } });

/** Driver-only on the backend: customers cannot withdraw. */
export const withdraw = (amount: number, destination?: string) =>
  api.post<unknown>("/wallet/withdraw", { amount, ...(destination ? { destination } : {}) });

/** Applies wallet credit against a trip, not a booking - it needs a tripId. */
export const useCredit = (tripId: string, amount: number) =>
  api.post<unknown>("/wallet/use-credit", { tripId, amount });

/** Omit `amount` to take all of it back off the trip. */
export const releaseCredit = (tripId: string, amount?: number) =>
  api.post<unknown>("/wallet/release-credit", amount === undefined ? { tripId } : { tripId, amount });

/* --------------------------- saved cards (vault) -------------------------- */
/** Note the prefix: the card vault is mounted at /payments, not /wallet. */

export const listPaymentMethods = () => api.get<PaymentMethod[]>("/payments/methods");

export const savePaymentMethod = (input: {
  gatewayToken: string;
  brand?: string;
  last4?: string;
  expMonth?: number;
  expYear?: number;
  makeDefault?: boolean;
}) => api.post<PaymentMethod>("/payments/methods", input);

export const deletePaymentMethod = (id: string) =>
  api.delete<{ deleted: boolean }>(`/payments/methods/${id}`);

/* ------------------------------ subscriptions ----------------------------- */

export const getMySubscription = () => api.get<Subscription | null>("/subscriptions/me");
export const subscribe = (plan: string, price: number) =>
  api.post<Subscription>("/subscriptions", { plan, price });
export const cancelSubscription = () => api.delete<Subscription>("/subscriptions/me");
