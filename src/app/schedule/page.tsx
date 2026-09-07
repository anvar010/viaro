"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ApiError } from "@/lib/api/client";
import {
  completeTrip,
  listMyTrips,
  listVehicleClasses,
  startTrip,
  type VehicleClassInfo,
} from "@/lib/api/driver";
import { refreshNavBadges } from "@/lib/nav/useNavBadges";
import type { Trip } from "@/lib/api/types";
import { useLiveChanges } from "@/lib/live/useLiveChanges";

/**
 * The chauffeur's own schedule.
 *
 * Two things this screen has to get right that the previous version did not:
 *
 *   1. ORDER. `GET /trips` returns newest-created first, and the day groups were built
 *      in that order — so the list read Sat 22nd, Sun 30th, Thu 27th. A schedule that
 *      is not in time order is not a schedule.
 *
 *   2. "UPCOMING" MEANING UPCOMING. It used to be a status filter: anything 'accepted'
 *      was upcoming, including a pickup whose time passed a fortnight ago. A ride that
 *      is still open after its pickup time is OVERDUE, which is the one thing on this
 *      page worth shouting about, and it was being filed under everything-is-fine.
 *
 * The lifecycle actions live here too. A chauffeur starting a job should not have to
 * open a detail page to press Start.
 */

const SERVICE_LABEL: Record<string, string> = {
  point2point: "Point to point",
  airport: "Airport",
  hourly: "Hourly",
};

const reference = (id: string) => `VRO-${id.slice(-6).toUpperCase()}`;

type Bucket = "overdue" | "today" | "upcoming" | "past";

const BUCKET_LABEL: Record<Bucket, string> = {
  overdue: "Needs attention",
  today: "Today",
  upcoming: "Coming up",
  past: "Finished",
};

const whenOf = (trip: Trip) => trip.booking?.scheduledAt ?? trip.timestamps.accepted ?? "";

const isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();

function bucketOf(trip: Trip): Bucket {
  if (trip.status === "completed" || trip.status === "cancelled") return "past";

  const when = whenOf(trip);
  if (!when) return "upcoming";

  const date = new Date(when);
  const now = new Date();

  // Open past its pickup time — the chauffeur either never started it or never closed
  // it out. Either way it needs a human, so it gets its own bucket at the top.
  if (date.getTime() < now.getTime() && !isSameDay(date, now)) return "overdue";
  if (isSameDay(date, now)) return "today";
  return "upcoming";
}

const dayLabel = (iso: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "Unscheduled";

const timeOf = (iso: string) =>
  iso ? new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) : "—";

