import { notFound } from "next/navigation";
import { locationEn } from "@/data/locations";
import LocationsContent from "@/components/service-area/page";

/**
 * The slug is checked here rather than inside the client component.
 *
 * It used to render "Location not found: <slug>" inline with a 200, which meant any
 * made-up URL was a real, indexable page echoing whatever was in the path. Checking on
 * the server lets `notFound()` return an actual 404 and the site's own 404 page.
 */
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!locationEn.some((location) => location.id === id)) notFound();

  return <LocationsContent />;
}
