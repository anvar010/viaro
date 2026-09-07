import type { Server as SocketIOServer, Socket } from 'socket.io';
import { Driver } from '../models/Driver';
import { socketAuthMiddleware } from './socketAuth';
import { ns } from './io';
import { logger } from '../utils/logger';
import * as dispatchService from '../modules/dispatch/dispatch.service';
import { locationUpdateSchema } from '../modules/dispatch/dispatch.validation';

/**
 * '/dispatch' namespace (spec §5).
 *
 * Drivers connect, authenticate with their JWT, and join a private room keyed by their
 * Driver id so the dispatcher can address them individually.
 *
 * Emits:  booking:new      — a ride is available
 *         booking:claimed  — somebody else took it
 * Accepts: location:update — feeds the Redis GEO set used to find nearby drivers
 *          booking:claimed — driver signals a claim (persisted by POST /trips/:id/accept)
 */
export function attachDispatchNamespace(io: SocketIOServer): void {
  const nsp = io.of(ns.dispatch);

  nsp.use(socketAuthMiddleware);

  nsp.use(async (socket, next) => {
    if (socket.user?.role !== 'driver') {
      next(new Error('Only drivers may connect to the dispatch namespace'));
      return;
    }

    const driver = await Driver.findOne({ userId: socket.user.userId }).lean();
    if (!driver) {
      next(new Error('Driver profile not found'));
      return;
    }

    socket.data.driverId = String(driver._id);
    next();
  });

  nsp.on('connection', (socket: Socket) => {
    const driverId = socket.data.driverId as string;
    void socket.join(dispatchService.driverRoom(driverId));
    logger.info(`Driver ${driverId} connected to /dispatch`);

    socket.on('location:update', async (payload: unknown) => {
      const parsed = locationUpdateSchema.safeParse(payload);
      if (!parsed.success) return;
      try {
        await dispatchService.upsertDriverLocation(driverId, parsed.data.lat, parsed.data.lng);
      } catch (err) {
        logger.warn(`Failed to store location for driver ${driverId}`, err);
      }
    });

    // Real-time courtesy broadcast only — the authoritative claim is the REST accept call.
    socket.on('booking:claimed', (payload: { bookingId?: string }) => {
      if (!payload?.bookingId) return;
      socket.broadcast.emit('booking:claimed', { bookingId: payload.bookingId, driverId });
    });

    socket.on('disconnect', async () => {
      // A disconnected driver cannot receive offers, so drop them from the GEO set.
      await dispatchService.removeDriverLocation(driverId).catch(() => undefined);
      logger.info(`Driver ${driverId} disconnected from /dispatch`);
    });
  });
}
