import { Router } from 'express';
import * as controller from './admin.controller';
import {
  createDriverSchema,
  idParamSchema,
  listQuerySchema,
  updateDriverSchema,
} from './admin.validation';
import { validate } from '../../utils/validate';
import { asyncHandler } from '../../utils/asyncHandler';
import { authGuard } from '../../middlewares/authGuard';
import { roleGuard } from '../../middlewares/roleGuard';

/** Mounted at /admin */
const router = Router();
router.use(authGuard);

/* -------------------------------- drivers --------------------------------- */

// Registered before '/drivers/:id' so the literal path is never captured as an id.
router.get(
  '/drivers/penalties',
  roleGuard('admin', 'company'),
  asyncHandler(controller.driverPenalties),
);

router.post(
  '/drivers',
  roleGuard('company'),
  validate({ body: createDriverSchema }),
  asyncHandler(controller.createDriver),
);

router.get(
  '/drivers',
  roleGuard('company', 'admin'),
  validate({ query: listQuerySchema }),
  asyncHandler(controller.listDrivers),
);

// Company edits its own roster; admin edits platform drivers and sets their per-trip
// charge. Ownership is enforced in the service.
router.patch(
  '/drivers/:id',
  roleGuard('company', 'admin'),
  validate({ params: idParamSchema, body: updateDriverSchema }),
  asyncHandler(controller.updateDriver),
);

/* ------------------------------- dashboards ------------------------------- */

router.get(
  '/dashboard/bookings',
  roleGuard('admin'),
  validate({ query: listQuerySchema }),
  asyncHandler(controller.dashboardBookings),
);

router.get(
  '/dashboard/users',
  roleGuard('admin'),
  validate({ query: listQuerySchema }),
  asyncHandler(controller.dashboardUsers),
);

router.get(
  '/revenue/subscriptions',
  roleGuard('admin', 'company'),
  asyncHandler(controller.subscriptionRevenue),
);

export default router;
