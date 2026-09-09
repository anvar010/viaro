"use client";

import { useEffect, useState } from "react";
import { fetchAllPages, listDrivers, type RosterDriver } from "@/lib/api/admin";

/**
 * Driver id -> the chauffeur's actual name.
 *
 * The trips and reports tables rendered the last six characters of a driver's id in caps
 * ("A3F9C1"), which is unreadable for any fleet with more than a couple of chauffeurs —
 * an operator could not tell whose trip they were looking at. The dashboard and penalties
 * pages already joined against the roster to show real names; this makes that join
 * reusable instead of a third hand-written copy.
 *
 * The roster is company-scoped server-side (`GET /admin/drivers` filters by the caller's
 * own roster), so this never reveals another operator's staff.
 */
export function useDriverNames(): {
  nameFor: (driverId: string) => string;
  loaded: boolean;
} {
  const [names, setNames] = useState<Map<string, string>>(new Map());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchAllPages<RosterDriver>((page, limit) => listDrivers(page, limit))
      .then(({ items }) => {
        if (cancelled) return;
        const next = new Map<string, string>();
        for (const driver of items) {
          const user = driver.userId;
          if (user && typeof user === "object" && user.name) next.set(driver._id, user.name);
        }
        setNames(next);
        setLoaded(true);
      })
      .catch(() => {
        // A failed roster lookup must not blank the table — the id fallback still works.
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  /** Falls back to the short code, so a driver missing from the roster still renders. */
  const nameFor = (driverId: string): string =>
    names.get(driverId) ?? driverId.slice(-6).toUpperCase();

  return { nameFor, loaded };
}
