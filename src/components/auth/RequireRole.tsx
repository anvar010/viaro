"use client";

import type { ReactNode } from "react";
import { Logo } from "@/components/brand/Logo";
import { useAuth } from "@/lib/auth/AuthProvider";
import { Card } from "@/components/ui/Surfaces";
import { SignInForm } from "./SignInForm";

/**
 * Role gate for the whole console. Every endpoint behind it is guarded server-side, so
 * this only decides what renders — but signing in with the wrong role would otherwise
 * land on a dashboard where every request 403s, which is worse than saying so.
 */
const ALLOWED = ["company"];

export function RequireRole({ children }: { children: ReactNode }) {
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
            Fleet console
          </h1>
          <p className="mt-2 text-center text-note text-fg-muted">
            Sign in with your company account.
          </p>
          <SignInForm />
        </div>
      </div>
    );
  }

  if (!ALLOWED.includes(user.role)) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-5 py-12">
        <Card className="w-full max-w-[26rem] p-6 text-center">
          <h1 className="text-card font-bold text-fg">This console is for a fleet operator</h1>
          <p className="mt-3 text-note leading-relaxed text-fg-muted">
            You are signed in as a {user.role}. Your product is elsewhere.
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