export default function SchedulePage() {
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const [classes, setClasses] = useState<VehicleClassInfo[]>([]);
  const [filter, setFilter] = useState<Bucket | "all">("all");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const page = await listMyTrips({ limit: 100 });
      setTrips(page.items ?? []);
      setError(null);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not load your schedule");
      setTrips([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  // A passenger changing the pickup, or dispatch assigning a new job.
  useLiveChanges(["trip", "booking", "dispatch"], () => void load());

  useEffect(() => {
    listVehicleClasses()
      .then(setClasses)
      .catch(() => undefined);
  }, []);

  const labelFor = useMemo(() => {
    const byValue = new Map(classes.map((c) => [c.value, c.label]));
    return (value?: string) => (value ? (byValue.get(value) ?? value) : "");
  }, [classes]);

  async function act(trip: Trip, action: "start" | "complete") {
    setBusy(trip._id);
    setError(null);
    try {
      await (action === "start" ? startTrip(trip._id) : completeTrip(trip._id));
      await load();
      // Completing takes it off the "new on your schedule" count.
      refreshNavBadges();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "That did not go through.");
    } finally {
      setBusy(null);
    }
  }

  const counts = useMemo(() => {
    const tally: Record<string, number> = { all: trips?.length ?? 0 };
    for (const trip of trips ?? []) {
      const bucket = bucketOf(trip);
      tally[bucket] = (tally[bucket] ?? 0) + 1;
    }
    return tally;
  }, [trips]);

  /** Buckets in working order, each sorted by time and grouped by day. */
  const sections = useMemo(() => {
    const order: Bucket[] = ["overdue", "today", "upcoming", "past"];

    return order
      .filter((bucket) => filter === "all" || filter === bucket)
      .map((bucket) => {
        const rows = (trips ?? []).filter((trip) => bucketOf(trip) === bucket);

        // Soonest first for work still to come; most recent first for what is done.
        rows.sort((a, b) => {
          const cmp = whenOf(a).localeCompare(whenOf(b));
          return bucket === "past" ? -cmp : cmp;
        });

        const days = new Map<string, Trip[]>();
        for (const trip of rows) {
          const key = dayLabel(whenOf(trip));
          days.set(key, [...(days.get(key) ?? []), trip]);
        }

        return { bucket, days: [...days.entries()], count: rows.length };
      })
      .filter((section) => section.count > 0);
  }, [trips, filter]);

  return (
    <div className="mx-auto max-w-[1050px]">
      <h1 className="text-[1.5rem] font-bold tracking-tight text-fg">Schedule</h1>
      <p className="mt-2 text-note text-fg-muted">
        Your work in time order — soonest first, finished jobs last.
      </p>

      {error ? (
        <p className="mt-4 rounded-card border border-danger/30 bg-danger/5 px-4 py-3 text-note font-bold text-danger">
          {error}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        <Chip
          label="All"
          count={counts.all}
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        {(["overdue", "today", "upcoming", "past"] as Bucket[]).map((bucket) => (
          <Chip
            key={bucket}
            label={BUCKET_LABEL[bucket]}
            count={counts[bucket] ?? 0}
            active={filter === bucket}
            danger={bucket === "overdue"}
            onClick={() => setFilter(bucket)}
          />
        ))}
      </div>

      {trips === null ? (
        <div className="mt-6 space-y-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-20 animate-pulse rounded-card border border-border bg-surface"
              aria-hidden
            />
          ))}
        </div>
      ) : sections.length === 0 ? (
        <div className="mt-6 rounded-card border border-border bg-surface-raised p-10 text-center">
          <p className="text-card font-bold text-fg">Nothing here</p>
          <p className="mx-auto mt-2 max-w-sm text-note leading-relaxed text-fg-muted">
            {filter === "all"
              ? "Accept a request and it appears on your schedule."
              : "Try another filter."}
          </p>
          {filter === "all" ? (
            <Link
              href="/requests"
              className="mt-4 inline-flex h-10 items-center rounded-field bg-primary px-5 text-meta font-bold text-primary-fg"
            >
              Browse open requests
            </Link>
          ) : null}
        </div>
      ) : (
        <div className="mt-6 space-y-8">
          {sections.map(({ bucket, days, count }) => (
            <section key={bucket}>
              <div className="flex items-center gap-2">
                <h2
                  className={`text-small font-bold uppercase tracking-wider ${
                    bucket === "overdue" ? "text-danger" : "text-fg-body"
                  }`}
                >
                  {BUCKET_LABEL[bucket]}
                </h2>
                <span className="text-label text-fg-muted">{count}</span>
              </div>

              {bucket === "overdue" ? (
                <p className="mt-2 text-note leading-relaxed text-fg-muted">
                  These are past their pickup time and still open. Complete them if the
                  job is done, so the fare settles and you are paid.
                </p>
              ) : null}

              <div className="mt-3 space-y-5">
                {days.map(([day, dayTrips]) => (
                  <div key={day}>
                    <p className="text-note font-bold text-fg-body">{day}</p>
                    <ul className="mt-2 space-y-2">
                      {dayTrips.map((trip) => (
                        <TripRow
                          key={trip._id}
                          trip={trip}
                          overdue={bucket === "overdue"}
                          busy={busy === trip._id}
                          vehicleLabel={labelFor(trip.booking?.vehicleClass)}
                          onAct={(action) => act(trip, action)}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

/* --------------------------------- fragments ------------------------------- */

function TripRow({
  trip,
  overdue,
  busy,
  vehicleLabel,
  onAct,
}: {
  trip: Trip;
  overdue: boolean;
  busy: boolean;
  vehicleLabel: string;
  onAct: (action: "start" | "complete") => void;
}) {
  const booking = trip.booking;
  const when = whenOf(trip);

  return (
    <li
      className={`rounded-card border bg-surface-raised p-4 shadow-[var(--shadow-card)] ${
        overdue ? "border-danger/40" : "border-border"
      }`}
    >
      <div className="flex flex-wrap items-center gap-4">
        <div className="w-[74px] shrink-0">
          <p className="text-body font-bold leading-none text-fg">{timeOf(when)}</p>
          <p
            className={`mt-1 text-label font-bold capitalize ${
              trip.status === "completed"
                ? "text-success"
                : trip.status === "cancelled"
                  ? "text-fg-muted"
                  : trip.status === "started"
                    ? "text-accent"
                    : "text-fg-body"
            }`}
          >
            {trip.status}
          </p>
        </div>

        <div className="min-w-0 flex-1">
          <Link
            href={`/trips/${trip._id}`}
            className="font-mono text-meta font-bold text-fg hover:text-accent"
          >
            {reference(trip.bookingId)}
          </Link>
          <p className="mt-0.5 truncate text-note text-fg-body">
            {booking
              ? `${booking.pickup.address} → ${booking.drop.address}`
              : "Route not available"}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {booking ? (
              <Chiplet>{SERVICE_LABEL[booking.tripType] ?? booking.tripType}</Chiplet>
            ) : null}
            {vehicleLabel ? <Chiplet>{vehicleLabel}</Chiplet> : null}
            {booking?.flightDetails?.flightNumber ? (
              <Chiplet>✈ {booking.flightDetails.flightNumber}</Chiplet>
            ) : null}
            {trip.customer?.name ? <Chiplet>{trip.customer.name}</Chiplet> : null}
          </div>
        </div>

        {/* The action a chauffeur would otherwise open the trip page to reach. */}
        <div className="flex shrink-0 gap-2">
          {trip.status === "accepted" ? (
            <button
              type="button"
              disabled={busy}
              onClick={() => onAct("start")}
              className="h-10 rounded-field bg-accent px-5 text-meta font-bold text-primary-fg disabled:opacity-50"
            >
              {busy ? "Working…" : "Start"}
            </button>
          ) : null}
          {trip.status === "started" ? (
            <button
              type="button"
              disabled={busy}
              onClick={() => onAct("complete")}
              className="h-10 rounded-field bg-success px-5 text-meta font-bold text-white disabled:opacity-50"
            >
              {busy ? "Working…" : "Complete"}
            </button>
          ) : null}
          <Link
            href={`/trips/${trip._id}`}
            className="inline-flex h-10 items-center rounded-field border border-border bg-bg px-4 text-meta font-bold text-fg-body hover:text-fg"
          >
            Open
          </Link>
        </div>
      </div>
    </li>
  );
}

function Chip({
  label,
  count,
  active,
  danger,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  danger?: boolean;
  onClick: () => void;
}) {
  if (count === 0 && !active) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex h-9 items-center gap-2 rounded-full border px-3.5 text-meta font-bold transition-colors ${
        active
          ? "border-accent bg-accent-soft text-accent-strong"
          : danger && count > 0
            ? "border-danger/40 bg-danger/5 text-danger"
            : "border-border bg-surface-raised text-fg-body hover:border-accent/50 hover:text-fg"
      }`}
    >
      {label}
      <span className="rounded-full bg-surface px-1.5 text-label text-fg-muted">
        {count}
      </span>
    </button>
  );
}

function Chiplet({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-surface px-2.5 py-1 text-label font-bold text-fg-body">
      {children}
    </span>
  );
}
