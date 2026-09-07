import { env } from '../config/env';
import { logger } from '../utils/logger';
import { now, toDate } from '../config/timezone';

/**
 * Flight data client (spec §4.8).
 *
 * Two real providers are implemented and selected by FLIGHT_API_PROVIDER:
 *   aviationstack | flightaware
 * With no provider (or no key) configured it falls back to `mock`, so the whole system
 * still runs end to end locally. Adding a third provider means adding one adapter below
 * and nothing else.
 */
export interface FlightDetails {
  flightNumber: string;
  status: 'scheduled' | 'active' | 'landed' | 'cancelled' | 'unknown';
  scheduledArrival: Date;
  actualArrival: Date | null;
  /** Arrival airport IATA code, when the provider reports it. */
  arrivalAirport?: string | null;
  provider: string;
  /** True when this is generated data, not a real lookup. */
  placeholder: boolean;
}

const REQUEST_TIMEOUT_MS = 10_000;

export async function fetchFlightDetails(flightNumber: string): Promise<FlightDetails> {
  const flight = flightNumber.toUpperCase().trim();
  const provider = (env.FLIGHT_API_PROVIDER || '').toLowerCase();

  if (!provider || !env.FLIGHT_API_KEY) return mockFlight(flight, provider || 'mock');

  try {
    switch (provider) {
      case 'aviationstack':
        return await fromAviationStack(flight);
      case 'flightaware':
        return await fromFlightAware(flight);
      default:
        logger.warn(`Unknown FLIGHT_API_PROVIDER '${provider}' — falling back to mock data`);
        return mockFlight(flight, provider);
    }
  } catch (err) {
    // A flight lookup must never break a booking or a driver's trip view.
    logger.error(`Flight lookup failed for ${flight} via ${provider}`, err);
    return mockFlight(flight, provider);
  }
}

/* ------------------------------- aviationstack ---------------------------- */

interface AviationStackResponse {
  data?: Array<{
    flight_status?: string;
    arrival?: { scheduled?: string; actual?: string; iata?: string };
    flight?: { iata?: string };
  }>;
}

async function fromAviationStack(flightNumber: string): Promise<FlightDetails> {
  const url = new URL('https://api.aviationstack.com/v1/flights');
  url.searchParams.set('access_key', env.FLIGHT_API_KEY as string);
  url.searchParams.set('flight_iata', flightNumber);
  url.searchParams.set('limit', '1');

  const body = (await getJson(url.toString())) as AviationStackResponse;
  const record = body.data?.[0];

  if (!record) throw new Error(`No aviationstack record for ${flightNumber}`);

  return {
    flightNumber,
    status: normaliseStatus(record.flight_status),
    scheduledArrival: parseDate(record.arrival?.scheduled) ?? toDate(now().plus({ minutes: 90 })),
    actualArrival: parseDate(record.arrival?.actual),
    arrivalAirport: record.arrival?.iata ?? null,
    provider: 'aviationstack',
    placeholder: false,
  };
}

/* -------------------------------- flightaware ----------------------------- */

interface FlightAwareResponse {
  flights?: Array<{
    status?: string;
    scheduled_in?: string;
    estimated_in?: string;
    actual_in?: string;
    destination?: { code_iata?: string };
  }>;
}

async function fromFlightAware(flightNumber: string): Promise<FlightDetails> {
  const url = `https://aeroapi.flightaware.com/aeroapi/flights/${encodeURIComponent(flightNumber)}`;

  const body = (await getJson(url, {
    'x-apikey': env.FLIGHT_API_KEY as string,
  })) as FlightAwareResponse;

  const record = body.flights?.[0];
  if (!record) throw new Error(`No flightaware record for ${flightNumber}`);

  return {
    flightNumber,
    status: normaliseStatus(record.status),
    scheduledArrival:
      parseDate(record.scheduled_in) ??
      parseDate(record.estimated_in) ??
      toDate(now().plus({ minutes: 90 })),
    actualArrival: parseDate(record.actual_in),
    arrivalAirport: record.destination?.code_iata ?? null,
    provider: 'flightaware',
    placeholder: false,
  };
}

/* ---------------------------------- shared -------------------------------- */

async function getJson(url: string, headers: Record<string, string> = {}): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(url, { headers: { accept: 'application/json', ...headers }, signal: controller.signal });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

function normaliseStatus(raw?: string): FlightDetails['status'] {
  const value = (raw ?? '').toLowerCase();
  if (value.includes('cancel')) return 'cancelled';
  if (value.includes('land') || value.includes('arrived')) return 'landed';
  if (value.includes('active') || value.includes('en route') || value.includes('airborne')) return 'active';
  if (value.includes('schedul')) return 'scheduled';
  return 'unknown';
}

function parseDate(value?: string | null): Date | null {
  if (!value) return null;
  const parsed = new Date(value); // provider timestamps are absolute (ISO/UTC), not wall time
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/** Deterministic stand-in used until a provider and key are configured. */
function mockFlight(flightNumber: string, provider: string): FlightDetails {
  logger.info('flightApi: returning mock data — no provider/key configured', { flightNumber, provider });

  return {
    flightNumber,
    status: 'scheduled',
    scheduledArrival: toDate(now().plus({ minutes: 90 })),
    actualArrival: null,
    arrivalAirport: null,
    provider: provider || 'mock',
    placeholder: true,
  };
}
