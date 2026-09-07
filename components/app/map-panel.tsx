import { cn } from "@/lib/utils";

/**
 * The map surface for live tracking.
 *
 * No map provider is wired yet, so this draws a labelled panel with the real
 * coordinates it *would* plot. The moment NEXT_PUBLIC_MAP_PROVIDER and a key are set,
 * swap the placeholder branch for the provider's component — everything around it
 * (the page, the polling, the driver card) already works.
 */
export function MapPanel({
  lat,
  lng,
  updatedAt,
  label,
  className,
}: {
  lat?: number;
  lng?: number;
  updatedAt?: string;
  label?: string;
  className?: string;
}) {
  const provider = process.env.NEXT_PUBLIC_MAP_PROVIDER;
  const hasPosition = typeof lat === "number" && typeof lng === "number";

  return (
    <div
      className={cn(
        "relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-xl border border-border bg-card/40",
        className,
      )}
    >
      {/* A faint grid so the panel reads as a map surface rather than an empty box. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 px-6 text-center">
        {hasPosition ? (
          <>
            <span
              aria-hidden
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/20"
            >
              <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
            </span>
            <p className="mt-4 text-sm font-medium text-foreground">
              {label ?? "Your chauffeur"}
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              {lat.toFixed(5)}, {lng.toFixed(5)}
            </p>
            {updatedAt ? (
              <p className="mt-1 text-xs text-muted-foreground">
                updated{" "}
                {new Date(updatedAt).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
            ) : null}
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            No position reported yet. The map updates once the chauffeur is moving.
          </p>
        )}

        {!provider ? (
          <p className="mx-auto mt-5 max-w-xs text-xs leading-relaxed text-muted-foreground">
            Map rendering is not connected. Set{" "}
            <code className="text-foreground">NEXT_PUBLIC_MAP_PROVIDER</code> and{" "}
            <code className="text-foreground">NEXT_PUBLIC_MAP_API_KEY</code> to replace
            this panel with a live map.
          </p>
        ) : null}
      </div>
    </div>
  );
}
