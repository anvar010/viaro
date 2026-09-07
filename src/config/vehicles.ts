/**
 * The vehicle catalogue, and what each class does to the fare.
 *
 * Until now `vehicleClass` was carried on a booking but never priced: calculateFare()
 * worked from city, trip type, peak window and subscription alone, so a Sprinter and a
 * saloon cost exactly the same. This table is what makes the class matter.
 *
 * ⚠ THE MULTIPLIERS ARE PLACEHOLDERS. They are ratios against the city base fare, chosen
 * to be plausible for a black-car fleet, not supplied by the business. `sedan` is pinned
 * at 1.0 deliberately — it keeps every existing quote, seeded booking and test at the
 * number it already had, so introducing this table changed no historical price.
 *
 * Set the real values here. It is the only place a class multiplier is defined, and both
 * the estimate endpoint and booking creation read it, so a customer cannot be quoted one
 * number and charged another.
 */
export interface VehicleClass {
  /** Stored on the booking. Never change an existing key — bookings reference it. */
  value: string;
  label: string;
  /** Passengers the car seats, used by the client to hide classes that cannot fit. */
  seats: number;
  bags: number;
  /** Fare = cityBaseFare × peakMultiplier × hours × THIS. */
  multiplier: number;
}

export const VEHICLE_CLASSES: VehicleClass[] = [
  { value: 'sedan', label: 'Business Sedan', seats: 3, bags: 2, multiplier: 1 },
  { value: 'sedan-first', label: 'First Class Sedan', seats: 3, bags: 2, multiplier: 1.45 },
  { value: 'suv', label: 'Business SUV', seats: 5, bags: 5, multiplier: 1.4 },
  { value: 'suv-luxury', label: 'Luxury SUV', seats: 6, bags: 6, multiplier: 1.75 },
  { value: 'minibus', label: 'Sprinter Van', seats: 13, bags: 13, multiplier: 2.2 },
  { value: 'limo', label: 'Stretch Limousine', seats: 8, bags: 4, multiplier: 2.6 },
];

const BY_VALUE = new Map(VEHICLE_CLASSES.map((v) => [v.value, v]));

export const findVehicleClass = (value?: string | null): VehicleClass | undefined =>
  value ? BY_VALUE.get(value) : undefined;

/**
 * An unknown class bills at the base rate rather than throwing.
 *
 * `vehicleClass` is a free string on the booking schema and always has been, so rows
 * predating this table — and anything a client invents — must still price. Charging the
 * base fare is the only safe default: it can never overcharge.
 */
export const vehicleMultiplier = (value?: string | null): number =>
  findVehicleClass(value)?.multiplier ?? 1;
