"use client";

import { useCallback, useEffect, useState } from "react";
import { Badge, Card, Kicker, WarnBox } from "@/components/ui/Surfaces";
import { Button } from "@/components/ui/Button";
import { ConsolePage } from "@/components/ui/DataTable";
import {
  listDrivers,
  updateDriver,
  listPenalties,
  type RosterDriver,
  type PenaltiesReport,
} from "@/lib/api/admin";
import { ApiError } from "@/lib/api/client";

const inputClass =
  "w-full rounded-field border border-border bg-surface-raised px-3 py-2 text-note text-fg outline-none";

const nameOf = (driver: RosterDriver) =>
  typeof driver.userId === "object" ? driver.userId.name : "Chauffeur";

/**
 * The platform roster and payout terms.
 *
 * An admin can review every driver and set terms, but **cannot create one** —
 * `POST /admin/drivers` is company-only, so no add form is offered here.
 */
export default function DriversPage() {
  const [drivers, setDrivers] = useState<RosterDriver[] | null>(null);
  const [penalties, setPenalties] = useState<PenaltiesReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const [list, pen] = await Promise.all([listDrivers(), listPenalties()]);
      setDrivers(Array.isArray(list) ? list : (list.items ?? []));
      setPenalties(pen);
      setError(null);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not load drivers");
      setDrivers([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <ConsolePage
      title="Drivers"
      description="Every chauffeur on the platform, their standing and what they are paid."
    >
      {error ? <p className="mb-4 text-note font-bold text-danger">{error}</p> : null}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start">
        <Card className="p-0">
          <div className="px-6 pt-6">
            <Kicker>Roster</Kicker>
          </div>

          {drivers === null ? (
            <p className="p-6 text-note text-fg-muted">Loading…</p>
          ) : drivers.length === 0 ? (
            <p className="p-6 text-note text-fg-muted">
              No chauffeurs yet. They appear here once they register or a company adds
              them.
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-border-subtle">
              {drivers.map((driver) => (
                <li key={driver._id} className="px-6 py-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div>
                      <p className="text-meta font-bold text-fg">{nameOf(driver)}</p>
                      <p className="mt-0.5 text-note text-fg-muted">
                        {driver.vehicleClass}
                        {typeof driver.rating === "number"
                          ? ` · ${driver.rating.toFixed(2)} ★`
                          : ""}
                        {driver.penaltyCount ? ` · ${driver.penaltyCount} penalties` : ""}
                      </p>
                    </div>
                    <span className="ml-auto">
                      <Badge>{driver.status}</Badge>
                    </span>
                  </div>
                  <div className="mt-3">
                    <PayoutForm driver={driver} onDone={load} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <Kicker>Penalties</Kicker>
            <p className="mt-3 text-[1.75rem] font-bold tracking-tight text-fg">
              {penalties?.totalEvents ?? "—"}
            </p>
            <p className="mt-1.5 text-note text-fg-muted">
              across {penalties?.totalDrivers ?? 0} chauffeurs
            </p>

            {penalties && penalties.drivers.length > 0 ? (
              <ul className="mt-4 divide-y divide-border-subtle">
                {penalties.drivers.slice(0, 8).map((row) => (
                  <li key={row.driverId} className="flex gap-3 py-2.5 text-note">
                    <span className="truncate text-fg">{row.user?.name ?? row.driverId}</span>
                    <span className="ml-auto shrink-0 font-bold text-fg-muted">
                      {row.penaltyCount}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>

          <WarnBox title="Admins cannot add a driver">
            Only a company account can create one, through the fleet console. An admin
            reviews and sets terms; a company owns its roster.
          </WarnBox>
        </div>
      </div>
    </ConsolePage>
  );
}

function PayoutForm({ driver, onDone }: { driver: RosterDriver; onDone: () => void }) {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<{ error?: string; saved?: boolean }>({});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setPending(true);
        try {
          await updateDriver(driver._id, {
            payout: {
              mode: String(form.get("mode")) as "percentage" | "flat",
              value: Number(form.get("value")),
            },
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
      {state.error ? <p className="w-full text-label text-danger">{state.error}</p> : null}

      <label className="w-40">
        <span className="text-label font-bold text-fg-muted">Payout mode</span>
        <select
          name="mode"
          defaultValue={driver.payout?.mode ?? "percentage"}
          className={`${inputClass} mt-1`}
        >
          <option value="percentage">Percentage</option>
          <option value="flat">Flat per trip</option>
        </select>
      </label>

      <label className="w-28">
        <span className="text-label font-bold text-fg-muted">Value</span>
        <input
          name="value"
          type="number"
          step="0.01"
          min={0}
          defaultValue={driver.payout?.value ?? 70}
          className={`${inputClass} mt-1`}
        />
      </label>

      <Button type="submit" variant="secondary" block={false} disabled={pending}>
        {pending ? "Saving…" : "Save terms"}
      </Button>
      {state.saved ? <span className="text-note text-success">Saved</span> : null}
    </form>
  );
}
