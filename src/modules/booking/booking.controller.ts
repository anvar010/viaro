import type { Request, Response } from 'express';
import * as bookingService from './booking.service';
import { body, params, query } from '../../utils/validate';
import type { PaginationQuery } from '../../utils/pagination';
import type {
  CancelBookingQuery,
  CreateBookingInput,
  FavoriteDriverInput,
  IdParam,
  UpdateBookingInput,
} from './booking.validation';

export async function create(req: Request, res: Response): Promise<void> {
  const data = await bookingService.createBooking(req.user!.userId, body<CreateBookingInput>(req));
  res.status(201).json({ success: true, data });
}

export async function getById(req: Request, res: Response): Promise<void> {
  const data = await bookingService.getBookingForUser(params<IdParam>(req).id, req.user!);
  res.json({ success: true, data });
}

export async function update(req: Request, res: Response): Promise<void> {
  const data = await bookingService.updateBooking(
    params<IdParam>(req).id,
    req.user!.userId,
    body<UpdateBookingInput>(req),
  );
  res.json({ success: true, data });
}

export async function cancel(req: Request, res: Response): Promise<void> {
  const data = await bookingService.cancelBookingByCustomer(
    params<IdParam>(req).id,
    req.user!.userId,
    query<CancelBookingQuery>(req)?.reason,
  );
  res.json({ success: true, data });
}

export async function favoriteDriver(req: Request, res: Response): Promise<void> {
  const data = await bookingService.requestFavoriteDriver(
    params<IdParam>(req).id,
    req.user!.userId,
    body<FavoriteDriverInput>(req).driverId,
  );
  res.json({ success: true, data });
}

export async function myRides(req: Request, res: Response): Promise<void> {
  const data = await bookingService.listMyRides(req.user!.userId, query<PaginationQuery>(req));
  res.json({ success: true, data });
}

export async function receipt(req: Request, res: Response): Promise<void> {
  const data = await bookingService.getReceipt(params<IdParam>(req).id, req.user!.userId);
  res.json({ success: true, data });
}
