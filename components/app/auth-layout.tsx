import Link from "next/link";
import type { ReactNode } from "react";
import { Suspense } from "react";

/** Centred card used by every auth screen, on the site's black/brand palette. */
export function AuthLayout({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="mx-auto block text-center font-sans text-2xl font-bold tracking-[0.2em] text-foreground"
        >
          VIARO
        </Link>

        <div className="mt-8 rounded-xl border border-border bg-card/60 p-8 backdrop-blur-sm">
          <h1 className="font-sans text-2xl font-bold text-foreground">{title}</h1>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}

          <div className="mt-8">
            {/* useSearchParams in the forms needs a boundary to prerender around. */}
            <Suspense fallback={<div className="h-64" />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
