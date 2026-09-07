import { apiOptional } from "@/lib/api/client";
import { getCurrentUser } from "@/lib/auth/current-user";
import { RatingPrompt } from "@/components/app/rating-prompt";
import type { Paginated, Trip } from "@/lib/api/types";

/**
 * Decides whether there is anything to ask about, on the server.
 *
 * Doing the fetch here rather than in the prompt keeps the token server-side and means a
 * signed-out visitor ships no rating code at all — the component below renders nothing
 * and the client bundle never sees the trip list.
 *
 * `rated` is the API's own flag, so a trip scored on another device is already excluded
 * rather than prompted for again.
 */
export async function RatingGate() {
  const user = await getCurrentUser();
  if (!user || user.role !== "customer") return null;

  const trips = await apiOptional<Paginated<Trip>>("/trips?status=completed&limit=20");
  const unrated = (trips?.items ?? []).filter((trip) => !trip.rated);
  if (unrated.length === 0) return null;

  return <RatingPrompt trips={unrated} />;
}
