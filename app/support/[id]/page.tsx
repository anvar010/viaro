import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, SectionTitle, formatDateTime } from "@/components/app/shell";
import { ReplyForm } from "@/components/app/support-forms";
import { apiOptional } from "@/lib/api/client";
import type { SupportTicket } from "@/lib/api/types";

export const metadata: Metadata = { title: "Case | Viaro" };

const CATEGORY_LABEL: Record<string, string> = {
  trip_dispute: "Trip dispute",
  penalty_appeal: "Penalty appeal",
  payment: "Payment",
  account: "Account",
  other: "Other",
};

export default async function TicketPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = await apiOptional<SupportTicket>(`/support/tickets/${id}`);

  if (!ticket) notFound();

  const closed = ticket.status === "closed" || ticket.status === "resolved";

  return (
    <PageShell
      title={ticket.subject}
      description={`${CATEGORY_LABEL[ticket.category] ?? ticket.category} · opened ${formatDateTime(ticket.createdAt)}`}
      action={
        <Button asChild variant="outline">
          <Link href="/support">Back to cases</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <Panel className="p-0">
            <ul className="divide-y divide-border">
              {(ticket.messages ?? []).map((message, index) => (
                <li key={index} className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                      {message.senderRole}
                    </p>
                    <p className="ml-auto text-xs text-muted-foreground">
                      {formatDateTime(message.createdAt)}
                    </p>
                  </div>
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                    {message.message}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>

          {closed ? (
            <Panel>
              <p className="text-sm text-muted-foreground">
                This case is {ticket.status}. Open a new one if you need anything else.
              </p>
            </Panel>
          ) : (
            <Panel>
              <SectionTitle>Reply</SectionTitle>
              <div className="mt-5">
                <ReplyForm ticketId={ticket._id} />
              </div>
            </Panel>
          )}
        </div>

        <div className="space-y-6">
          <Panel>
            <SectionTitle>Status</SectionTitle>
            <div className="mt-4">
              <Badge variant="secondary" className="capitalize">
                {ticket.status}
              </Badge>
            </div>
          </Panel>
        </div>
      </div>
    </PageShell>
  );
}
