import { Panel } from "@/components/app/shell";

/** Skeleton that matches the page shell so the layout does not jump on load. */
export default function Loading() {
  return (
    <main className="min-h-[70vh] bg-black">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-28 sm:pb-16 sm:pt-32">
        <div className="h-9 w-56 animate-pulse rounded-md bg-secondary" />
        <div className="mt-3 h-4 w-80 animate-pulse rounded bg-secondary/60" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <Panel key={i}>
              <div className="h-4 w-24 animate-pulse rounded bg-secondary" />
              <div className="mt-5 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-secondary/60" />
                <div className="h-4 w-4/5 animate-pulse rounded bg-secondary/60" />
                <div className="h-4 w-3/5 animate-pulse rounded bg-secondary/60" />
              </div>
            </Panel>
          ))}
        </div>
      </div>
    </main>
  );
}
