import { Router } from 'express';
import * as controller from './vehicle.controller';
import {
  createVehicleClassSchema,
  idParamSchema,
  listVehicleQuerySchema,
  updateVehicleClassSchema,
} from './vehicle.validation';
import { validate } from '../../utils/validate';
import { asyncHandler } from '../../utils/asyncHandler';
import { authGuard } from '../../middlewares/authGuard';
import { roleGuard } from '../../middlewares/roleGuard';

/**
 * Mounted at /vehicle-classes — the catalogue the booking form renders.
 *
 * Readable by any signed-in role rather than customers only: the chauffeur portal and
 * both consoles all need to turn a stored `vehicleClass` key into a label.
 */
export const vehicleRouter = Router();

vehicleRouter.get(
  '/',
  authGuard,
  validate({ query: listVehicleQuerySchema }),
  asyncHandler(controller.list),
);

/** Mounted at /admin/vehicle-classes — managing the catalogue belongs to operations. */
export const adminVehicleRouter = Router();

adminVehicleRouter.use(authGuard, roleGuard('admin'));

adminVehicleRouter.post(
  '/',
  validate({ body: createVehicleClassSchema }),
  asyncHandler(controller.create),
);

adminVehicleRouter.patch(
  '/:id',
  validate({ params: idParamSchema, body: updateVehicleClassSchema }),
  asyncHandler(controller.update),
);

adminVehicleRouter.delete(
  '/:id',
  validate({ params: idParamSchema }),
  asyncHandler(controller.remove),
);
