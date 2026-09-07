import fs from 'node:fs';
import type { Request, Response } from 'express';
import * as reportsService from './reports.service';
import { params, query } from '../../utils/validate';
import { ApiError } from '../../utils/ApiError';
import { getExportStatus, scheduleReportExport } from '../../jobs/reportExport.job';
import type { ExportQuery, JobParam, ReportRangeQuery } from './reports.validation';

export async function tripsCompleted(req: Request, res: Response): Promise<void> {
  const data = await reportsService.tripsCompleted(req.user!, query<ReportRangeQuery>(req));
  res.json({ success: true, data });
}

export async function earningsPayout(req: Request, res: Response): Promise<void> {
  const data = await reportsService.earningsPayout(req.user!, query<ReportRangeQuery>(req));
  res.json({ success: true, data });
}

export async function cancellationsPenalties(req: Request, res: Response): Promise<void> {
  const data = await reportsService.cancellationsPenalties(req.user!, query<ReportRangeQuery>(req));
  res.json({ success: true, data });
}

/**
 * GET /reports?type=&from=&to=&format=csv|pdf
 * Returns a job reference immediately; generation happens on the BullMQ worker.
 */
export async function exportReport(req: Request, res: Response): Promise<void> {
  const q = query<ExportQuery>(req);

  const jobId = await scheduleReportExport({
    type: q.type,
    format: q.format,
    range: { from: q.from, to: q.to },
    // The worker re-applies the same role scoping — a driver's export is still driver-scoped.
    user: req.user!,
  });

  res.status(202).json({
    success: true,
    data: {
      jobId,
      status: `/reports/exports/${jobId}`,
      download: `/reports/exports/${jobId}/download`,
    },
  });
}

export async function exportStatus(req: Request, res: Response): Promise<void> {
  const status = await getExportStatus(params<JobParam>(req).jobId);
  if (!status) throw ApiError.notFound('Export job not found');
  res.json({ success: true, data: status });
}

export async function downloadExport(req: Request, res: Response): Promise<void> {
  const status = await getExportStatus(params<JobParam>(req).jobId);
  if (!status) throw ApiError.notFound('Export job not found');

  if (status.state !== 'completed' || !status.file) {
    throw ApiError.conflict(`Export is '${status.state}' — not ready for download yet`);
  }

  if (!fs.existsSync(status.file)) throw ApiError.notFound('Export file has been cleaned up');

  res.download(status.file);
}
