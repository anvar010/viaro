import "server-only";
import { readTokens } from "@/lib/auth/session";
import type { ApiEnvelope, ApiErrorBody } from "./types";

/**
 * Server-side client for viaro-backend.
 *
 * Only ever runs on the server: it reads the access token out of an httpOnly cookie,
 * so importing it into a Client Component is a build error ("server-only").
 *
 * Token refresh is NOT done here. A Server Component cannot write cookies during
 * render, so refreshing mid-render would silently drop the new token. Refresh happens
 * in middleware (before render) and in Route Handlers / Server Actions (which can
 * write cookies) — see middleware.ts.
 */
export const API_URL = process.env.API_URL ?? "http://localhost:5001";

export class ApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
    readonly details?: ApiErrorBody["details"],
  ) {
    super(message);
    this.name = "ApiError";
  }

  get isUnauthorized() {
    return this.status === 401;
  }
  get isForbidden() {
    return this.status === 403;
  }
  get isNotFound() {
    return this.status === 404;
  }

  /** Field-level messages from a zod 400, keyed by field name. */
  get fieldErrors(): Record<string, string> {
    if (!Array.isArray(this.details)) return {};
    const out: Record<string, string> = {};
    for (const issue of this.details as { path?: string; message?: string }[]) {
      if (issue?.path && issue?.message) out[issue.path] = issue.message;
    }
    return out;
  }
}

export interface RequestOptions {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: unknown;
  query?: Record<string, string | number | boolean | undefined>;
  /** Explicit token — used by the refresh flow before cookies are written. */
  token?: string | null;
  /** Defaults to no caching: nearly everything here is per-user data. */
  cache?: RequestCache;
  revalidate?: number;
  tags?: string[];
  /** Skip attaching the access token (public endpoints). */
  anonymous?: boolean;
}

function buildUrl(path: string, query?: RequestOptions["query"]) {
  const url = new URL(path.startsWith("/") ? path.slice(1) : path, `${API_URL}/`);
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
  }
  return url.toString();
}

/** Performs the request and unwraps the `{ success, data }` envelope. */
export async function apiFetch<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, query, token, cache, revalidate, tags, anonymous } = options;

  let auth = token ?? null;
  if (!auth && !anonymous) {
    auth = (await readTokens()).accessToken;
  }

  const res = await fetch(buildUrl(path, query), {
    method,
    headers: {
      ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
      ...(auth ? { Authorization: `Bearer ${auth}` } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    cache: cache ?? (revalidate === undefined ? "no-store" : undefined),
    next: revalidate !== undefined || tags ? { revalidate, tags } : undefined,
  }).catch((err) => {
    // A dead backend should read as a service problem, not a mysterious crash.
    throw new ApiError(503, `Cannot reach the API at ${API_URL}: ${(err as Error).message}`);
  });

  const text = await res.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      throw new ApiError(res.status, `Malformed response from ${path}`);
    }
  }

  if (!res.ok) {
    const err = payload as ApiErrorBody | null;
    throw new ApiError(res.status, err?.message ?? res.statusText, err?.details);
  }

  const envelope = payload as ApiEnvelope<T> | null;
  return (envelope && "data" in envelope ? envelope.data : (payload as T)) as T;
}

export const api = {
  get: <T>(path: string, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(path, { ...options, method: "POST", body }),
  patch: <T>(path: string, body?: unknown, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(path, { ...options, method: "PATCH", body }),
  delete: <T>(path: string, options?: Omit<RequestOptions, "method" | "body">) =>
    apiFetch<T>(path, { ...options, method: "DELETE" }),
};

/**
 * Returns null instead of throwing on 401/403/404 — for optional data that should
 * degrade to an empty state rather than take the whole page down.
 */
export async function apiOptional<T>(
  path: string,
  options?: RequestOptions,
): Promise<T | null> {
  try {
    return await apiFetch<T>(path, options);
  } catch (err) {
    if (err instanceof ApiError && (err.isUnauthorized || err.isForbidden || err.isNotFound)) {
      return null;
    }
    throw err;
  }
}
