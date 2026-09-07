"use client";

import { useActionState, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, ErrorNote, money } from "@/components/app/shell";
import {
  rateTripAction,
  changeVehicleClassAction,
  changeTripLocationAction,
  useCreditAction,
  releaseCreditAction,
  clearRequestedCreditAction,
  removeFavoriteAction,
  requestFavoriteDriverAction,
} from "@/lib/actions/trip";
import { CITIES, VEHICLE_CLASSES } from "@/lib/constants";
import type { FormState } from "@/lib/actions/auth";

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/* --------------------------------- rating ---------------------------------- */

export function RateTripForm({ tripId }: { tripId: string }) {
  const [score, setScore] = useState(0);
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(rateTripAction, undefined);

  if (state?.saved) {
    return <p className="text-sm text-brand">Thanks — your rating was recorded.</p>;
  }

  return (
    <form action={action} className="space-y-4">
      {state?.error ? <ErrorNote>{state.error}</ErrorNote> : null}
      <input type="hidden" name="tripId" value={tripId} />
      <input type="hidden" name="score" value={score} />

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Your rating
        </p>
        <div className="mt-2 flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setScore(value)}
              aria-label={`${value} of 5`}
              aria-pressed={score === value}
              className={`text-2xl transition-colors ${
                value <= score ? "text-accent" : "text-muted-foreground/40"
              }`}
            >
              ★
            </button>
          ))}
        </div>
        {state?.fieldErrors?.score ? (
          <p className="mt-2 text-xs text-destructive">{state.fieldErrors.score}</p>
        ) : null}
      </div>

      <Field label="Comment (optional)" htmlFor="comment">
        <Textarea id="comment" name="comment" rows={3} maxLength={1000} />
      </Field>

      <Button type="submit" disabled={pending || score === 0}>
        {pending ? "Sending…" : "Submit rating"}
      </Button>
    </form>
  );
}

/* -------------------------- change a trip in flight ------------------------- */

