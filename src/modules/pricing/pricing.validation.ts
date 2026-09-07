import { z } from 'zod';
import { TRIP_TYPES } from '../../models/Booking';

export const createSubscriptionSchema = z.object({
  plan: z.string().min(2).max(60),
  price: z.coerce.number().min(0),
});

export type CreateSubscriptionInput = z.infer<typeof createSubscriptionSchema>;

export const fareEstimateQuerySchema = z.object({
  city: z.string().min(2).max(80),
  tripType: z.enum(TRIP_TYPES),
  /** ISO string. Offset-less values are read as America/Los_Angeles wall time. */
  requestedAt: z.string().min(4).optional(),
  hours: z.coerce.number().min(1).max(24).optional(), // hourly trips only
  /** Optional: priced at the base rate when absent, so old clients keep working. */
  vehicleClass: z.string().min(1).max(60).optional(),
});

export type FareEstimateQuery = z.infer<typeof fareEstimateQuerySchema>;

export const createPricingRuleSchema = z.object({
  city: z.string().min(2).max(80),
  baseFare: z.coerce.number().min(0),
  peakMultiplier: z.coerce.number().min(1).max(10),
});

export type CreatePricingRuleInput = z.infer<typeof createPricingRuleSchema>;

export const updatePricingRuleSchema = z
  .object({
    city: z.string().min(2).max(80).optional(),
    baseFare: z.coerce.number().min(0).optional(),
    peakMultiplier: z.coerce.number().min(1).max(10).optional(),
  })
  .refine((d) => Object.keys(d).length > 0, { message: 'No updatable fields supplied' });

export type UpdatePricingRuleInput = z.infer<typeof updatePricingRuleSchema>;

export const idParamSchema = z.object({
  id: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid id'),
});

export type IdParam = z.infer<typeof idParamSchema>;
