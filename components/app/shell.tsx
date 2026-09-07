import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared furniture for the signed-in app screens, built on the same tokens the
 * marketing pages use (black background, brand blue, gold accent) so the two halves
 * of the site read as one product.
 */

export function PageShell({
  title,
  description,
  action,
  children,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className="min-h-[70vh] bg-black">
      {/*
       * The navbar is `fixed` and 5rem tall, so it sits over the page rather than
       * above it. Without clearing that height the page title renders underneath it —
       * the marketing hero solves the same problem with pt-32.
       */}
      <div className={cn("mx-auto max-w-6xl px-6 pb-12 pt-28 sm:pb-16 sm:pt-32", className)}>
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          {action ? <div className="sm:ml-auto sm:shrink-0">{action}</div> : null}
        </header>

        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}

export function Panel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </h2>
  );
}

/** Consistent empty state so every list degrades the same way. */
export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card/30 px-6 py-14 text-center">
      <p className="font-sans text-lg font-semibold text-foreground">{title}</p>
      {description ? (
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function ErrorNote({ children }: { children: ReactNode }) {
  return (
    <p
      role="alert"
      className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground"
    >
      {children}
    </p>
  );
}

export function Field({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {hint && !error ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}

const MONEY = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
export const money = (amount: number | undefined | null) =>
  typeof amount === "number" ? MONEY.format(amount) : "—";

export function formatDateTime(value?: string | null) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
