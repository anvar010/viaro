import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PageShell, Panel, SectionTitle, EmptyState } from "@/components/app/shell";
import { ChatThread } from "@/components/app/chat-thread";
import { apiOptional, ApiError } from "@/lib/api/client";
import { getBooking } from "@/lib/api/bookings";
import { getCurrentUser } from "@/lib/auth/current-user";
import type { ChatMessage } from "@/lib/api/trips";
import type { Booking, Paginated, Receipt, Trip } from "@/lib/api/types";

export const metadata: Metadata = { title: "Chat | Viaro" };

function toMessages(payload: ChatMessage[] | Paginated<ChatMessage> | null): ChatMessage[] {
  if (!payload) return [];
  return Array.isArray(payload) ? payload : (payload.items ?? []);
}

/**
 * Customer to chauffeur chat.
 *
 * History comes from `GET /trips/:id/chat/history`, which is fully implemented.
 * *Sending* is the part that needs the `/chat/:tripId` socket namespace — there is no
 * REST endpoint to post a message — so the composer explains that rather than being
 * hidden. The thread, the polling and the layout are all real.
 */
export default async function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getCurrentUser();

  let booking: Booking | null = null;
  try {
    booking = await getBooking(id);
  } catch (err) {
    if (!(err instanceof ApiError) || !(err.isNotFound || err.isForbidden)) throw err;
  }

  const receipt = booking
    ? await apiOptional<Receipt>(`/users/me/rides/${booking._id}/receipt`)
    : null;
  const tripId = receipt?.tripId ?? id;

  const [trip, history] = await Promise.all([
    apiOptional<Trip>(`/trips/${tripId}`),
    apiOptional<ChatMessage[] | Paginated<ChatMessage>>(`/trips/${tripId}/chat/history`),
  ]);

  if (!booking && !trip) notFound();

  const messages = toMessages(history);
  const driverName = trip?.driver?.name ?? null;

  return (
    <PageShell
      title={driverName ? `Chat with ${driverName}` : "Chat"}
      description="Messages go through Viaro, so neither of you sees the other's number."
      action={
        <Button asChild variant="outline">
          <Link href={`/trips/${id}`}>Trip details</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <Panel className="p-0">
          {messages.length === 0 ? (
            <div className="p-6">
              <EmptyState
                title="No messages yet"
                description={
                  trip
                    ? "Anything you send appears here, and in your chauffeur's app."
                    : "Chat opens once a chauffeur accepts your booking."
                }
              />
            </div>
          ) : (
            <ChatThread messages={messages} currentUserId={user?._id ?? ""} />
          )}

          <div className="border-t border-border p-6">
            <ChatComposer disabled={!trip} />
          </div>
        </Panel>

        <Panel>
          <SectionTitle>How chat works</SectionTitle>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>Your number stays private — the chauffeur never sees it.</li>
            <li>The thread stays with the trip, so you can refer back to it later.</li>
            <li>Dispatch can review a conversation if you raise a dispute.</li>
          </ul>
        </Panel>
      </div>
    </PageShell>
  );
}

/**
 * Sending needs the socket namespace; there is no REST route that accepts a message.
 * The control is present and disabled with the reason, rather than absent.
 */
function ChatComposer({ disabled }: { disabled: boolean }) {
  const realtime = process.env.NEXT_PUBLIC_REALTIME_ENABLED === "true";

  return (
    <div>
      <div className="flex gap-3">
        <input
          type="text"
          disabled
          placeholder={
            disabled ? "Chat opens when a chauffeur accepts" : "Type a message…"
          }
          className="flex h-10 flex-1 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground disabled:opacity-60"
        />
        <Button disabled>Send</Button>
      </div>
      {!realtime ? (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          Sending needs the realtime connection. The backend exposes a{" "}
          <code className="text-foreground">/chat/:tripId</code> socket namespace and no
          REST equivalent — set{" "}
          <code className="text-foreground">NEXT_PUBLIC_REALTIME_ENABLED=true</code> once
          a socket client is wired and this composer goes live.
        </p>
      ) : null}
    </div>
  );
}