export function ChangeVehicleForm({
  tripId,
  current,
}: {
  tripId: string;
  current: string;
}) {
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(changeVehicleClassAction, undefined);

  return (
    <form action={action} className="flex flex-wrap items-end gap-3">
      {state?.error ? (
        <div className="w-full">
          <ErrorNote>{state.error}</ErrorNote>
        </div>
      ) : null}
      <input type="hidden" name="tripId" value={tripId} />

      <div className="min-w-[12rem] flex-1">
        <Field label="Vehicle class" htmlFor={`vc-${tripId}`}>
          <select
            id={`vc-${tripId}`}
            name="vehicleClass"
            defaultValue={current}
            className={selectClass}
          >
            {VEHICLE_CLASSES.map((v) => (
              <option key={v.value} value={v.value}>
                {v.label} — {v.detail}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Button type="submit" variant="outline" disabled={pending}>
        {pending ? "Updating…" : "Change"}
      </Button>
      {state?.saved ? <span className="text-sm text-brand">Updated</span> : null}
    </form>
  );
}

export function ChangeRouteForm({
  tripId,
  pickup,
  drop,
  city,
}: {
  tripId: string;
  pickup: string;
  drop: string;
  city?: string;
}) {
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(changeTripLocationAction, undefined);

  const defaultCity =
    CITIES.find((c) => c.name.toLowerCase() === (city ?? "").toLowerCase())?.name ??
    "Seattle";

  return (
    <form action={action} className="space-y-4">
      {state?.error ? <ErrorNote>{state.error}</ErrorNote> : null}
      <input type="hidden" name="tripId" value={tripId} />

      <Field label="City" htmlFor={`city-${tripId}`}>
        <select
          id={`city-${tripId}`}
          name="city"
          defaultValue={defaultCity}
          className={selectClass}
        >
          {CITIES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Pickup" htmlFor={`pu-${tripId}`} error={state?.fieldErrors?.pickup}>
          <Input id={`pu-${tripId}`} name="pickup" defaultValue={pickup} minLength={3} />
        </Field>
        <Field label="Drop-off" htmlFor={`do-${tripId}`} error={state?.fieldErrors?.drop}>
          <Input id={`do-${tripId}`} name="drop" defaultValue={drop} minLength={3} />
        </Field>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" variant="outline" disabled={pending}>
          {pending ? "Saving…" : "Update route"}
        </Button>
        {state?.saved ? <span className="text-sm text-brand">Updated</span> : null}
      </div>
    </form>
  );
}

/* ------------------------------ wallet credit ------------------------------- */

export function UseCreditForm({
  tripId,
  balance,
  due,
}: {
  tripId: string;
  balance: number;
  due: number;
}) {
  const most = Math.min(balance, due);
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(useCreditAction, undefined);

  if (state?.saved) {
    return <p className="text-sm text-brand">Credit applied to this trip.</p>;
  }

  return (
    <form action={action} className="flex flex-wrap items-end gap-3">
      {state?.error ? (
        <div className="w-full">
          <ErrorNote>{state.error}</ErrorNote>
        </div>
      ) : null}
      <input type="hidden" name="tripId" value={tripId} />

      <div className="w-40">
        <Field label="Amount" htmlFor={`amt-${tripId}`} error={state?.fieldErrors?.amount}>
          <Input
            id={`amt-${tripId}`}
            name="amount"
            type="number"
            step="0.01"
            min={0.01}
            max={most > 0 ? most : undefined}
            defaultValue={most > 0 ? most.toFixed(2) : ""}
          />
        </Field>
      </div>

      <Button type="submit" variant="outline" disabled={pending || most <= 0}>
        {pending ? "Applying…" : "Apply credit"}
      </Button>
    </form>
  );
}

/**
 * Takes applied credit back off a trip.
 *
 * Sits beside the applied figure rather than under the apply form, because by the time
 * someone wants this the apply form is gone — the credit is already spent and the only
 * question is how to undo it.
 *
 * The API refuses once the fare has been charged; that message is shown as-is, since
 * "you have already been billed at this amount" is the actual answer and anything vaguer
 * just sends the passenger to support.
 */
export function ReleaseCreditForm({
  tripId,
  applied,
}: {
  tripId: string;
  applied: number;
}) {
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(releaseCreditAction, undefined);

  if (state?.saved) {
    return <p className="text-sm text-brand">Credit returned to your wallet.</p>;
  }

  return (
    <form action={action} className="space-y-2">
      {state?.error ? <ErrorNote>{state.error}</ErrorNote> : null}
      <input type="hidden" name="tripId" value={tripId} />
      <button
        type="submit"
        disabled={pending}
        className="text-xs font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground disabled:opacity-60"
      >
        {pending ? "Removing…" : `Remove the ${money(applied)} credit`}
      </button>
    </form>
  );
}

/**
 * Cancels credit that was requested at booking but not yet spent.
 *
 * Deliberately worded differently from ReleaseCreditForm: nothing has left the wallet,
 * so "remove" would overstate what is happening. This only withdraws the request.
 */
export function CancelRequestedCreditForm({
  bookingId,
  requested,
}: {
  bookingId: string;
  requested: number;
}) {
  const [state, action, pending] = useActionState<
    (FormState & { saved?: boolean }) | undefined,
    FormData
  >(clearRequestedCreditAction, undefined);

  if (state?.saved) {
    return <p className="text-sm text-brand">Your credit will stay in your wallet.</p>;
  }

  return (
    <form action={action} className="space-y-2">
      {state?.error ? <ErrorNote>{state.error}</ErrorNote> : null}
      <input type="hidden" name="bookingId" value={bookingId} />
      <p className="text-xs leading-relaxed text-muted-foreground">
        {money(requested)} of wallet credit is set aside for this ride. It comes off when
        your chauffeur is assigned — nothing has left your wallet yet.
      </p>
      <button
        type="submit"
        disabled={pending}
        className="text-xs font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground disabled:opacity-60"
      >
        {pending ? "Removing…" : "Do not use my credit on this ride"}
      </button>
    </form>
  );
}

/* -------------------------------- favourites -------------------------------- */

export function RemoveFavoriteButton({ driverId }: { driverId: string }) {
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-end">
      <Button
        variant="ghost"
        size="sm"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const result = await removeFavoriteAction(driverId);
            setError(result?.error ?? null);
          })
        }
      >
        {pending ? "Removing…" : "Remove"}
      </Button>
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

export function RequestFavoriteButton({
  bookingId,
  driverId,
  name,
}: {
  bookingId: string;
  driverId: string;
  name: string;
}) {
  const [pending, start] = useTransition();
  const [state, setState] = useState<{ error?: string; done?: boolean }>({});

  if (state.done) {
    return (
      <p className="text-sm text-brand">Requested — dispatch will try {name} first.</p>
    );
  }

  return (
    <div>
      <Button
        variant="outline"
        size="sm"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const result = await requestFavoriteDriverAction(bookingId, driverId);
            setState(result?.error ? { error: result.error } : { done: true });
          })
        }
      >
        {pending ? "Requesting…" : `Request ${name}`}
      </Button>
      {/* A 409 means they are busy; dispatch falls back to the pool automatically. */}
      {state.error ? (
        <p className="mt-2 text-xs text-muted-foreground">{state.error}</p>
      ) : null}
    </div>
  );
}
