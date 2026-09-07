import { Router } from 'express';
import * as controller from './driver.controller';
import { applySchema, setStatusSchema } from './driver.validation';
import { validate } from '../../utils/validate';
import { asyncHandler } from '../../utils/asyncHandler';
import { authGuard } from '../../middlewares/authGuard';
import { roleGuard } from '../../middlewares/roleGuard';

/**
 * Mounted at /drivers — the driver's own account.
 * Company/admin management of OTHER drivers lives under /admin/drivers.
 */
const router = Router();

router.get('/me', authGuard, roleGuard('driver'), asyncHandler(controller.me));

router.patch(
  '/me/status',
  authGuard,
  roleGuard('driver'),
  validate({ body: setStatusSchema }),
  asyncHandler(controller.setStatus),
);

router.post(
  '/apply',
  authGuard,
  roleGuard('driver'),
  validate({ body: applySchema }),
  asyncHandler(controller.apply),
);

export default router;
