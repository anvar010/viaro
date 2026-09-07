import { z } from 'zod';
import { TRIP_TYPES } from '../../models/Booking';
import { paginationSchema } from '../../utils/pagination';

const geoPointSchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
  address: z.string().min(3).max(300),
});

export const createBookingSchema = z
  .object({
    pickup: geoPointSchema,
    drop: geoPointSchema,
    vehicleClass: z.string().min(1).max(60),
    /** Party size. Optional so existing clients keep working. */
    passengers: z.coerce.number().int().min(1).max(60).optional(),
    tripType: z.enum(TRIP_TYPES),
    city: z.string().min(2).max(80),
    /**
     * Wallet credit to put towards this ride. Nothing is debited now — see
     * IBooking.walletCreditRequested. Zero clears a previous choice.
     */
    walletCreditRequested: z.coerce.number().min(0).max(1_000_000).optional(),

    /** ISO string; offset-less values are read as America/Los_Angeles wall time. */
    scheduledAt: z.string().min(4).optional(),
    hours: z.coerce.number().min(1).max(24).optional(),
    flightDetails: z
      .object({
        flightNumber: z.string().min(2).max(10),
        scheduledArrival: z.string().min(4).optional(),
      })
      .optional(),
    favoriteDriverId: z.string().regex(/^[a-fA-F0-9]{24}$/).optional(),
  })
  .superRefine((data, ctx) => {
    // Spec §4.3: airport bookings must carry the flight the ride is meeting.
    if (data.tripType === 'airport' && !data.flightDetails) {
      ctx.addIssue({
        code: 'custom',
        path: ['flightDetails'],
        message: 'flightDetails is required for airport trips',
      });
    }
  });

export type CreateBookingInput = z.infer<typeof createBookingSchema>;

export const updateBookingSchema = z
  .object({
    pickup: geoPointSchema.optional(),
    drop: geoPointSchema.optional(),
    vehicleClass: z.string().min(1).max(60).optional(),
    scheduledAt: z.string().min(4).optional(),
    /** Change or clear (0) the credit the passenger wants put towards this ride. */
    walletCreditRequested: z.coerce.number().min(0).max(1_000_000).optional(),
  })
  .refine((d) => Object.keys(d).length > 0, { message: 'No updatable fields supplied' });

export type UpdateBookingInput = z.infer<typeof updateBookingSchema>;

export const favoriteDriverSchema = z.object({
  driverId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid driver id'),
});

export type FavoriteDriverInput = z.infer<typeof favoriteDriverSchema>;

/**
 * Why a booking is being cancelled, on the query string rather than in a body.
 *
 * DELETE bodies are legal but not dependably forwarded — proxies and some fetch
 * implementations drop them — and losing a cancellation reason silently is worse than
 * a slightly less tidy URL. Optional throughout: nobody has to explain themselves.
 */
export const cancelBookingQuerySchema = z.object({
  reason: z.string().trim().min(1).max(300).optional(),
});

export type CancelBookingQuery = z.infer<typeof cancelBookingQuerySchema>;

export const idParamSchema = z.object({
  id: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid id'),
});

export type IdParam = z.infer<typeof idParamSchema>;

export const ridesQuerySchema = paginationSchema;
