import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, EmptyState, formatDateTime } from "@/components/app/shell";
import { listTickets } from "@/lib/api/account";
import type { Paginated, SupportTicket } from "@/lib/api/types";
import { AccountNav } from "@/components/app/account-nav";

export const metadata: Metadata = { title: "Support | Viaro" };

function toItems(payload: Paginated<SupportTicket> | SupportTicket[]): SupportTicket[] {
  return Array.isArray(payload) ? payload : (payload.items ?? []);
}

const CATEGORY_LABEL: Record<string, string> = {
  trip_dispute: "Trip dispute",
  penalty_appeal: "Penalty appeal",
  payment: "Payment",
  account: "Account",
  other: "Other",
};

export default async function SupportPage() {
  const tickets = toItems(await listTickets(1, 50));

  return (
    <PageShell
      title="Support"
      description="Disputes, appeals and anything else we can help with."
      action={
        <Button asChild>
          <Link href="/support/new">Open a case</Link>
        </Button>
      }
    >
      <AccountNav />

      {tickets.length === 0 ? (
        <EmptyState
          title="No cases open"
          description="If something goes wrong on a trip, start here and a person will pick it up."
          action={
            <Button asChild>
              <Link href="/support/new">Open a case</Link>
            </Button>
          }
        />
      ) : (
        <Panel className="p-0">
          <ul className="divide-y divide-border">
            {tickets.map((ticket) => (
              <li key={ticket._id}>
                <Link
                  href={`/support/${ticket._id}`}
                  className="flex flex-wrap items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/40"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">
                      {ticket.subject}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {CATEGORY_LABEL[ticket.category] ?? ticket.category} ·{" "}
                      {formatDateTime(ticket.createdAt)} · {ticket.messages?.length ?? 0}{" "}
                      message{(ticket.messages?.length ?? 0) === 1 ? "" : "s"}
                    </p>
                  </div>
                  <Badge variant="secondary" className="capitalize">
                    {ticket.status}
                  </Badge>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      )}
    </PageShell>
  );
}
