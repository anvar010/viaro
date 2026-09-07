import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, SectionTitle } from "@/components/app/shell";
import { EditBookingForm } from "@/components/app/edit-booking-form";
import { ContactToCancel } from "@/components/app/contact-to-cancel";
import { getBooking } from "@/lib/api/bookings";
import { ApiError } from "@/lib/api/client";
import type { Booking } from "@/lib/api/types";

export const metadata: Metadata = { title: "Change booking | Viaro" };

/** Changes close this many hours before pickup — mirrors CHANGE_CUTOFF_HOURS server-side. */
const CHANGE_CUTOFF_HOURS = 3;

/**
 * `PATCH /bookings/:id` accepts pickup, drop, vehicleClass and scheduledAt.
 *
 * The gate is TIME, not dispatch state. It used to redirect anything not 'pending',
 * which made this page unreachable in practice — dispatch runs the instant a booking is
 * created, so a booking is 'dispatched' within a second. The API now allows changes
 * until three hours before pickup regardless of dispatch state, and this mirrors that.
 *
 * A booking already inside the window still renders, with the form disabled and the
 * phone number shown — a passenger who is too late needs a way through, not a redirect
 * to a page that does not explain why they were sent there.
 */
export default async function EditBookingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let booking: Booking;
  try {
    booking = await getBooking(id);
  } catch (err) {
    if (err instanceof ApiError && (err.isNotFound || err.isForbidden)) notFound();
    throw err;
  }

  if (booking.status === "cancelled") redirect(`/trips/${id}`);

  const hoursUntilPickup =
    (new Date(booking.scheduledAt).getTime() - Date.now()) / 3_600_000;
  const locked = hoursUntilPickup < CHANGE_CUTOFF_HOURS;

  return (
    <PageShell
      title="Change your booking"
      description="Route, time and vehicle can all move until a chauffeur is assigned."
      action={
        <Button asChild variant="outline">
          <Link href={`/trips/${id}`}>Back to trip</Link>
        </Button>
      }
    >
      <div className="max-w-2xl space-y-6">
        {locked ? (
          <Panel>
            <SectionTitle>Too close to pickup</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Changes close {CHANGE_CUTOFF_HOURS} hours before pickup, and this journey
              is{" "}
              {hoursUntilPickup <= 0
                ? "already due"
                : `${Math.max(1, Math.round(hoursUntilPickup * 10) / 10)} hours away`}
              . Our team can still move it for you.
            </p>
            <div className="mt-5">
              <ContactToCancel reason="change" />
            </div>
          </Panel>
        ) : (
          <>
            <Panel>
              <SectionTitle>Details</SectionTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                You can change these until {CHANGE_CUTOFF_HOURS} hours before pickup. Your
                chauffeur and our team see every change.
              </p>
              <div className="mt-6">
                <EditBookingForm booking={booking} />
              </div>
            </Panel>

            <Panel>
              <SectionTitle>Need to cancel?</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Cancellations are handled by our team so we can confirm the refund with
                you before anything is charged.
              </p>
              <div className="mt-4">
                <ContactToCancel reason="cancel" />
              </div>
            </Panel>
          </>
        )}
      </div>
    </PageShell>
  );
}
