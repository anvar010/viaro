import type { Metadata } from "next";
import { PageShell } from "@/components/app/shell";
import { BookingForm } from "@/components/app/booking-form";
import { getMyWallet, } from "@/lib/api/wallet";
import { listVehicleClasses } from "@/lib/api/bookings";
import { VEHICLE_CLASSES, type VehicleClassOption } from "@/lib/constants";

export const metadata: Metadata = { title: "Book a ride | Viaro" };

/**
 * The bookable classes come from the API, which operations manages in the admin console.
 *
 * Photography does not: there is no image field on the catalogue yet, so a class the API
 * returns is matched to the local photo set by key, and anything new falls back to the
 * drawn silhouette. That way adding a class in the console makes it bookable immediately
 * rather than waiting for artwork.
 */
async function loadVehicles(): Promise<VehicleClassOption[]> {
  try {
    const classes = await listVehicleClasses();
    if (classes.length === 0) return VEHICLE_CLASSES;

    return classes.map((api) => {
      const local = VEHICLE_CLASSES.find((v) => v.value === api.value);
      return {
        value: api.value,
        label: api.label,
        detail: api.detail ?? `Up to ${api.seats} passengers, ${api.bags} bags`,
        seats: api.seats,
        bags: api.bags,
        photos: local?.photos ?? [],
      };
    });
  } catch {
    // The catalogue is not worth failing the page over — book with what shipped.
    return VEHICLE_CLASSES;
  }
}

export default async function BookPage() {
  const [walletBalance, vehicles] = await Promise.all([
    getMyWallet(1, 1)
      .then((wallet) => wallet.balance)
      .catch(() => null),
    loadVehicles(),
  ]);

  return (
    <PageShell
      title="Book a ride"
      description="Point to point, airport or hourly. The total is quoted before you confirm."
    >
      <BookingForm walletBalance={walletBalance} vehicles={vehicles} />
    </PageShell>
  );
}
