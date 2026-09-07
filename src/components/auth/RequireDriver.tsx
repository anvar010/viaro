"use client";

import type { ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { useAuth } from "@/lib/auth/AuthProvider";
import { Card } from "@/components/ui/Surfaces";
import { SignInForm } from "./SignInForm";

/**
 * The whole portal is driver-only, so the gate wraps the shell rather than each page.
 *
 * The design has no sign-in screen for `drive.viaro.com` — the desktop tab jumps
 * straight to `14 · Dashboard`. Rather than bounce to the customer site, this renders
 * a sign-in card on the same tokens, and refuses non-driver accounts explicitly:
 * every endpoint behind it is roleGuard('driver'), so a customer signing in here would
 * otherwise land on a dashboard where every request 403s.
 */
export function RequireDriver({ children }: { children: ReactNode }) {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <p className="text-note text-fg-muted">Checking your session…</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 py-12">
        <div className="w-full max-w-[26rem]">
          <Logo width={110} className="mx-auto" />
          <h1 className="mt-8 text-center text-[1.5rem] font-bold tracking-tight text-fg">
            Driver portal
          </h1>
          <p className="mt-2 text-center text-note text-fg-muted">
            Sign in with the account dispatch assigned to you.
          </p>
          <SignInForm />
        </div>
      </div>
    );
  }

  if (user.role !== "driver") {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 py-12">
        <Card className="w-full max-w-[26rem] p-6 text-center">
          <h1 className="text-card font-bold text-fg">This portal is for chauffeurs</h1>
          <p className="mt-3 text-note leading-relaxed text-fg-muted">
            You are signed in as a {user.role}. Passenger bookings live on the main
            VIARO site.
          </p>
          <button
            type="button"
            onClick={logout}
            className="mt-5 text-note font-bold text-accent hover:opacity-80"
          >
            Sign out
          </button>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
