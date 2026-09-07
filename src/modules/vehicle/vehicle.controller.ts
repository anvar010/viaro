import type { Request, Response } from 'express';
import * as vehicleService from './vehicle.service';
import { body, query } from '../../utils/validate';
import type {
  CreateVehicleClassInput,
  ListVehicleQuery,
  UpdateVehicleClassInput,
} from './vehicle.validation';

export async function list(req: Request, res: Response): Promise<void> {
  const { includeInactive } = query<ListVehicleQuery>(req);
  // Only an admin may see retired classes; every other role gets the bookable ones.
  const showAll = Boolean(includeInactive) && req.user?.role === 'admin';
  res.json({ success: true, data: await vehicleService.list(showAll) });
}

export async function create(req: Request, res: Response): Promise<void> {
  const data = await vehicleService.create(body<CreateVehicleClassInput>(req));
  res.status(201).json({ success: true, data });
}

export async function update(req: Request, res: Response): Promise<void> {
  const data = await vehicleService.update(
    req.params.id as string,
    body<UpdateVehicleClassInput>(req),
  );
  res.json({ success: true, data });
}

export async function remove(req: Request, res: Response): Promise<void> {
  const data = await vehicleService.remove(req.params.id as string);
  res.json({ success: true, data });
}
