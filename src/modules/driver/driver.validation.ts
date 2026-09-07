import { z } from 'zod';

/**
 * A driver may only put themselves 'available' or 'offline'.
 * 'busy' is set by the system when a trip is accepted — letting a driver claim it by
 * hand would let them hide from dispatch while still holding a trip.
 */
export const setStatusSchema = z.object({
  status: z.enum(['available', 'offline']),
  /** Sent when going online so dispatch can place them immediately. */
  lat: z.coerce.number().min(-90).max(90).optional(),
  lng: z.coerce.number().min(-180).max(180).optional(),
});

export type SetStatusInput = z.infer<typeof setStatusSchema>;

export const applySchema = z.object({
  vehicleClass: z.string().min(1).max(60),
  documents: z.array(z.string().url()).max(10).optional(),
});

export type ApplyInput = z.infer<typeof applySchema>;
