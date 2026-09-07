import type { Request, Response } from 'express';
import * as flightService from './flight.service';
import { params } from '../../utils/validate';

export async function getFlight(req: Request, res: Response): Promise<void> {
  const data = await flightService.getFlight(params<{ flightNumber: string }>(req).flightNumber);
  res.json({ success: true, data });
}
