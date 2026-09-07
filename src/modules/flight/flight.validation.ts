import { z } from 'zod';

/** IATA/ICAO style flight designators, e.g. AA100, BA2490. */
export const flightParamSchema = z.object({
  flightNumber: z
    .string()
    .min(2)
    .max(10)
    .regex(/^[A-Za-z0-9]+$/, 'Flight number must be alphanumeric')
    .toUpperCase(),
});

export type FlightParam = z.infer<typeof flightParamSchema>;
