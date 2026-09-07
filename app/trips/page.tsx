import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/app/shell";
import { AccountNav } from "@/components/app/account-nav";
import { TripFilters } from "@/components/app/trip-filters";
import { listMyRides } from "@/lib/api/bookings";
import { LiveRefresh } from "@/components/app/live-refresh";

export const metadata: Metadata = { title: "My trips | Viaro" };

/**
 * `/users/me/rides` lists BOOKINGS, newest first — not trips. That is the right record
 * for a passenger's own history: it covers journeys no chauffeur has taken yet, which a
 * trip-based list would omit entirely.
 *
 * Fetched here on the server with the httpOnly token; the filtering is client-side in
 * TripFilters because the endpoint takes no status query.
 */
export default async function TripsPage() {
  const rides = await listMyRides(1, 50);

  return (
    <PageShell
      title="My trips"
      description="Every journey you have booked."
      action={
        <Button asChild>
          <Link href="/book">Book a ride</Link>
        </Button>
      }
    >
      <AccountNav />
      <TripFilters rides={rides.items} />
          {/* A chauffeur accepting, or a status change, updates this list in place. */}
      <LiveRefresh topics={["booking", "trip", "dispatch"]} />
</PageShell>
  );
}
