import "server-only";
import { API_URL } from "@/lib/api/client";
import type { AuthResult } from "@/lib/api/types";

/**
 * Raw token exchange, deliberately free of `cookies()` so it can be called from
 * middleware (where the cookie jar belongs to the response, not the request).
 */
export async function exchangeRefreshToken(refreshToken: string): Promise<AuthResult | null> {
  try {
    const res = await fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // The backend takes the refresh token in the BODY, not a header or cookie.
      body: JSON.stringify({ refreshToken }),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const payload = (await res.json()) as { success: boolean; data: AuthResult };
    return payload?.data ?? null;
  } catch {
    return null;
  }
}
