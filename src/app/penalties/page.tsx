"use client";

import { useEffect, useState } from "react";
import { Badge, Card, Kicker, WarnBox } from "@/components/ui/Surfaces";
import { ConsolePage, DataTable, formatDateTime, type Column } from "@/components/ui/DataTable";
import { listPenalties, getCancellations, type PenaltiesReport, type CancellationsReport } from "@/lib/api/admin";
import { ApiError } from "@/lib/api/client";

type PenaltyRow = PenaltiesReport["drivers"][number];
type CancelRow = CancellationsReport["cancellations"][number];

/** Where the fleet is losing money: late cancellations and alert-delay penalties. */
export default function PenaltiesPage() {
  const [penalties, setPenalties] = useState<PenaltiesReport | null>(null);
  const [cancels, setCancels] = useState<CancellationsReport | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [p, c] = await Promise.allSettled([listPenalties(), getCancellations()]);
      if (cancelled) return;
      if (p.status === "fulfilled") setPenalties(p.value);
      if (c.status === "fulfilled") setCancels(c.value);
      if (p.status === "rejected") {
        setError(p.reason instanceof ApiError ? p.reason.message : "Could not load penalties");
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const penaltyColumns: Column<PenaltyRow>[] = [
    { key: "name", header: "Chauffeur", cell: (r) => <span className="font-bold">{r.user?.name ?? r.driverId}</span> },
    { key: "class", header: "Class", cell: (r) => <span className="capitalize">{r.vehicleClass}</span>, secondary: true },
    { key: "status", header: "Status", cell: (r) => <Badge>{r.status}</Badge>, secondary: true },
    { key: "count", header: "Penalties", align: "right", cell: (r) => r.penaltyCount },
  ];

  const cancelColumns: Column<CancelRow>[] = [
    { key: "trip", header: "Trip", cell: (r) => r.tripId.slice(-6).toUpperCase() },
    { key: "by", header: "Cancelled by", cell: (r) => r.cancelledBy ?? "—" },
    { key: "reason", header: "Reason", cell: (r) => r.reason ?? "—", secondary: true },
    { key: "refunded", header: "Refunded", cell: (r) => formatDateTime(r.refundedAt), secondary: true },
    { key: "pct", header: "Refund", align: "right", cell: (r) => `${r.refundPct}%` },
  ];

  return (
    <ConsolePage title="Penalties and cancellations" description="Where the fleet is losing rides.">
      {error ? <p className="mb-4 text-note font-bold text-danger">{error}</p> : null}

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-5">
          <Kicker>Penalty events</Kicker>
          <p className="mt-3 text-[1.75rem] font-bold tracking-tight text-fg">
            {penalties?.totalEvents ?? "—"}
          </p>
        </Card>
        <Card className="p-5">
          <Kicker>Drivers affected</Kicker>
          <p className="mt-3 text-[1.75rem] font-bold tracking-tight text-fg">
            {penalties?.totalDrivers ?? "—"}
          </p>
        </Card>
        <Card className="p-5">
          <Kicker>Cancellations</Kicker>
          <p className="mt-3 text-[1.75rem] font-bold tracking-tight text-fg">
            {cancels?.counts.cancellations ?? "—"}
          </p>
        </Card>
      </div>

      <div className="mt-6">
        <Kicker>By chauffeur</Kicker>
        <div className="mt-3">
          <DataTable
            rows={penalties?.drivers ?? null}
            columns={penaltyColumns}
            rowKey={(r) => r.driverId}
            minWidth="38rem"
            empty={{ title: "No penalties", description: "Nobody on the roster has one." }}
          />
        </div>
      </div>

      <div className="mt-6">
        <Kicker>Cancellations</Kicker>
        <div className="mt-3">
          <DataTable
            rows={cancels?.cancellations ?? null}
            columns={cancelColumns}
            rowKey={(r) => r.tripId}
            minWidth="42rem"
            empty={{ title: "No cancellations" }}
          />
        </div>
      </div>

      <div className="mt-4">
        <WarnBox title="What a penalty does">
          A chauffeur who does not answer a ride alert within two minutes has their
          subsequent alerts delayed by two minutes. It is visible to you and to the
          platform admin.
        </WarnBox>
      </div>
    </ConsolePage>
  );
}
