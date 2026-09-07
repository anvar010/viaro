"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function SectionError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] bg-black">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-sans text-2xl font-bold text-foreground">
          We could not load this page
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {/* Usually the API being unreachable, or a session that expired mid-request. */}
          {error.message || "The service did not respond."}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button asChild variant="outline">
            <a href="/login">Sign in again</a>
          </Button>
        </div>
      </div>
    </main>
  );
}
