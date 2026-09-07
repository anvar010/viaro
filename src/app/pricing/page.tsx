"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, Kicker, WarnBox } from "@/components/ui/Surfaces";
import { Button } from "@/components/ui/Button";
import { ConsolePage, money } from "@/components/ui/DataTable";
import {
  listPricingRules,
  createPricingRule,
  updatePricingRule,
  type PricingRule,
} from "@/lib/api/admin";
import { ApiError } from "@/lib/api/client";

/**
 * City pricing.
 *
 * The highest-consequence screen in the console: `calculateFare` throws a 404 for any
 * city without a rule, so a missing row here means nobody can book there at all.
 */
const inputClass =
  "w-full rounded-field border border-border bg-surface-raised px-3 py-2 text-note text-fg outline-none";

export default function PricingPage() {
  const [rules, setRules] = useState<PricingRule[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setRules(await listPricingRules());
      setError(null);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not load pricing");
      setRules([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <ConsolePage
      title="City pricing"
      description="Base fare and peak multiplier per city. Stored lowercase, matched on the city a booking sends."
    >
      {error ? <p className="mb-4 text-note font-bold text-danger">{error}</p> : null}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-4">
          <Card className="p-0">
            <div className="px-6 pt-6">
              <Kicker>Rules</Kicker>
            </div>

            {rules === null ? (
              <p className="p-6 text-note text-fg-muted">Loading…</p>
            ) : rules.length === 0 ? (
              <p className="p-6 text-note text-fg-muted">
                No cities priced. Until a city has a rule, quoting there returns 404 and
                booking is impossible.
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-border-subtle">
                {rules.map((rule) => (
                  <li key={rule._id} className="px-6 py-5">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <p className="text-meta font-bold capitalize text-fg">{rule.city}</p>
                      <p className="text-note text-fg-muted">
                        {money(rule.baseFare)} base · ×{rule.peakMultiplier} at peak
                      </p>
                    </div>
                    <div className="mt-3">
                      <RuleForm rule={rule} onDone={load} />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <WarnBox title="A city with no rule cannot be booked">
            The fare endpoint answers 404 rather than falling back to a default, so
            removing a city takes it off sale immediately.
          </WarnBox>
        </div>

        <Card className="p-5">
          <Kicker>Add a city</Kicker>
          <div className="mt-4">
            <NewRuleForm onDone={load} />
          </div>
        </Card>
      </div>
    </ConsolePage>
  );
}

function RuleForm({ rule, onDone }: { rule: PricingRule; onDone: () => void }) {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<{ error?: string; saved?: boolean }>({});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setPending(true);
        try {
          await updatePricingRule(rule._id, {
            baseFare: Number(form.get("baseFare")),
            peakMultiplier: Number(form.get("peakMultiplier")),
          });
          setState({ saved: true });
          onDone();
        } catch (err) {
          setState({ error: err instanceof ApiError ? err.message : "Could not save" });
        } finally {
          setPending(false);
        }
      }}
      className="flex flex-wrap items-end gap-3"
    >
      {state.error ? (
        <p className="w-full text-label text-danger">{state.error}</p>
      ) : null}

      <label className="w-32">
        <span className="text-label font-bold text-fg-muted">Base fare</span>
        <input
          name="baseFare"
          type="number"
          step="0.01"
          min={0}
          defaultValue={rule.baseFare}
          className={`${inputClass} mt-1`}
        />
      </label>

      <label className="w-32">
        <span className="text-label font-bold text-fg-muted">Peak ×</span>
        <input
          name="peakMultiplier"
          type="number"
          step="0.01"
          min={1}
          max={10}
          defaultValue={rule.peakMultiplier}
          className={`${inputClass} mt-1`}
        />
      </label>

      <Button type="submit" variant="secondary" block={false} disabled={pending}>
        {pending ? "Saving…" : "Save"}
      </Button>
      {state.saved ? <span className="text-note text-success">Saved</span> : null}
    </form>
  );
}

function NewRuleForm({ onDone }: { onDone: () => void }) {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<{ error?: string; saved?: boolean }>({});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setPending(true);
        try {
          await createPricingRule({
            city: String(form.get("city")).trim().toLowerCase(),
            baseFare: Number(form.get("baseFare")),
            peakMultiplier: Number(form.get("peakMultiplier")),
          });
          setState({ saved: true });
          (event.target as HTMLFormElement).reset();
          onDone();
        } catch (err) {
          setState({ error: err instanceof ApiError ? err.message : "Could not add" });
        } finally {
          setPending(false);
        }
      }}
      className="space-y-4"
    >
      {state.error ? <p className="text-label text-danger">{state.error}</p> : null}

      <label className="block">
        <span className="text-label font-bold text-fg-muted">City</span>
        <input
          name="city"
          required
          minLength={2}
          placeholder="seattle"
          className={`${inputClass} mt-1`}
        />
        <span className="mt-1 block text-note text-fg-muted">
          Stored lowercase; must match what the booking sends.
        </span>
      </label>

      <label className="block">
        <span className="text-label font-bold text-fg-muted">Base fare</span>
        <input
          name="baseFare"
          type="number"
          step="0.01"
          min={0}
          defaultValue={129}
          required
          className={`${inputClass} mt-1`}
        />
      </label>

      <label className="block">
        <span className="text-label font-bold text-fg-muted">Peak multiplier</span>
        <input
          name="peakMultiplier"
          type="number"
          step="0.01"
          min={1}
          max={10}
          defaultValue={1.18}
          required
          className={`${inputClass} mt-1`}
        />
        <span className="mt-1 block text-note text-fg-muted">
          1.18 adds 18% during peak hours.
        </span>
      </label>

      <Button type="submit" variant="accent" disabled={pending}>
        {pending ? "Adding…" : "Add city"}
      </Button>
      {state.saved ? <p className="text-note text-success">Added.</p> : null}
    </form>
  );
}
