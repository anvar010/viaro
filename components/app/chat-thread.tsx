import { formatDateTime } from "@/components/app/shell";
import type { ChatMessage } from "@/lib/api/trips";
import { cn } from "@/lib/utils";

/** Renders the transcript from GET /trips/:id/chat/history. */
export function ChatThread({
  messages,
  currentUserId,
}: {
  messages: ChatMessage[];
  currentUserId: string;
}) {
  return (
    <ul className="max-h-[28rem] space-y-4 overflow-y-auto p-6">
      {messages.map((message) => {
        const senderId =
          typeof message.senderId === "object" ? message.senderId._id : message.senderId;
        const mine = senderId === currentUserId;

        return (
          <li key={message._id} className={cn("flex", mine ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[80%] rounded-xl px-4 py-3",
                mine
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground",
              )}
            >
              {!mine ? (
                <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
                  {message.senderRole}
                </p>
              ) : null}
              <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">
                {message.message}
              </p>
              <p className="mt-2 text-[11px] opacity-60">
                {formatDateTime(message.createdAt)}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
