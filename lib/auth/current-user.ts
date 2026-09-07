import "server-only";
import { cache } from "react";
import { apiOptional } from "@/lib/api/client";
import { readTokens } from "@/lib/auth/session";
import type { User, UserRole } from "@/lib/api/types";

/**
 * The signed-in user, or null.
 *
 * Wrapped in React's `cache` so a layout and three components asking for the user in
 * the same render make one request, not four.
 */
export const getCurrentUser = cache(async (): Promise<User | null> => {
  const { accessToken } = await readTokens();
  if (!accessToken) return null;
  return apiOptional<User>("/users/me");
});

/** Role from the cookie — cheap, and enough for rendering decisions. */
export async function getRole(): Promise<UserRole | null> {
  return (await readTokens()).role;
}

export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) throw new Error("UNAUTHENTICATED");
  return user;
}
