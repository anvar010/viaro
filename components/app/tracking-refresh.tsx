"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Keeps a live trip page current.
 *
 * The backend streams positions over the `/tracking/:tripId` socket namespace, but no
 * socket client is wired yet — so until NEXT_PUBLIC_REALTIME_ENABLED is true this
 * re-runs the server render on an interval, reading `lastLocation` off the Trip, which
 * the API stores for exactly this fallback. Swapping in the socket later means
 * replacing this component and nothing else.
 */
const POLL_MS = 10_000;

export function TrackingRefresh({ intervalMs = POLL_MS }: { intervalMs?: number }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_REALTIME_ENABLED === "true") {
      // A socket client would subscribe here instead of polling.
      return;
    }

    const id = setInterval(() => router.refresh(), intervalMs);
    // Pause while the tab is hidden — a backgrounded tab does not need the position.
    const onVisible = () => {
      if (document.visibilityState === "visible") router.refresh();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [router, intervalMs]);

  return null;
}
