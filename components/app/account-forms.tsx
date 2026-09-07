"use client";

import { useActionState, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, ErrorNote } from "@/components/app/shell";
import {
  updateProfileAction,
  deleteAccountAction,
  removePaymentMethodAction,
} from "@/lib/actions/account";
import { logoutAction, forgotPasswordAction } from "@/lib/actions/auth";
import type { FormState } from "@/lib/actions/auth";
import type { User } from "@/lib/api/types";

export function ProfileForm({ user }: { user: User }) {
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(updateProfileAction, undefined);

  return (
    <form action={action} className="space-y-5">
      {state?.error ? <ErrorNote>{state.error}</ErrorNote> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={state?.fieldErrors?.name}>
          <Input id="name" name="name" defaultValue={user.name} required minLength={2} />
        </Field>
        <Field label="Phone" htmlFor="phone" error={state?.fieldErrors?.phone}>
          <Input id="phone" name="phone" defaultValue={user.phone} required />
        </Field>
      </div>

      {/* Email is not editable: PATCH /users/me accepts name, phone and vehicleClass
          only, so offering an email field would silently discard the change. */}
      <Field label="Email" htmlFor="email" hint="Contact support to change your email.">
        <Input id="email" value={user.email} disabled readOnly />
      </Field>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={pending}>
          {pending ? "Saving…" : "Save changes"}
        </Button>
        {state?.saved ? <span className="text-sm text-brand">Saved</span> : null}
      </div>
    </form>
  );
}

export function SignOutButton() {
  const [pending, start] = useTransition();
  return (
    <Button
      variant="outline"
      onClick={() => start(() => void logoutAction())}
      disabled={pending}
    >
      {pending ? "Signing out…" : "Sign out"}
    </Button>
  );
}

export function DeleteAccountButton() {
  const [confirming, setConfirming] = useState(false);
  const [pending, start] = useTransition();

  if (!confirming) {
    return (
      <Button variant="outline" onClick={() => setConfirming(true)}>
        Delete my account
      </Button>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="outline" onClick={() => setConfirming(false)} disabled={pending}>
        Keep my account
      </Button>
      <Button
        variant="destructive"
        onClick={() => start(() => void deleteAccountAction())}
        disabled={pending}
      >
        {pending ? "Deleting…" : "Delete for good"}
      </Button>
    </div>
  );
}

export function RemoveCardButton({ id }: { id: string }) {
  const [pending, start] = useTransition();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => start(() => void removePaymentMethodAction(id))}
      disabled={pending}
    >
      {pending ? "Removing…" : "Remove"}
    </Button>
  );
}

/**
 * Password change, via the reset flow.
 *
 * There is no "change my password" endpoint — the API exposes only
 * POST /auth/password/forgot (emails a link) and /auth/password/reset (consumes the
 * token). So this triggers the same flow a signed-out user gets, which is arguably the
 * safer design anyway: changing a password should prove control of the mailbox, not just
 * of an open tab.
 *
 * The response is deliberately identical whether or not the address exists — the API
 * always answers success to prevent account enumeration — so the copy says "if we have
 * an account" rather than claiming an email was definitely sent.
 */
export function ChangePasswordButton({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState<
    (FormState & { sent?: boolean }) | undefined,
    FormData
  >(forgotPasswordAction, undefined);

  if (state?.sent) {
    return (
      <p className="rounded-lg border border-brand/40 bg-brand/5 px-4 py-3 text-sm text-foreground">
        Check <span className="font-medium">{email}</span> for a link to set a new
        password. It expires in an hour.
      </p>
    );
  }

  return (
    <form action={formAction} className="space-y-3">
      <input type="hidden" name="email" value={email} />
      {state?.error ? <p className="text-sm text-destructive">{state.error}</p> : null}
      <Button type="submit" variant="outline" disabled={pending}>
        {pending ? "Sending…" : "Email me a reset link"}
      </Button>
    </form>
  );
}
