"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  NotAvailable,
  SectionCard,
  StatCard,
  StatCardSkeleton,
  StatusBadge,
  compactMoney,
  count,
  money,
  reference,
} from "@/components/ui/Dashboard";
import {
  AreaChart,
  ChartCard,
  DonutChart,
  ProgressBar,
  RangeTabs,
  bucketByDay,
} from "@/components/ui/Charts";
import {
  IconCar,
  IconCheck,
  IconClock,
  IconMoney,
  IconPin,
  IconPlane,
  IconRoute,
  IconStar,
} from "@/components/ui/Icons";
import { ApiError } from "@/lib/api/client";
import {
  completeTrip,
  getCancellations,
  getDispatchPool,
  getEarningsPayout,
  getMyDriver,
  getTripsCompleted,
  listMyTrips,
  startTrip,
  todayRange,
  weekRange,
  type CancellationsReport,
  type EarningsPayoutReport,
  type PoolEntry,
} from "@/lib/api/driver";
import { useAuth } from "@/lib/auth/AuthProvider";
import type { Driver, Trip } from "@/lib/api/types";

/**
 * The chauffeur's working screen.
 *
 * Ordered by what someone mid-shift needs: the trip in progress first, then what is
 * coming, then what they have earned. Analytics sit below all of that — a driver opens
 * this to find out what to do next, not to study a chart.
 *
 * Note that no fare appears anywhere on this page. The API strips `fareAmount` from a
 * driver's trip payload on purpose (spec §8 rule 2), so earnings here come from the
 * wallet — what the driver was actually paid — and never from the passenger's fare.
 */

const SERVICE_LABEL: Record<string, string> = {
  point2point: "Point to point",
  airport: "Airport",
  hourly: "Hourly",
};

const EARNING_RANGES = [
  { key: "7d", label: "7 days", days: 7 },
  { key: "30d", label: "30 days", days: 30 },
  { key: "3m", label: "3 months", days: 90 },
] as const;

type EarningRange = (typeof EARNING_RANGES)[number]["key"];

const iso = (d: Date) => d.toISOString().slice(0, 10);
const since = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return iso(d);
};
const monthRange = () => {
  const now = new Date();
  return { from: iso(new Date(now.getFullYear(), now.getMonth(), 1)) };
};

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

const timeOf = (value?: string | null) =>
  value
    ? new Date(value).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    : "—";

const dayOf = (value?: string | null) =>
  value
    ? new Date(value).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
    : "—";

