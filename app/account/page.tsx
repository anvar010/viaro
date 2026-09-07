import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, SectionTitle, money } from "@/components/app/shell";
import {
  ProfileForm,
  SignOutButton,
  DeleteAccountButton,
  RemoveCardButton,
  ChangePasswordButton,
} from "@/components/app/account-forms";
import { AccountNav } from "@/components/app/account-nav";
import { getCurrentUser } from "@/lib/auth/current-user";
import { apiOptional } from "@/lib/api/client";
import type { PaymentMethod, Subscription } from "@/lib/api/types";
import { redirect } from "next/navigation";
import { LiveRefresh } from "@/components/app/live-refresh";

export const metadata: Metadata = { title: "My account | Viaro" };

/**
 * Server Component: everything is fetched on the server with the httpOnly token, so
 * no user data passes through client JavaScript except what is rendered.
 *
 * Optional panels use apiOptional so one 403 (a driver hitting a customer-only route)
 * degrades that card rather than the page.
 */
export default async function AccountPage() {
  const user = await getCurrentUser();
  // Not "render nothing": a session that expired between middleware and here
  // would otherwise show a header and footer with a blank page between them.
  if (!user) redirect("/login?next=/account");

  const isCustomer = user.role === "customer";

  // Journeys, favourites and the plan each have their own tab now, so this page only
  // fetches what it actually renders.
  const [subscription, methods] = await Promise.all([
    isCustomer ? apiOptional<Subscription | null>("/subscriptions/me") : null,
    isCustomer ? apiOptional<PaymentMethod[]>("/payments/methods") : null,
  ]);

  const subActive = subscription?.status === "active";

  return (
    <PageShell
      title="My account"
      description="Your details, security and payment methods."
      action={<SignOutButton />}
    >
      <AccountNav />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <Panel>
            <SectionTitle>Your details</SectionTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Your name and phone number. Chauffeurs see these when they are driving you.
            </p>
            <div className="mt-5">
              <ProfileForm user={user} />
            </div>
          </Panel>

          <Panel>
            <SectionTitle>Sign-in and security</SectionTitle>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Email</dt>
                <dd className="text-foreground">{user.email}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="flex items-center gap-2 text-foreground">
                  {user.phone || "—"}
                  {user.phoneVerified ? (
                    <Badge variant="secondary">Verified</Badge>
                  ) : (
                    <Link href="/verify-phone" className="text-brand hover:underline">
                      Verify
                    </Link>
                  )}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Password</dt>
                <dd className="text-foreground">••••••••</dd>
              </div>
            </dl>

            <div className="mt-5 border-t border-border pt-5">
              <ChangePasswordButton email={user.email} />
            </div>
          </Panel>

          {isCustomer ? (
            <Panel>
              <div className="flex items-center gap-3">
                <SectionTitle>Saved cards</SectionTitle>
                <Link href="/wallet" className="ml-auto text-sm text-brand hover:underline">
                  Wallet
                </Link>
              </div>

              {methods && methods.length > 0 ? (
                <ul className="mt-5 divide-y divide-border">
                  {methods.map((method) => (
                    <li key={method._id} className="flex items-center gap-4 py-3">
                      <div>
                        <p className="text-sm font-medium capitalize text-foreground">
                          {method.brand ?? "Card"} ···· {method.last4 ?? "----"}
                        </p>
                        {method.expMonth && method.expYear ? (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            Expires {method.expMonth}/{method.expYear}
                          </p>
                        ) : null}
                      </div>
                      <RemoveCardButton id={method._id} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  No cards saved. Adding one needs a payment provider configured — the API
                  stores a gateway token, never the card number.
                </p>
              )}
            </Panel>
          ) : null}
        </div>

        <div className="space-y-6">
          <Panel>
            <SectionTitle>Account</SectionTitle>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Role</dt>
                <dd className="capitalize text-foreground">{user.role}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="capitalize text-foreground">
                  {user.status.replace(/_/g, " ")}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Member since</dt>
                <dd className="text-foreground">
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </dd>
              </div>
            </dl>
          </Panel>

          {isCustomer ? (
            <Panel>
              <SectionTitle>Monthly plan</SectionTitle>
              {subActive ? (
                <>
                  <p className="mt-4 text-sm text-foreground">
                    Active · {money(subscription?.price)} a month
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Peak surcharges are waived while this is running.
                  </p>
                </>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  You are on pay-per-ride. A plan waives the peak-hour surcharge.
                </p>
              )}
              <Button asChild variant="outline" className="mt-4">
                <Link href="/subscription">{subActive ? "Manage plan" : "See the plan"}</Link>
              </Button>
            </Panel>
          ) : null}

          <Panel>
            <SectionTitle>Danger zone</SectionTitle>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Deleting your account removes your personal details. Trips and payment
              records are kept, because they are financial history.
            </p>
            <div className="mt-4">
              <DeleteAccountButton />
            </div>
          </Panel>
        </div>
      </div>
          {/* Wallet credit from a refund, and trip counts, without a reload. */}
      <LiveRefresh topics={["booking", "trip", "wallet"]} />
</PageShell>
  );
}
