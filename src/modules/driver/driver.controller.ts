import type { Request, Response } from 'express';
import * as driverService from './driver.service';
import { body } from '../../utils/validate';
import type { ApplyInput, SetStatusInput } from './driver.validation';

export async function setStatus(req: Request, res: Response): Promise<void> {
  const data = await driverService.setOwnStatus(req.user!.userId, body<SetStatusInput>(req));
  res.json({ success: true, data });
}

export async function me(req: Request, res: Response): Promise<void> {
  const data = await driverService.getOwnProfile(req.user!.userId);
  res.json({ success: true, data });
}

export async function apply(req: Request, res: Response): Promise<void> {
  const data = await driverService.apply(req.user!.userId, body<ApplyInput>(req));
  res.status(201).json({ success: true, data });
}
