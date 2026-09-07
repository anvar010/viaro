import { z } from 'zod';

export const updateProfileSchema = z
  .object({
    name: z.string().min(2).max(120).optional(),
    phone: z.string().min(6).max(30).optional(),
    vehicleClass: z.string().min(1).max(60).optional(), // drivers only
  })
  .refine((data) => Object.keys(data).length > 0, { message: 'No updatable fields supplied' });

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;

/**
 * Documents arrive as upload metadata, not multipart bodies — real S3 wiring is a
 * PLACEHOLDER (utils/s3.ts), so the client sends what it intends to upload.
 */
export const uploadDocumentSchema = z.object({
  fileName: z.string().min(1).max(200),
  mimeType: z.string().min(3).max(100),
  sizeBytes: z.coerce.number().int().positive().max(20 * 1024 * 1024).optional(),
});

export type UploadDocumentInput = z.infer<typeof uploadDocumentSchema>;

export const objectIdParamSchema = z.object({
  driverId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid driver id'),
});

export type ObjectIdParam = z.infer<typeof objectIdParamSchema>;
