import type { Request, Response } from 'express';
import * as chatService from './chat.service';
import { params } from '../../utils/validate';
import type { IdParam } from './chat.validation';

export async function history(req: Request, res: Response): Promise<void> {
  const data = await chatService.getHistory(params<IdParam>(req).id, req.user!);
  res.json({ success: true, data });
}
