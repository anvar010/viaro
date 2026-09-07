import {
  fetchAllPages,
  getCancellations,
  getTripsCompleted,
  listDrivers,
} from "@/lib/api/admin";

/**
 * What the fleet console counts as "new", per nav entry.
 *
 * ⚠ EVERYTHING HERE IS FILTERED TO THE COMPANY'S OWN ROSTER, and it has to be.
 * reports.service.buildScope() returns an unrestricted scope for 'company' as well as
 * 'admin' (spec §8 rule 7), so the report endpoints hand this console every operator's
 * rows. Badging them unfiltered would count other companies' work as this one's — wrong,
 * and a disclosure of their volumes. The roster read is the first call for that reason.
 *
 * Only Trips and Penalties are badged. Drivers are people this company adds itself,
 * Revenue and Reports are things it goes to look at; none of them "arrive".
 */
export async function collectBadgeIds(): Promise<Record<string, string[]>> {
  const roster = await fetchAllPages((page, limit) => listDrivers(page, limit)).catch(
    () => null,
  );
  // Without the roster there is no safe way to narrow the reports, so badge nothing
  // rather than badge someone else's rows.
  if (!roster) return {};

  const rosterIds = new Set(roster.items.map((driver) => driver._id));

  const [trips, cancellations] = await Promise.allSettled([
    getTripsCompleted(),
    getCancellations(),
  ]);

  const result: Record<string, string[]> = {};

  if (trips.status === "fulfilled") {
    result["/trips"] = trips.value.rows
      .filter((row) => rosterIds.has(row.driverId))
      .map((row) => row.tripId);
  }

  if (cancellations.status === "fulfilled") {
    // A PenaltyEvent has no id of its own in this payload, so booking + driver is the
    // stable pair — the backend enforces it as unique per (bookingId, driverId).
    result["/penalties"] = cancellations.value.penalties
      .filter((event) => rosterIds.has(event.driverId))
      .map((event) => `${event.driverId}:${event.bookingId}`);
  }

  return result;
}
