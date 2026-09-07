"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, Panel, money, formatDateTime } from "@/components/app/shell";
import type { Booking, BookingStatus } from "@/lib/api/types";

/**
 * The passenger's own journeys, filtered.
 *
 * ⚠ A BOOKING NEVER READS "COMPLETED". Its statuses stop at pending, dispatched,
 * assigned and cancelled — completion lives on the Trip, and this endpoint
 * (`/users/me/rides`) returns bookings only. So "finished" cannot be derived from the
 * status alone and is inferred from time: assigned, and the pickup has passed.
 *
 * That inference is stated in the UI rather than hidden, because a journey the chauffeur
 * cancelled would look the same from here.
 */
type Ride = Booking & { scheduledAtLocal?: string };

type Filter = "all" | "ongoing" | "upcoming" | "finished" | "cancelled";

const FILTER_LABEL: Record<Filter, string> = {
  all: "All",
  ongoing: "Ongoing",
  upcoming: "Upcoming",
  finished: "Finished",
  cancelled: "Cancelled",
};

const STATUS_LABEL: Record<BookingStatus, string> = {
  pending: "Finding a chauffeur",
  dispatched: "Offered to chauffeurs",
  assigned: "Chauffeur assigned",
  cancelled: "Cancelled",
};

const reference = (id: string) => `VRO-${id.slice(-6).toUpperCase()}`;

function bucketOf(ride: Ride): Exclude<Filter, "all"> {
  if (ride.status === "cancelled") return "cancelled";

  const when = new Date(ride.scheduledAt).getTime();
  const now = Date.now();

  // Assigned and the pickup time has arrived: someone is driving it, or just did.
  if (ride.status === "assigned") {
    return when <= now ? "finished" : "ongoing";
  }
  return "upcoming";
}

export function TripFilters({ rides }: { rides: Ride[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const tally: Record<string, number> = { all: rides.length };
    for (const ride of rides) {
      const bucket = bucketOf(ride);
      tally[bucket] = (tally[bucket] ?? 0) + 1;
    }
    return tally;
  }, [rides]);

  const visible = useMemo(
    () =>
      (filter === "all" ? rides : rides.filter((r) => bucketOf(r) === filter)).slice(),
    [rides, filter],
  );

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {(Object.keys(FILTER_LABEL) as Filter[]).map((key) => {
          const count = counts[key] ?? 0;
          if (count === 0 && key !== "all" && filter !== key) return null;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
                filter === key
                  ? "border-brand bg-brand/10 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {FILTER_LABEL[key]}
              <span className="text-xs text-muted-foreground">{count}</span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <EmptyState
          title={filter === "all" ? "No trips yet" : "Nothing here"}
          description={
            filter === "all"
              ? "Your first booking will show up here with its receipt."
              : "Try another filter."
          }
          action={
            filter === "all" ? (
              <Button asChild>
                <Link href="/book">Book your first ride</Link>
              </Button>
            ) : null
          }
        />
      ) : (
        <>
          {/* Cards on a phone, table from md up. */}
          <ul className="space-y-3 md:hidden">
            {visible.map((ride) => (
              <li key={ride._id}>
                <Link
                  href={`/trips/${ride._id}`}
                  className="block rounded-xl border border-border bg-card/60 p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">
                      {reference(ride._id)}
                    </span>
                    <Badge variant="secondary" className="ml-auto">
                      {STATUS_LABEL[ride.status]}
                    </Badge>
                  </div>
                  <p className="mt-2 truncate text-sm text-muted-foreground">
                    {ride.pickup.address} → {ride.drop.address}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>{ride.scheduledAtLocal ?? formatDateTime(ride.scheduledAt)}</span>
                    <span className="font-medium text-foreground">
                      {money(ride.estimatedFare)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Panel className="hidden overflow-x-auto p-0 md:block">
            <table className="w-full min-w-[52rem] text-left text-sm">
              <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">Reference</th>
                  <th className="px-6 py-3 font-medium">Route</th>
                  <th className="px-6 py-3 font-medium">Pickup</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 text-right font-medium">Fare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {visible.map((ride) => (
                  <tr key={ride._id} className="transition-colors hover:bg-white/[0.02]">
                    <td className="px-6 py-4">
                      <Link
                        href={`/trips/${ride._id}`}
                        className="font-medium text-foreground hover:text-brand"
                      >
                        {reference(ride._id)}
                      </Link>
                    </td>
                    <td className="max-w-[22rem] px-6 py-4">
                      <span className="block truncate text-muted-foreground">
                        {ride.pickup.address} → {ride.drop.address}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-muted-foreground">
                      {ride.scheduledAtLocal ?? formatDateTime(ride.scheduledAt)}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">{STATUS_LABEL[ride.status]}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-foreground">
                      {money(ride.estimatedFare)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          {filter === "finished" ? (
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              A booking has no &ldquo;completed&rdquo; state of its own, so these are ones
              with a chauffeur assigned whose pickup time has passed. Open a trip to see
              what actually happened.
            </p>
          ) : null}
        </>
      )}
    </>
  );
}
