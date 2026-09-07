"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, ErrorNote } from "@/components/app/shell";
import { addFavoriteAction } from "@/lib/actions/trip";

/**
 * POST /users/me/favorites/:driverId takes an id, and there is no endpoint to search
 * chauffeurs by name — so this asks for the id rather than pretending to offer a picker
 * the API cannot back.
 */
export function AddFavoriteForm() {
  const [pending, start] = useTransition();
  const [driverId, setDriverId] = useState("");
  const [state, setState] = useState<{ error?: string; done?: boolean }>({});

  const valid = /^[a-fA-F0-9]{24}$/.test(driverId.trim());

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        start(async () => {
          const result = await addFavoriteAction(driverId.trim());
          setState(result?.error ? { error: result.error } : { done: true });
          if (!result?.error) setDriverId("");
        });
      }}
      className="space-y-4"
    >
      {state.error ? <ErrorNote>{state.error}</ErrorNote> : null}

      <Field
        label="Driver id"
        htmlFor="driverId"
        hint="24 characters, from the trip record."
        error={driverId && !valid ? "That does not look like a driver id" : undefined}
      >
        <Input
          id="driverId"
          value={driverId}
          onChange={(event) => setDriverId(event.target.value)}
          placeholder="6a86358b731b9adff2cb07af"
        />
      </Field>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={pending || !valid}>
          {pending ? "Saving…" : "Add favourite"}
        </Button>
        {state.done ? <span className="text-sm text-brand">Added</span> : null}
      </div>
    </form>
  );
}
