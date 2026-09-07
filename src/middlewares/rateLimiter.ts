import type { NextFunction, Request, RequestHandler, Response } from 'express';
import { env } from '../config/env';
import { redis } from '../config/redis';
import { ApiError } from '../utils/ApiError';
import { logger } from '../utils/logger';

/**
 * Redis-backed fixed-window rate limiter (no extra dependency — Redis is already a
 * hard requirement of this stack). Counts per key per window with INCR + PEXPIRE.
 *
 * Fails OPEN, and fails FAST: if Redis is not ready, or the counter round-trip takes
 * longer than LIMITER_TIMEOUT_MS, the request proceeds rather than waiting on ioredis'
 * offline queue (which otherwise stalls a request for the whole reconnect backoff).
 * Rate limiting is a guard rail here, not an auth control.
 */
const LIMITER_TIMEOUT_MS = 250;


/**
 * Last-resort in-process counter, used only when Redis cannot answer.
 *
 * Failing fully open is right for the general API limiter — it is a guard rail, and a
 * Redis blip should not take the site down. It is not right for the login endpoint,
 * where the limiter is the brute-force control: an attacker who can induce a few hundred
 * milliseconds of Redis latency would otherwise get unlimited password attempts.
 *
 * This keeps a bound in that window without the availability cost of failing closed.
 * It is per-process and therefore weaker than the Redis counter — that is accepted; the
 * comparison is against no limit at all, not against the healthy path.
 */
const localCounters = new Map<string, { count: number; expiresAt: number }>();

/** Bounded so a flood of distinct keys cannot grow this without limit. */
const LOCAL_COUNTER_CAP = 10_000;

function countLocally(key: string, windowMs: number): number {
  const now = Date.now();

  if (localCounters.size > LOCAL_COUNTER_CAP) {
    for (const [k, v] of localCounters) if (v.expiresAt <= now) localCounters.delete(k);
    // Still oversized: the window is short, so dropping everything costs at most one
    // window of accuracy and is preferable to unbounded growth.
    if (localCounters.size > LOCAL_COUNTER_CAP) localCounters.clear();
  }

  const existing = localCounters.get(key);
  if (!existing || existing.expiresAt <= now) {
    localCounters.set(key, { count: 1, expiresAt: now + windowMs });
    return 1;
  }

  existing.count += 1;
  return existing.count;
}

export interface RateLimiterOptions {
  /** Window length in milliseconds. Default 60s. */
  windowMs?: number;
  /** Max requests allowed per key per window. Default 100. */
  max?: number;
  /** Namespace so different limiters don't share counters. */
  keyPrefix?: string;
  /** Defaults to authenticated userId, falling back to client IP. */
  keyGenerator?: (req: Request) => string;
  message?: string;
  /**
   * Keep counting in-process when Redis is unavailable instead of letting everything
   * through. Set for the endpoints where the limiter is a security control rather than
   * a guard rail.
   */
  fallbackWhenUnavailable?: boolean;
}

export function createRateLimiter(options: RateLimiterOptions = {}): RequestHandler {
  const {
    windowMs = 60_000,
    max = 100,
    keyPrefix = 'ratelimit',
    keyGenerator = defaultKeyGenerator,
    message = 'Too many requests, please try again later',
    fallbackWhenUnavailable = false,
  } = options;

  /** Shared by both Redis-unavailable paths below. */
  const degraded = (req: Request, next: NextFunction): void => {
    if (!fallbackWhenUnavailable) {
      next();
      return;
    }

    const hits = countLocally(`${keyPrefix}:${keyGenerator(req)}`, windowMs);
    next(hits > max ? ApiError.tooManyRequests(message) : undefined);
  };

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Redis down or still connecting — do not queue on it.
    if (redis.status !== 'ready') {
      degraded(req, next);
      return;
    }

    const windowId = Math.floor(Date.now() / windowMs);
    const key = `${keyPrefix}:${keyGenerator(req)}:${windowId}`;

    try {
      const result = await withTimeout(
        redis.multi().incr(key).pexpire(key, windowMs).exec(),
        LIMITER_TIMEOUT_MS,
      );

      const hits = Number(result?.[0]?.[1] ?? 0);
      const remaining = Math.max(0, max - hits);

      res.setHeader('RateLimit-Limit', String(max));
      res.setHeader('RateLimit-Remaining', String(remaining));
      res.setHeader('RateLimit-Reset', String(Math.ceil(((windowId + 1) * windowMs - Date.now()) / 1000)));

      if (hits > max) {
        next(ApiError.tooManyRequests(message));
        return;
      }

      next();
    } catch (err) {
      logger.warn(
        `Rate limiter unavailable for '${keyPrefix}', ` +
          (fallbackWhenUnavailable ? 'counting in-process instead' : 'allowing request through'),
        err,
      );
      degraded(req, next);
    }
  };
}

function defaultKeyGenerator(req: Request): string {
  return req.user?.userId ?? req.ip ?? 'anonymous';
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_resolve, reject) =>
      setTimeout(() => reject(new Error(`Redis rate-limit lookup timed out after ${ms}ms`)), ms).unref(),
    ),
  ]);
}

/** Broad default applied to the whole API in app.ts. */
export const apiRateLimiter = createRateLimiter({
  windowMs: 60_000,
  max: env.API_RATE_LIMIT_MAX,
  keyPrefix: 'ratelimit:api',
});

/** Tighter limiter for credential endpoints, mounted on the /auth routes. */
export const authRateLimiter = createRateLimiter({
  windowMs: env.AUTH_RATE_LIMIT_WINDOW_MIN * 60_000,
  max: env.AUTH_RATE_LIMIT_MAX,
  keyPrefix: 'ratelimit:auth',
  message: 'Too many authentication attempts, please try again later',
  // The one limiter that is a security control: it must not vanish when Redis hiccups.
  fallbackWhenUnavailable: true,
});
