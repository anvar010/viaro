"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, ErrorNote } from "@/components/app/shell";
import { updateBookingAction } from "@/lib/actions/trip";
import { CITIES, VEHICLE_CLASSES } from "@/lib/constants";
import type { FormState } from "@/lib/actions/auth";
import type { Booking } from "@/lib/api/types";

const selectClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * Splits the stored timestamp into the date and time inputs — in Pacific time.
 *
 * The form submits a zone-less wall-clock string that the API reads as
 * America/Los_Angeles, so the pre-filled values must be in that zone too. Local-time
 * getters reflect wherever the page happens to render; from anywhere east of UTC an
 * evening Pacific pickup pre-filled as the next calendar day, and saving made it real.
 */
const APP_TIMEZONE = "America/Los_Angeles";

function splitSchedule(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return { date: "", time: "" };

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: APP_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  return {
    date: `${part("year")}-${part("month")}-${part("day")}`,
    time: `${part("hour")}:${part("minute")}`,
  };
}

export function EditBookingForm({ booking }: { booking: Booking }) {
  const [state, action, pending] = useActionState<FormState | undefined, FormData>(
    updateBookingAction,
    undefined,
  );

  const when = splitSchedule(booking.scheduledAt);
  const defaultCity =
    CITIES.find((c) => c.name.toLowerCase() === (booking.city ?? "").toLowerCase())?.name ??
    "Seattle";

  return (
    <form action={action} className="space-y-5">
      {state?.error ? <ErrorNote>{state.error}</ErrorNote> : null}
      <input type="hidden" name="bookingId" value={booking._id} />

      <Field label="City" htmlFor="city" hint="Sets the fare rules that apply.">
        <select id="city" name="city" defaultValue={defaultCity} className={selectClass}>
          {CITIES.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Pickup" htmlFor="pickup" error={state?.fieldErrors?.pickup}>
          <Input
            id="pickup"
            name="pickup"
            defaultValue={booking.pickup.address}
            minLength={3}
          />
        </Field>
        <Field label="Drop-off" htmlFor="drop" error={state?.fieldErrors?.drop}>
          <Input id="drop" name="drop" defaultValue={booking.drop.address} minLength={3} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Date" htmlFor="date">
          <Input id="date" name="date" type="date" defaultValue={when.date} />
        </Field>
        <Field label="Time" htmlFor="time" hint="Pacific time.">
          <Input id="time" name="time" type="time" defaultValue={when.time} />
        </Field>
      </div>

      <Field label="Vehicle" htmlFor="vehicleClass">
        <select
          id="vehicleClass"
          name="vehicleClass"
          defaultValue={booking.vehicleClass}
          className={selectClass}
        >
          {VEHICLE_CLASSES.map((vehicle) => (
            <option key={vehicle.value} value={vehicle.value}>
              {vehicle.label} — {vehicle.detail}
            </option>
          ))}
        </select>
      </Field>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Saving…" : "Save changes"}
      </Button>
    </form>
  );
}
