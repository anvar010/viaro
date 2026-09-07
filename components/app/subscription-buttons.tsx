"use client";

import { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { ErrorNote } from "@/components/app/shell";
import { subscribeAction, cancelSubscriptionAction } from "@/lib/actions/account";

export function SubscribeButton() {
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {error ? <ErrorNote>{error}</ErrorNote> : null}
      <Button
        size="lg"
        className="w-full"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const result = await subscribeAction();
            setError(result?.error ?? null);
          })
        }
      >
        {pending ? "Activating…" : "Subscribe"}
      </Button>
    </div>
  );
}

export function CancelSubscriptionButton() {
  const [pending, start] = useTransition();
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!confirming) {
    return (
      <Button variant="outline" className="w-full" onClick={() => setConfirming(true)}>
        Cancel plan
      </Button>
    );
  }

  return (
    <div className="space-y-3">
      {error ? <ErrorNote>{error}</ErrorNote> : null}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={() => setConfirming(false)}>
          Keep plan
        </Button>
        <Button
          variant="destructive"
          className="flex-1"
          disabled={pending}
          onClick={() =>
            start(async () => {
              const result = await cancelSubscriptionAction();
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
