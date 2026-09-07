import type { NextResponse } from "next/server";

export const REFRESH_COOKIE = "viaro_refresh";

/** Mirrors the backend's JWT_REFRESH_EXPIRES_IN (30d). */
const THIRTY_DAYS_SECONDS = 60 * 60 * 24 * 30;

export function refreshCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: THIRTY_DAYS_SECONDS,
  };
}

export function clearRefreshCookie(response: NextResponse) {
  response.cookies.set(REFRESH_COOKIE, "", { ...refreshCookieOptions(), maxAge: 0 });
}
