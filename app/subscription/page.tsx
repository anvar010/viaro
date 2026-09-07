import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { PageShell, Panel, SectionTitle, money } from "@/components/app/shell";
import {
  SubscribeButton,
  CancelSubscriptionButton,
} from "@/components/app/subscription-buttons";
import { apiOptional } from "@/lib/api/client";
import { MONTHLY_PLAN } from "@/lib/constants";
import type { Subscription } from "@/lib/api/types";
import { AccountNav } from "@/components/app/account-nav";

export const metadata: Metadata = { title: "Monthly plan | Viaro" };

const PERKS = [
  "No peak-hour surcharge, at any hour",
  "Priority dispatch when cars are scarce",
  "The same chauffeur when they are available",
];

export default async function SubscriptionPage() {
  /** GET /subscriptions/me 404s when there has never been one, so this may be null. */
  const subscription = await apiOptional<Subscription | null>("/subscriptions/me");
  const status = subscription?.status;
  const active = status === "active";

  return (
    <PageShell
      title="Monthly plan"
      description="One price, no peak-hour surcharge."
    >
      <AccountNav />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Panel>
          <div className="flex flex-wrap items-center gap-3">
            <SectionTitle>Your plan</SectionTitle>
            {status ? (
              <Badge
                variant={active ? "default" : "secondary"}
                className="ml-auto capitalize"
              >
                {status}
              </Badge>
            ) : (
              <Badge variant="secondary" className="ml-auto">
                Pay per ride
              </Badge>
            )}
          </div>

          <p className="mt-6 font-sans text-3xl font-bold text-foreground">
            {money(MONTHLY_PLAN.price)}
            <span className="ml-2 text-base font-normal text-muted-foreground">
              per month
            </span>
          </p>

          <ul className="mt-6 space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex gap-3 text-sm text-foreground">
                <span aria-hidden className="text-brand">
                  ✓
                </span>
                {perk}
              </li>
            ))}
          </ul>

          {active && subscription ? (
            <dl className="mt-8 space-y-3 border-t border-border pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Started</dt>
                <dd className="text-foreground">
                  {new Date(subscription.startDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Renews</dt>
                <dd className="text-foreground">
                  {new Date(subscription.renewalDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </dd>
              </div>
            </dl>
          ) : null}

          <div className="mt-8">
            {active ? <CancelSubscriptionButton /> : <SubscribeButton />}
          </div>
        </Panel>

        <div className="space-y-6">
          {status === "expired" ? (
            <Panel>
              <SectionTitle>Your plan lapsed</SectionTitle>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Your previous subscription expired on{" "}
                {subscription
                  ? new Date(subscription.renewalDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "its renewal date"}
                , so peak-hour pricing applies again. Resubscribing takes effect
                immediately.
              </p>
            </Panel>
          ) : null}

          <Panel>
            <SectionTitle>What the surcharge costs</SectionTitle>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Peak pricing multiplies the base fare for non-subscribers. On a $129 sedan
              at peak that is $23.22 extra before tax — more than half the monthly plan
              in a single ride.
            </p>
          </Panel>
        </div>
      </div>
    </PageShell>
  );
}
