"use client";

import { useCallback, useEffect, useState } from "react";
import { Badge, Card, Kicker } from "@/components/ui/Surfaces";
import { Button } from "@/components/ui/Button";
import { listTickets, createTicket, replyToTicket, type Ticket } from "@/lib/api/driver";
import { ApiError } from "@/lib/api/client";

/** Figma desktop "20 · Support and appeals", palette B (frame 57:5747, 1280×786). */

/** A chauffeur appeals a penalty here, so that category leads. */
const CATEGORIES = [
  { value: "penalty_appeal", label: "Appeal a penalty" },
  { value: "trip_dispute", label: "Trip dispute" },
  { value: "payment", label: "Payment or payout" },
  { value: "account", label: "Account" },
  { value: "other", label: "Something else" },
];

const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.value, c.label]));

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [open, setOpen] = useState<Ticket | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * `isCurrent` guards each setState against a stale response.
   *
   * These effects had no cancellation flag, so two loads in flight at once — a quick
   * navigation, or a live update firing mid-fetch — could let the slower, older response
   * land last and overwrite fresher data with nothing to stop it. The dashboard's own
   * earnings-series effect in this same app already guards exactly this way.
   */
  const load = useCallback(async (isCurrent: () => boolean = () => true) => {
    try {
      const page = await listTickets();
      if (!isCurrent()) return;
      setTickets(Array.isArray(page) ? page : (page.items ?? []));
      setError(null);
    } catch (err) {
      if (!isCurrent()) return;
      setError(err instanceof ApiError ? err.message : "Could not load your cases");
      setTickets([]);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    void load(() => !cancelled);
    return () => {
      cancelled = true;
    };
  }, [load]);

  return (
    <div className="mx-auto max-w-[1050px]">
      <h1 className="text-[1.5rem] font-bold tracking-tight text-fg">
        Support and appeals
      </h1>
      <p className="mt-2 text-note text-fg-muted">
        Penalties, payouts and anything else. A person reads every case.
      </p>

      {error ? <p className="mt-4 text-note font-bold text-danger">{error}</p> : null}

      <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
        <Card className="p-0">
          <div className="px-6 pt-6">
            <Kicker>Your cases</Kicker>
          </div>

          {tickets === null ? (
            <p className="p-6 text-note text-fg-muted">Loading…</p>
          ) : tickets.length === 0 ? (
            <p className="p-6 text-note text-fg-muted">
              No cases open. If a penalty looks wrong, appeal it here.
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-border-subtle">
              {tickets.map((ticket) => (
                <li key={ticket._id}>
                  <button
                    type="button"
                    onClick={() => setOpen(open?._id === ticket._id ? null : ticket)}
                    className="flex w-full flex-wrap items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-surface"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-meta font-bold text-fg">
                        {ticket.subject}
                      </p>
                      <p className="mt-0.5 text-note text-fg-muted">
                        {CATEGORY_LABEL[ticket.category] ?? ticket.category} ·{" "}
                        {ticket.messages?.length ?? 0} message
                        {(ticket.messages?.length ?? 0) === 1 ? "" : "s"}
                      </p>
                    </div>
                    <Badge>{ticket.status}</Badge>
                  </button>

                  {open?._id === ticket._id ? (
                    <div className="border-t border-border-subtle bg-surface px-6 py-5">
                      <ul className="space-y-4">
                        {(ticket.messages ?? []).map((message, index) => (
                          <li key={index}>
                            <p className="text-label font-bold uppercase text-accent">
                              {message.senderRole}
                            </p>
                            <p className="mt-1 whitespace-pre-wrap text-note leading-relaxed text-fg">
                              {message.message}
                            </p>
                          </li>
                        ))}
                      </ul>

                      {ticket.status !== "closed" && ticket.status !== "resolved" ? (
                        <div className="mt-5">
                          <ReplyForm ticketId={ticket._id} onDone={load} />
                        </div>
                      ) : (
                        <p className="mt-5 text-note text-fg-muted">
                          This case is {ticket.status}.
                        </p>
                      )}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card className="p-5">
          <Kicker>Open a case</Kicker>
          <div className="mt-4">
            <NewTicketForm onDone={load} />
          </div>
        </Card>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-field border border-border bg-surface-raised px-3 py-2 text-note text-fg outline-none";

function NewTicketForm({ onDone }: { onDone: () => void }) {
  const [pending, setPending] = useState(false);
  const [state, setState] = useState<{ error?: string; done?: boolean }>({});

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setPending(true);
        try {
          await createTicket({
            category: String(form.get("category")),
            subject: String(form.get("subject")),
            message: String(form.get("message")),
          });
          setState({ done: true });
          (event.target as HTMLFormElement).reset();
          onDone();
        } catch (err) {
          setState({ error: err instanceof ApiError ? err.message : "Could not open the case" });
        } finally {
          setPending(false);
        }
      }}
      className="space-y-4"
    >
      {state.error ? <p className="text-label text-danger">{state.error}</p> : null}

      <div>
        <label htmlFor="category" className="text-label font-bold text-fg-muted">
          Category
        </label>
        <select id="category" name="category" defaultValue="penalty_appeal" className={`${inputClass} mt-1`}>
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="text-label font-bold text-fg-muted">
          Subject
        </label>
        <input id="subject" name="subject" required minLength={3} maxLength={200} className={`${inputClass} mt-1`} />
      </div>

      <div>
        <label htmlFor="message" className="text-label font-bold text-fg-muted">
          What happened?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={3}
          maxLength={4000}
          className={`${inputClass} mt-1`}
        />
      </div>

      <Button type="submit" variant="accent" disabled={pending}>
        {pending ? "Opening…" : "Open case"}
      </Button>
      {state.done ? <p className="text-note font-bold text-success">Case opened.</p> : null}
    </form>
  );
}

function ReplyForm({ ticketId, onDone }: { ticketId: string; onDone: () => void }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        setPending(true);
        try {
          await replyToTicket(ticketId, String(form.get("message")));
          (event.target as HTMLFormElement).reset();
          onDone();
          setError(null);
        } catch (err) {
          setError(err instanceof ApiError ? err.message : "Could not send");
        } finally {
          setPending(false);
        }
      }}
      className="space-y-3"
    >
      {error ? <p className="text-label text-danger">{error}</p> : null}
      <textarea
        name="message"
        rows={3}
        required
        maxLength={4000}
        placeholder="Add a reply…"
        className={inputClass}
      />
      <Button type="submit" variant="secondary" block={false} disabled={pending}>
        {pending ? "Sending…" : "Send reply"}
      </Button>
    </form>
  );
}
