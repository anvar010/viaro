import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, SectionTitle, EmptyState, money } from "@/components/app/shell";
import { getCurrentUser } from "@/lib/auth/current-user";
import { getMyWallet } from "@/lib/api/wallet";
import type { TransactionType } from "@/lib/api/types";
import { AccountNav } from "@/components/app/account-nav";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Wallet | Viaro" };

const MOVEMENT_LABEL: Record<TransactionType, string> = {
  credit: "Credit",
  debit: "Trip charge",
  refund: "Refund",
  withdrawal: "Bank withdrawal",
};

const incoming = (type: TransactionType) => type === "credit" || type === "refund";

export default async function WalletPage() {
  const user = await getCurrentUser();
  // Not "render nothing": a session that expired between middleware and here
  // would otherwise show a header and footer with a blank page between them.
  if (!user) redirect("/login?next=/wallet");

  const wallet = await getMyWallet(1, 50);
  const rows = wallet.transactions?.items ?? [];

  return (
    <PageShell title="Wallet" description="Refunds, ride credit and payouts.">
      <AccountNav />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Panel className="p-0">
          {rows.length === 0 ? (
            <div className="p-6">
              <EmptyState
                title="No movements yet"
                description="Refunds and trip charges will appear here."
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] text-left text-sm">
                <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-6 py-4 font-medium">Movement</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 text-right font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((row) => (
                    <tr key={row._id}>
                      <td className="px-6 py-4">
                        <span className="text-foreground">{MOVEMENT_LABEL[row.type]}</span>
                        {row.reason ? (
                          <span className="ml-2 text-muted-foreground">{row.reason}</span>
                        ) : null}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {new Date(row.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                      <td
                        className={`px-6 py-4 text-right font-medium ${
                          incoming(row.type) ? "text-brand" : "text-foreground"
                        }`}
                      >
                        {incoming(row.type) ? "+" : "−"} {money(Math.abs(row.amount))}
                        {row.feeApplied > 0 ? (
                          <span className="ml-2 text-xs font-normal text-muted-foreground">
                            fee {money(row.feeApplied)}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Panel>

        <div className="space-y-6">
          <Panel className="text-center">
            <SectionTitle>Available balance</SectionTitle>
            <p className="mt-4 font-sans text-4xl font-bold text-foreground">
              {money(wallet.balance)}
            </p>

            <Button asChild className="mt-6 w-full">
              <Link href="/book">Spend on a ride</Link>
            </Button>
            {/* POST /wallet/withdraw is driver-only, so no withdraw control here. */}
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Bank withdrawal is not open to passenger accounts.
            </p>
          </Panel>

          <Panel>
            <SectionTitle>How credit works</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cancel outside the window and the refund arrives here. Spending credit on a
              ride costs nothing; withdrawing to a bank costs 10%.
            </p>
          </Panel>
        </div>
      </div>
    </PageShell>
  );
}
