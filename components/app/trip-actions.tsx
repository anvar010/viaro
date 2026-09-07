"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { ErrorNote } from "@/components/app/shell";
import { cancelBookingAction } from "@/lib/actions/booking";
import type { TripType } from "@/lib/api/types";

/** Matches the API ceiling, so the note is trimmed here rather than rejected there. */
const REASON_MAX = 300;

export function CancelTripButton({
  bookingId,
  status,
  tripType,
  tripId,
}: {
  bookingId: string;
  status: string;
  tripType: TripType;
  tripId?: string;
}) {
  const [confirming, setConfirming] = useState(false);
  const [reason, setReason] = useState("");
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!confirming) {
    return (
      <Button variant="outline" className="w-full" onClick={() => setConfirming(true)}>
        Cancel this booking
      </Button>
    );
  }

  return (
    <div className="space-y-3">
      {error ? <ErrorNote>{error}</ErrorNote> : null}

      {/*
        Optional on purpose. Operations wants to know why a booking fell through, but
        making it mandatory only produces "asdf" — and a passenger already committed to
        cancelling should not be held at a form. Blank is stored as no reason at all,
        never as an empty string, so the console can tell the two apart.
      */}
      <div>
        <label
          htmlFor={`cancel-reason-${bookingId}`}
          className="text-sm font-medium text-foreground"
        >
          Reason <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id={`cancel-reason-${bookingId}`}
          value={reason}
          onChange={(event) => setReason(event.target.value.slice(0, REASON_MAX))}
          rows={2}
          disabled={pending}
          placeholder="Plans changed, flight moved, booked by mistake…"
          className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:opacity-60"
        />
        <p className="mt-1.5 text-xs text-muted-foreground">
          Helps our team look after you next time.
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => setConfirming(false)}
          disabled={pending}
        >
          Keep it
        </Button>
        <Button
          variant="destructive"
          className="flex-1"
          disabled={pending}
          onClick={() =>
            start(async () => {
              const result = await cancelBookingAction(
                bookingId,
                status,
                tripType,
                tripId,
                reason,
              );
              setError(result?.error ?? null);
            })
          }
        >
          {pending ? "Cancelling…" : "Confirm"}
        </Button>
      </div>
    </div>
  );
}
