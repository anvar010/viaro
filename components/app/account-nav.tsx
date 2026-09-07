"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Sub-navigation for the signed-in area.
 *
 * These screens already existed but only as scattered links, so "My account" was one
 * long page of unrelated panels and everything else was reachable only if you knew the
 * URL. Naming them as one section makes the shape of the account obvious: who you are,
 * your money, your journeys, and the things that support them.
 *
 * Each tab is a real page rather than client-side state, so a passenger can bookmark
 * their wallet and the back button behaves.
 */
const TABS = [
  { href: "/account", label: "Profile" },
  { href: "/trips", label: "Trips" },
  { href: "/wallet", label: "Wallet" },
  { href: "/subscription", label: "Plan" },
  { href: "/favorites", label: "Chauffeurs" },
  { href: "/support", label: "Support" },
];

export function AccountNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Account sections"
      className="-mx-1 mb-8 overflow-x-auto border-b border-border"
    >
      <ul className="flex min-w-max gap-1 px-1">
        {TABS.map((tab) => {
          const active =
            tab.href === "/account"
              ? pathname === "/account"
              : pathname === tab.href || pathname.startsWith(`${tab.href}/`);

          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`relative block px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {/* The underline is the active marker, so the tab row reads as one
                    control rather than six independent links. */}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-brand"
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
