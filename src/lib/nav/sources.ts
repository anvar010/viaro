import { getDispatchPool, listMyTrips } from "@/lib/api/driver";

/**
 * What the chauffeur portal counts as "new", per nav entry.
 *
 * Only Requests and Schedule qualify. Documents and Application are things a chauffeur
 * submits rather than things that arrive, and Earnings is a place they go to look —
 * badging any of them would be decoration.
 */
export async function collectBadgeIds(): Promise<Record<string, string[]>> {
  const [pool, trips] = await Promise.allSettled([
    getDispatchPool(),
    // Accepted-but-not-started work is what "new on your schedule" means: a ride claimed
    // from the pool, assigned by dispatch, or given by a customer who named this
    // chauffeur as their favourite — the last two arrive with no action of their own.
    listMyTrips({ status: "accepted", limit: 50 }),
  ]);

  const result: Record<string, string[]> = {};

  if (pool.status === "fulfilled") {
    const items = Array.isArray(pool.value) ? pool.value : (pool.value.items ?? []);
    result["/requests"] = items.map((entry) => entry._id);
  }

  if (trips.status === "fulfilled") {
    result["/schedule"] = (trips.value.items ?? []).map((trip) => trip._id);
  }

  return result;
}
