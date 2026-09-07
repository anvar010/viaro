import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell, Panel } from "@/components/app/shell";
import { NewTicketForm } from "@/components/app/support-forms";

export const metadata: Metadata = { title: "Open a case | Viaro" };

export default function NewTicketPage() {
  return (
    <PageShell
      title="Open a case"
      description="Overcharge, no-show, lost item or anything else. A person reads every one."
      action={
        <Button asChild variant="outline">
          <Link href="/support">Back to cases</Link>
        </Button>
      }
    >
      <Panel className="max-w-2xl">
        <NewTicketForm />
      </Panel>
    </PageShell>
  );
}
