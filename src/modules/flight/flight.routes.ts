import { Router } from 'express';
import * as controller from './flight.controller';
import { flightParamSchema } from './flight.validation';
import { validate } from '../../utils/validate';
import { asyncHandler } from '../../utils/asyncHandler';
import { authGuard } from '../../middlewares/authGuard';
import { roleGuard } from '../../middlewares/roleGuard';

/** Mounted at /flight */
const router = Router();

router.get(
  '/:flightNumber',
  authGuard,
  roleGuard('driver', 'admin'),
  validate({ params: flightParamSchema }),
  asyncHandler(controller.getFlight),
);

export default router;