export default function DriverDashboard() {
  const { user } = useAuth();

  const [driver, setDriver] = useState<Driver | null>(null);
  const [stats, setStats] = useState<{ activeTrips: number; completedTrips: number } | null>(null);
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const [pool, setPool] = useState<PoolEntry[]>([]);
  const [cancels, setCancels] = useState<CancellationsReport | null>(null);
  const [earnings, setEarnings] = useState<{
    today: number;
    week: number;
    month: number;
    all: EarningsPayoutReport | null;
  }>({ today: 0, week: 0, month: 0, all: null });
  const [todayTrips, setTodayTrips] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [range, setRange] = useState<EarningRange>("30d");
  const [series, setSeries] = useState<EarningsPayoutReport | null>(null);
  const [seriesLoading, setSeriesLoading] = useState(true);

  /**
   * Guarded the same way the earnings-series effect below already is — this one was the
   * outlier, and it is refetched by live updates, which is precisely when two loads can
   * be in flight at once.
   */
  const load = useCallback(async (isCurrent: () => boolean = () => true) => {
    // Each tile has its own source; one failing must not blank the whole page.
    const [me, myTrips, todayPay, weekPay, monthPay, allPay, todayDone, poolRes, cancelRes] =
      await Promise.allSettled([
        getMyDriver(),
        listMyTrips({ limit: 50 }),
        getEarningsPayout(todayRange()),
        getEarningsPayout(weekRange()),
        getEarningsPayout(monthRange()),
        getEarningsPayout(),
        getTripsCompleted(todayRange()),
        getDispatchPool(),
        getCancellations(),
      ]);

    if (!isCurrent()) return;

    if (me.status === "fulfilled") {
      setDriver(me.value.driver);
      setStats(me.value.stats);
    }
    if (myTrips.status === "fulfilled") setTrips(myTrips.value.items ?? []);
    if (todayDone.status === "fulfilled") setTodayTrips(todayDone.value.count);
    if (cancelRes.status === "fulfilled") setCancels(cancelRes.value);
    if (poolRes.status === "fulfilled") {
      setPool(Array.isArray(poolRes.value) ? poolRes.value : (poolRes.value.items ?? []));
    }

    const credited = (r: PromiseSettledResult<EarningsPayoutReport>) =>
      r.status === "fulfilled" ? r.value.totalCredited : 0;

    setEarnings({
      today: credited(todayPay),
      week: credited(weekPay),
      month: credited(monthPay),
      all: allPay.status === "fulfilled" ? allPay.value : null,
    });

    if (me.status === "rejected") setError("Some of your dashboard could not be loaded.");
    setLoading(false);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void load(() => !cancelled);
    return () => {
      cancelled = true;
    };
  }, [load]);

  useEffect(() => {
    let cancelled = false;
    setSeriesLoading(true);
    const days = EARNING_RANGES.find((r) => r.key === range)?.days ?? 30;

    getEarningsPayout({ from: since(days) })
      .then((report) => {
        if (!cancelled) setSeries(report);
      })
      .catch(() => {
        if (!cancelled) setSeries(null);
      })
      .finally(() => {
        if (!cancelled) setSeriesLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [range]);

  /* -------------------------------- derived -------------------------------- */

  const currentTrip = useMemo(
    () => (trips ?? []).find((t) => t.status === "started" || t.status === "accepted") ?? null,
    [trips],
  );

  const upcoming = useMemo(
    () =>
      (trips ?? [])
        .filter((t) => t.status === "accepted" && t._id !== currentTrip?._id)
        .sort((a, b) =>
          (a.booking?.scheduledAt ?? "").localeCompare(b.booking?.scheduledAt ?? ""),
        )
        .slice(0, 5),
    [trips, currentTrip],
  );

  const history = useMemo(
    () =>
      (trips ?? [])
        .filter((t) => t.status === "completed" || t.status === "cancelled")
        .sort((a, b) =>
          (b.timestamps.completed ?? "").localeCompare(a.timestamps.completed ?? ""),
        )
        .slice(0, 8),
    [trips],
  );

  const days = EARNING_RANGES.find((r) => r.key === range)?.days ?? 30;
  const earningSeries = useMemo(
    () =>
      bucketByDay(
        (series?.rows ?? [])
          // Only credits are earnings — a withdrawal moves money out and would
          // otherwise read as a second payday on the chart.
          .filter((row) => row.type === "credit")
          // row.at, not row.createdAt: the latter does not exist on this payload, so
          // bucketByDay skipped every point and the chart drew a flat zero over real
          // earnings. The value is a PT-formatted string, which Date parses correctly.
          .map((row) => ({ at: row.at, value: row.amount })),
        days,
      ),
    [series, days],
  );

  const completed = stats?.completedTrips ?? 0;
  const cancelledByMe = (cancels?.cancellations ?? []).filter(
    (c) => c.cancelledBy === "driver",
  ).length;
  const handled = completed + cancelledByMe;
  const completionRate = handled > 0 ? Math.round((completed / handled) * 100) : 0;

  return (
    <div className="mx-auto max-w-[1400px]">
      {/* -------------------------------- welcome ------------------------------- */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar name={user?.name} size={44} tone="solid" />
          <div className="min-w-0">
            <h2 className="truncate text-[1.5rem] font-bold tracking-tight text-fg">
              {greeting()}
              {user?.name ? `, ${user.name.split(" ")[0]}` : ""}
            </h2>
            <p className="mt-0.5 text-note text-fg-muted">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
          {driver ? <StatusBadge status={driver.status} /> : null}
          {driver && driver.ratingCount > 0 ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-label font-bold text-fg">
              <IconStar size={13} className="text-chart-warn" />
              {driver.rating.toFixed(1)}
              <span className="text-fg-muted">({driver.ratingCount})</span>
            </span>
          ) : null}
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-field border border-danger/30 bg-danger/5 px-4 py-3 text-note font-bold text-danger">
          {error}
        </p>
      ) : null}

      {/* --------------------------------- KPIs --------------------------------- */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)
        ) : (
          <>
            <StatCard
              tone="feature"
              label="Earned today"
              value={compactMoney(earnings.today)}
              hint={`${todayTrips} ${todayTrips === 1 ? "trip" : "trips"} completed`}
              icon={<IconMoney size={18} />}
              href="/earnings"
            />
            <StatCard
              label="This week"
              value={compactMoney(earnings.week)}
              hint="Since Monday"
              icon={<IconMoney size={18} />}
              href="/earnings"
            />
            <StatCard
              label="This month"
              value={compactMoney(earnings.month)}
              hint={`${compactMoney(earnings.all?.balance ?? 0)} in your wallet`}
              icon={<IconCheck size={18} />}
              href="/earnings"
            />
            <StatCard
              label="Open requests"
              value={count(pool.length)}
              hint="Waiting in the pool"
              icon={<IconRoute size={18} />}
              href="/requests"
            />
          </>
        )}
      </div>

      {/* ----------------------------- current trip ----------------------------- */}
      <div className="mt-6">
        {loading ? (
          <div className="h-44 animate-pulse rounded-card bg-surface" aria-hidden />
        ) : currentTrip ? (
          <CurrentTrip trip={currentTrip} onChanged={load} />
        ) : (
          <div className="rounded-card border border-border bg-surface-raised p-6 text-center shadow-[var(--shadow-card)]">
            <span
              aria-hidden
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface text-fg-muted"
            >
              <IconCar size={22} />
            </span>
            <p className="mt-3 text-card font-bold text-fg">No trip in progress</p>
            <p className="mx-auto mt-2 max-w-sm text-note leading-relaxed text-fg-muted">
              {driver?.status === "available"
                ? "You are online. New requests will appear here and in Requests as dispatch offers them."
                : "Go online from the switch above to start receiving ride offers."}
            </p>
            <Link
              href="/requests"
              className="mt-4 inline-flex h-10 items-center rounded-field bg-primary px-5 text-meta font-bold text-primary-fg"
            >
              Browse open requests
            </Link>
          </div>
        )}
      </div>

      {/* ---------------------------- upcoming trips ---------------------------- */}
      <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <SectionCard
          title="Coming up"
          subtitle="Trips you have accepted, soonest first"
          action={
            <Link href="/schedule" className="text-note font-bold text-accent hover:underline">
              Full schedule
            </Link>
          }
          bodyClassName="px-5 pb-5"
        >
          {trips === null ? (
            <p className="py-6 text-note text-fg-muted">Loading…</p>
          ) : upcoming.length === 0 ? (
            <p className="py-6 text-note leading-relaxed text-fg-muted">
              Nothing else booked. Accepted trips appear here as a timeline so you can see
              your day at a glance.
            </p>
          ) : (
            <ol className="relative space-y-4 pl-6">
              {/* The rail is a single element behind the dots rather than a border per
                  row, so it stays continuous whatever height a row grows to. */}
              <span
                aria-hidden
                className="absolute bottom-2 left-[7px] top-2 w-px bg-border"
              />
              {upcoming.map((trip) => (
                <li key={trip._id} className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-bg"
                  />
                  <Link
                    href={`/trips/${trip._id}`}
                    className="block rounded-field border border-border bg-surface p-3.5 transition-colors hover:border-accent"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-meta font-bold text-fg">
                        {timeOf(trip.booking?.scheduledAt)}
                      </span>
                      <span className="text-label text-fg-muted">
                        {dayOf(trip.booking?.scheduledAt)}
                      </span>
                      <span className="ml-auto">
                        <StatusBadge status={trip.status} />
                      </span>
                    </div>
                    <p className="mt-2 truncate text-note font-bold text-fg">
                      {trip.customer?.name ?? "Passenger"}
                    </p>
                    <p className="mt-1 flex items-start gap-1.5 text-label text-fg-muted">
                      <IconPin size={13} className="mt-px shrink-0" />
                      <span className="min-w-0 truncate">
                        {trip.booking?.pickup.address ?? "—"} →{" "}
                        {trip.booking?.drop.address ?? "—"}
                      </span>
                    </p>
                    <p className="mt-1.5 text-label text-fg-muted">
                      {SERVICE_LABEL[trip.booking?.tripType ?? ""] ?? "Trip"}
                      {trip.booking?.flightDetails
                        ? ` · ${trip.booking.flightDetails.flightNumber}`
                        : ""}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          )}
        </SectionCard>

        <div className="space-y-4">
          <ChartCard
            title="Earnings"
            subtitle={`${compactMoney(
              earningSeries.reduce((a, p) => a + p.value, 0),
            )} paid into your wallet`}
            action={
              <RangeTabs value={range} onChange={setRange as never} options={EARNING_RANGES} />
            }
            loading={seriesLoading}
          >
            <AreaChart data={earningSeries} kind="money" height={180} />
          </ChartCard>

          <ChartCard title="Your record" subtitle="Across every trip you have taken">
            <div className="space-y-4">
              <ProgressBar
                label="Completion rate"
                value={completionRate}
                display={handled > 0 ? `${completionRate}%` : "—"}
                tone={completionRate >= 90 ? "good" : completionRate >= 70 ? "warn" : "bad"}
              />
              <ProgressBar
                label="Rating"
                value={driver?.rating ?? 0}
                max={5}
                display={
                  driver && driver.ratingCount > 0 ? `${driver.rating.toFixed(1)} / 5` : "Unrated"
                }
                tone="good"
              />
              <div className="grid grid-cols-3 gap-3 pt-1">
                <Metric label="Completed" value={count(completed)} />
                <Metric label="Cancelled" value={count(cancelledByMe)} />
                <Metric label="Penalties" value={count(driver?.penaltyCount ?? 0)} />
              </div>
            </div>
          </ChartCard>
        </div>
      </div>

      {/* ------------------------------- analytics ------------------------------ */}
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <ChartCard title="Trip outcomes" subtitle="Completed against cancelled" loading={loading}>
          <DonutChart
            total={handled}
            totalLabel="Trips"
            slices={[
              { label: "Completed", value: completed, color: "var(--chart-good)" },
              { label: "Cancelled", value: cancelledByMe, color: "var(--chart-bad)" },
            ]}
          />
        </ChartCard>

        <ChartCard title="Distance and driving time" subtitle="Not recorded yet">
          <NotAvailable
            title="The API does not track distance or time behind the wheel"
            reason="A Trip stores its lifecycle timestamps and a last known position, but no odometer reading or route length, so neither figure can be shown without inventing it. Accumulating distance per trip on completion would make this panel real."
          />
        </ChartCard>

        <ChartCard title="Wallet" subtitle="What you have been paid, all time">
          <div className="space-y-4">
            <Metric label="Available balance" value={money(earnings.all?.balance ?? 0)} large />
            <div className="grid grid-cols-2 gap-3">
              <Metric label="Credited" value={money(earnings.all?.totalCredited ?? 0)} />
              <Metric label="Withdrawn" value={money(earnings.all?.totalWithdrawn ?? 0)} />
            </div>
            <Link
              href="/earnings"
              className="inline-block text-note font-bold text-accent hover:underline"
            >
              Withdraw or see the ledger →
            </Link>
          </div>
        </ChartCard>
      </div>

      {/* ------------------------------ trip history ---------------------------- */}
      <SectionCard
        className="mt-4"
        title="Recent trips"
        subtitle="Your last completed and cancelled jobs"
        action={
          <Link href="/schedule" className="text-note font-bold text-accent hover:underline">
            All trips
          </Link>
        }
      >
        {trips === null ? (
          <p className="px-5 pb-6 text-note text-fg-muted">Loading…</p>
        ) : history.length === 0 ? (
          <p className="px-5 pb-6 text-note text-fg-muted">
            No finished trips yet — your history builds up as you complete work.
          </p>
        ) : (
          <>
            {/* Cards on a phone, table from md up. */}
            <ul className="divide-y divide-border-subtle md:hidden">
              {history.map((trip) => (
                <li key={trip._id} className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-meta font-bold text-fg">{reference(trip._id)}</span>
                    <span className="ml-auto">
                      <StatusBadge status={trip.status} />
                    </span>
                  </div>
                  <p className="mt-1.5 truncate text-note text-fg-body">
                    {trip.customer?.name ?? "Passenger"}
                  </p>
                  <p className="mt-1 truncate text-label text-fg-muted">
                    {trip.booking?.pickup.address ?? "—"} → {trip.booking?.drop.address ?? "—"}
                  </p>
                  <p className="mt-1 text-label text-fg-muted">
                    {dayOf(trip.timestamps.completed ?? trip.booking?.scheduledAt)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full text-left" style={{ minWidth: "44rem" }}>
                <thead>
                  <tr className="border-y border-border-subtle bg-surface/60 text-label font-bold uppercase tracking-wider text-fg-muted">
                    <th className="px-5 py-3">Trip</th>
                    <th className="px-5 py-3">Passenger</th>
                    <th className="px-5 py-3">Route</th>
                    <th className="px-5 py-3">Finished</th>
                    <th className="px-5 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-meta">
                  {history.map((trip) => (
                    <tr key={trip._id} className="transition-colors hover:bg-surface/70">
                      <td className="px-5 py-3.5">
                        <Link
                          href={`/trips/${trip._id}`}
                          className="font-bold text-fg hover:text-accent"
                        >
                          {reference(trip._id)}
                        </Link>
                      </td>
                      <td className="px-5 py-3.5 text-fg-body">
                        {trip.customer?.name ?? "Passenger"}
                      </td>
                      <td className="max-w-[22rem] px-5 py-3.5">
                        <span className="block truncate text-fg-body">
                          {trip.booking?.pickup.address ?? "—"} →{" "}
                          {trip.booking?.drop.address ?? "—"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-fg-muted">
                        {dayOf(trip.timestamps.completed ?? trip.booking?.scheduledAt)}
                      </td>
                      <td className="px-5 py-3.5">
                        <StatusBadge status={trip.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </SectionCard>
    </div>
  );
}

/* --------------------------------- fragments ------------------------------- */

/**
 * The trip in hand. Given the most weight on the page — a navy panel rather than a
 * card — because it is the one thing a chauffeur reads while working.
 *
 * The two actions call the same endpoints as the trip detail screen; this is a
 * shortcut to them, not a second implementation of the lifecycle.
 */
function CurrentTrip({ trip, onChanged }: { trip: Trip; onChanged: () => Promise<void> }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function run(action: () => Promise<unknown>) {
    setBusy(true);
    setError(null);
    try {
      await action();
      await onChanged();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "That did not go through.");
    } finally {
      setBusy(false);
    }
  }

  const booking = trip.booking;

  return (
    <section className="overflow-hidden rounded-card bg-panel text-panel-fg shadow-[var(--shadow-raised)]">
      <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-5 py-4">
        <span className="text-label font-bold uppercase tracking-wider text-panel-muted">
          {trip.status === "started" ? "Trip in progress" : "Next trip · accepted"}
        </span>
        <span className="ml-auto text-label font-bold text-panel-fg">
          {reference(trip._id)}
        </span>
      </div>

      <div className="grid gap-5 px-5 py-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <Avatar name={trip.customer?.name} size={40} />
            <div className="min-w-0">
              <p className="truncate text-card font-bold text-panel-fg">
                {trip.customer?.name ?? "Passenger"}
              </p>
              <p className="truncate text-note text-panel-muted">
                {trip.customer?.phone ?? "Contact via app"}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <Leg icon={<IconPin size={15} />} label="Pickup" value={booking?.pickup.address} />
            <Leg
              icon={<IconRoute size={15} />}
              label={booking?.tripType === "hourly" ? "First stop" : "Drop-off"}
              value={booking?.drop.address}
            />
          </div>
        </div>

        <div className="min-w-0 space-y-3 lg:border-l lg:border-white/10 lg:pl-5">
          <Detail
            icon={<IconClock size={14} />}
            label="Pickup time"
            value={`${timeOf(booking?.scheduledAt)} · ${dayOf(booking?.scheduledAt)}`}
          />
          <Detail
            icon={<IconCar size={14} />}
            label="Vehicle"
            value={booking?.vehicleClass ?? "—"}
          />
          <Detail
            icon={<IconRoute size={14} />}
            label="Service"
            value={SERVICE_LABEL[booking?.tripType ?? ""] ?? "—"}
          />
          {booking?.flightDetails ? (
            <Detail
              icon={<IconPlane size={14} />}
              label="Flight"
              value={booking.flightDetails.flightNumber}
            />
          ) : null}
        </div>
      </div>

      {error ? (
        <p className="mx-5 mb-3 rounded-field bg-white/10 px-3.5 py-2.5 text-note font-bold text-panel-fg">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-2.5 border-t border-white/10 px-5 py-4">
        <Link
          href={`/trips/${trip._id}`}
          className="inline-flex h-10 items-center rounded-field bg-bg px-5 text-meta font-bold text-fg"
        >
          Open trip
        </Link>
        {trip.status === "accepted" ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => run(() => startTrip(trip._id))}
            className="inline-flex h-10 items-center rounded-field bg-white/15 px-5 text-meta font-bold text-panel-fg transition-colors hover:bg-white/25 disabled:opacity-50"
          >
            {busy ? "Starting…" : "Start the trip"}
          </button>
        ) : null}
        {trip.status === "started" ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => run(() => completeTrip(trip._id))}
            className="inline-flex h-10 items-center rounded-field bg-white/15 px-5 text-meta font-bold text-panel-fg transition-colors hover:bg-white/25 disabled:opacity-50"
          >
            {busy ? "Completing…" : "Complete the trip"}
          </button>
        ) : null}
      </div>
    </section>
  );
}

function Leg({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  return (
    <div className="flex gap-3">
      <span
        aria-hidden
        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-panel-fg"
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-label font-bold uppercase tracking-wider text-panel-muted">
          {label}
        </span>
        <span className="mt-0.5 block text-body leading-snug text-panel-fg">
          {value ?? "—"}
        </span>
      </span>
    </div>
  );
}

function Detail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden className="shrink-0 text-panel-muted">
        {icon}
      </span>
      <span className="text-label uppercase tracking-wider text-panel-muted">{label}</span>
      <span className="ml-auto min-w-0 truncate text-meta font-bold text-panel-fg">
        {value}
      </span>
    </div>
  );
}

function Metric({
  label,
  value,
  large,
}: {
  label: string;
  value: string;
  large?: boolean;
}) {
  return (
    <div className="rounded-field border border-border bg-surface p-3">
      <p className="text-label font-bold uppercase tracking-wider text-fg-muted">{label}</p>
      <p
        className={`mt-1.5 font-bold tracking-tight text-fg ${
          large ? "text-[1.5rem]" : "text-action"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
