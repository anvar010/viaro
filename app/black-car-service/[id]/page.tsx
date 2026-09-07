import { notFound } from "next/navigation";
import { serviceEn } from "@/data/service";
import ServicePage from "@/components/black-car-service/page";

/** Same reasoning as service-area/[id]: an unknown slug is a 404, not a 200 with a message. */
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!serviceEn.some((service) => service.id === id)) notFound();

  return <ServicePage />;
}
