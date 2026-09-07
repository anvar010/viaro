import { ApiError } from '../../utils/ApiError';
import { logger } from '../../utils/logger';
import * as dispatchService from '../dispatch/dispatch.service';
import * as repo from './driver.repository';
import type { ApplyInput, SetStatusInput } from './driver.validation';

/**
 * Driver module — business rules only.
 *
 * No Mongoose in this file: every read and write goes through driver.repository.
 * That keeps the rules below readable as rules, and makes them testable with a fake
 * repository instead of a live database.
 */
async function requireOwnDriver(userId: string) {
  const driver = await repo.findByUserId(userId);
  if (!driver) throw ApiError.notFound('Driver profile not found');
  return driver;
}

/**
 * The Online/Offline toggle on the driver Dashboard (desktop 14) and Drive screen
 * (driver 07).
 *
 * Going online is what puts a driver into the Redis GEO set dispatch searches, so this
 * is the switch that makes them reachable at all.
 */
export async function setOwnStatus(userId: string, input: SetStatusInput) {
  const driver = await requireOwnDriver(userId);

  // A driver mid-trip must not vanish from the customer's view.
  if (driver.status === 'busy') {
    throw ApiError.conflict('Finish or cancel your current trip before changing status');
  }

  const account = await repo.findUserStatus(userId);
  if (input.status === 'available' && account?.status === 'pending_documents') {
    throw ApiError.forbidden('Upload your documents before going online');
  }

  const updated = await repo.updateStatus(driver._id, input.status);

  if (input.status === 'available' && input.lat !== undefined && input.lng !== undefined) {
    await dispatchService.upsertDriverLocation(String(driver._id), input.lat, input.lng);
  } else if (input.status === 'offline') {
    await dispatchService.removeDriverLocation(String(driver._id));
  }

  logger.info(`Driver ${String(driver._id)} is now ${input.status}`);
  return updated;
}

export async function getOwnProfile(userId: string) {
  const driver = await requireOwnDriver(userId);

  const [activeTrips, completedTrips] = await Promise.all([
    repo.countTripsByStatus(driver._id, ['accepted', 'started']),
    repo.countTripsByStatus(driver._id, ['completed']),
  ]);

  return { driver, stats: { activeTrips, completedTrips } };
}

/**
 * Driver application (driver screens 02 Apply / 04 Verification pending).
 *
 * Registering as a driver already creates the profile; this lets an existing account
 * apply, or an applicant resubmit after a rejection, and holds the account until
 * documents are on file.
 */
export async function apply(userId: string, input: ApplyInput) {
  const account = await repo.findUserStatus(userId);
  if (!account) throw ApiError.notFound('User not found');
  if (account.role !== 'driver') {
    throw ApiError.forbidden('Only driver accounts can submit an application');
  }

  const existing = await repo.findByUserId(userId);
  const driverId = existing
    ? existing._id
    : (await repo.create({ userId, vehicleClass: input.vehicleClass }))._id;

  const driver = await repo.updateApplication(driverId, {
    vehicleClass: input.vehicleClass,
    documents: input.documents,
  });

  // Documents are reviewed before the driver can take work.
  const accountStatus = (driver?.documents.length ?? 0) > 0 ? 'active' : 'pending_documents';
  await repo.setUserStatus(userId, accountStatus);

  return {
    driver,
    applicationStatus: accountStatus === 'active' ? 'approved' : 'awaiting_documents',
  };
}
