import { z } from 'zod';
import { REPORT_TYPES } from './reports.service';

const dateString = z.string().min(4).max(40);

export const reportRangeSchema = z.object({
  from: dateString.optional(),
  to: dateString.optional(),
});

export type ReportRangeQuery = z.infer<typeof reportRangeSchema>;

export const exportQuerySchema = reportRangeSchema.extend({
  type: z.enum(REPORT_TYPES).default('trips-completed'),
  format: z.enum(['csv', 'pdf']).default('csv'),
});

export type ExportQuery = z.infer<typeof exportQuerySchema>;

export const jobParamSchema = z.object({
  jobId: z.string().min(1).max(64),
});

export type JobParam = z.infer<typeof jobParamSchema>;
