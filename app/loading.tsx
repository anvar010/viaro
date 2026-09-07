export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span
          aria-hidden
          className="h-4 w-4 animate-spin rounded-full border-2 border-border border-t-brand"
        />
        Loading…
      </div>
    </main>
  );
}
