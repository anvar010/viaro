"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { markNotificationReadAction } from "@/lib/actions/account";

export function MarkReadButton({ id }: { id: string }) {
  const [pending, start] = useTransition();
  return (
    <Button
      variant="ghost"
      size="sm"
      className="shrink-0"
      disabled={pending}
      onClick={() => start(() => void markNotificationReadAction(id))}
    >
      {pending ? "Marking…" : "Mark read"}
    </Button>
  );
}
