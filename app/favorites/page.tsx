import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, EmptyState, SectionTitle } from "@/components/app/shell";
import { RemoveFavoriteButton } from "@/components/app/trip-forms";
import { AddFavoriteForm } from "@/components/app/favorite-forms";
import { apiOptional } from "@/lib/api/client";
import type { Driver } from "@/lib/api/types";
import { AccountNav } from "@/components/app/account-nav";

export const metadata: Metadata = { title: "Favourite chauffeurs | Viaro" };

export default async function FavoritesPage() {
  const favorites = (await apiOptional<Driver[]>("/users/me/favorites")) ?? [];

  return (
    <PageShell
      title="Favourite chauffeurs"
      description="Dispatch offers your favourites a booking first, when they are free."
      action={
        <Button asChild variant="outline">
          <Link href="/account">Account</Link>
        </Button>
      }
    >
      <AccountNav />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Panel className="p-0">
          {favorites.length === 0 ? (
            <div className="p-6">
              <EmptyState
                title="No favourites yet"
                description="After a trip you can save the chauffeur here, and ask for them next time."
              />
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {favorites.map((driver) => (
                <li key={driver._id} className="flex flex-wrap items-center gap-4 px-6 py-5">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {typeof driver.userId === "object" ? driver.userId.name : "Chauffeur"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {driver.vehicleClass}
                      {typeof driver.rating === "number"
                        ? ` · ${driver.rating.toFixed(2)} ★`
                        : ""}
                    </p>
                  </div>
                  <Badge variant="secondary" className="capitalize">
                    {driver.status}
                  </Badge>
                  <RemoveFavoriteButton driverId={driver._id} />
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel>
          <SectionTitle>Add a chauffeur</SectionTitle>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The API adds a favourite by driver id. After a trip, the id is on the trip
            record — paste it here to save them.
          </p>
          <div className="mt-5">
            <AddFavoriteForm />
          </div>
        </Panel>
      </div>
    </PageShell>
  );
}
