"use client";

import { useEffect, useState } from "react";
import { getMyDriver, setMyStatus } from "@/lib/api/driver";
import { ApiError } from "@/lib/api/client";
import type { Driver } from "@/lib/api/types";

/**
 * The Offline / Online switch in the portal's top bar (154×38 in the design).
 *
 * 'busy' is a third state the API sets itself while a trip is running. The switch
 * shows it but will not clear it — `PATCH /drivers/me/status` only accepts available
 * or offline, precisely so a driver cannot hide mid-trip.
 */
export function OnlineToggle() {
  const [driver, setDriver] = useState<Driver | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    getMyDriver()
      .then((result) => {
        if (!cancelled) setDriver(result.driver);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
    };
  }, []);

  const busy = driver?.status === "busy";
  const online = driver?.status === "available";

  async function choose(next: "available" | "offline") {
    if (busy || saving || !driver) return;
    setSaving(true);
    setError(null);

    try {
      // Dispatch places a driver by position when they come online; send it if the
      // browser will give it up, and go online without it if not.
      const position = next === "available" ? await currentPosition() : undefined;
      const updated = await setMyStatus(next, position);
      setDriver(updated);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Could not change your status");
    } finally {
      setSaving(false);
    }
  }

  if (busy) {
    return (
      <span className="inline-flex h-9 items-center rounded-full bg-accent-soft px-4 text-small font-bold text-accent-strong">
        On a trip
      </span>
    );
  }

  return (
    <div className="flex flex-col items-end">
      <div
        role="radiogroup"
        aria-label="Availability"
        className="flex h-9 items-center gap-1 rounded-full bg-surface p-1"
      >
        {(
          [
            { value: "offline", label: "Offline" },
            { value: "available", label: "Online" },
          ] as const
        ).map((option) => {
          const active = option.value === (online ? "available" : "offline");
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={saving || !driver}
              onClick={() => choose(option.value)}
              className={`h-7 rounded-full px-3.5 text-small font-bold transition-colors disabled:opacity-50 ${
                active
                  ? option.value === "available"
                    ? "bg-success text-primary-fg"
                    : "bg-surface-raised text-fg"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {error && <p className="mt-1 text-label font-bold text-danger">{error}</p>}
    </div>
  );
}

/** Resolves to undefined rather than rejecting — location is a nice-to-have here. */
function currentPosition(): Promise<{ lat: number; lng: number } | undefined> {
  if (typeof navigator === "undefined" || !navigator.geolocation) {
    return Promise.resolve(undefined);
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({ lat: position.coords.latitude, lng: position.coords.longitude }),
      () => resolve(undefined),
      { timeout: 5000 },
    );
  });
}
