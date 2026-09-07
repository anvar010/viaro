"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ApiError } from "@/lib/api/client";
import * as account from "@/lib/api/account";
import * as wallet from "@/lib/api/wallet";
import { clearSession } from "@/lib/auth/session";
import type { FormState } from "@/lib/actions/auth";
import type { TicketCategory } from "@/lib/api/types";
import { MONTHLY_PLAN } from "@/lib/constants";

function toFormState(err: unknown): FormState {
  if (err instanceof ApiError) return { error: err.message, fieldErrors: err.fieldErrors };
  return { error: "Something went wrong. Please try again." };
}

/* -------------------------------- profile --------------------------------- */

export async function updateProfileAction(
  _prev: (FormState & { saved?: boolean }) | undefined,
  formData: FormData,
): Promise<FormState & { saved?: boolean }> {
  try {
    await account.updateMe({
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
    });
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/account");
  return { saved: true };
}

export async function deleteAccountAction() {
  try {
    await account.deleteMe();
  } catch (err) {
    return toFormState(err);
  }
  await clearSession();
  redirect("/?deleted=1");
}

/* ------------------------------ subscription ------------------------------- */

export async function subscribeAction(): Promise<FormState | void> {
  try {
    await wallet.subscribe(MONTHLY_PLAN.plan, MONTHLY_PLAN.price);
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/subscription");
  revalidatePath("/account");
}

export async function cancelSubscriptionAction(): Promise<FormState | void> {
  try {
    await wallet.cancelSubscription();
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/subscription");
  revalidatePath("/account");
}

/* -------------------------------- payment ---------------------------------- */

export async function removePaymentMethodAction(id: string): Promise<FormState | void> {
  try {
    await wallet.deletePaymentMethod(id);
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/account");
}

/* ------------------------------ notifications ------------------------------ */

export async function markNotificationReadAction(id: string): Promise<FormState | void> {
  try {
    await account.markNotificationRead(id);
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/notifications");
}

/* --------------------------------- support --------------------------------- */

export async function createTicketAction(
  _prev: FormState | undefined,
  formData: FormData,
): Promise<FormState> {
  let id: string;
  try {
    const ticket = await account.createTicket({
      category: String(formData.get("category") ?? "other") as TicketCategory,
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    });
    id = ticket._id;
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/support");
  redirect(`/support/${id}`);
}

export async function replyToTicketAction(
  _prev: FormState | undefined,
  formData: FormData,
): Promise<FormState> {
  const id = String(formData.get("ticketId") ?? "");
  try {
    await account.replyToTicket(id, String(formData.get("message") ?? "").trim());
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath(`/support/${id}`);
  return {};
}

/* ------------------------------- favourites -------------------------------- */

export async function removeFavoriteAction(driverId: string): Promise<FormState | void> {
  try {
    await account.removeFavorite(driverId);
  } catch (err) {
    return toFormState(err);
  }
  revalidatePath("/account");
}
