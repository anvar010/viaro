import { Card, Kicker } from "@/components/ui/Surfaces";

/**
 * Placeholder for the six portal screens still to be built.
 *
 * The rail links to all of them, so a 404 would make the shell look broken. Each says
 * which Figma frame it comes from and which endpoints it will run on, so the next
 * session can start without re-deriving any of it.
 */
export function NotBuiltYet({
  title,
  node,
  endpoints,
  note,
}: {
  title: string;
  node: string;
  endpoints: string[];
  note?: string;
}) {
  return (
    <div className="mx-auto max-w-[1050px]">
      <h1 className="text-[1.5rem] font-bold tracking-tight text-fg">{title}</h1>

      <Card className="mt-5 p-6">
        <Kicker>Not built yet</Kicker>
        <p className="mt-3 text-note leading-relaxed text-fg-muted">
          The portal shell, tokens and API client are in place; this screen is next.
          Figma frame <span className="font-bold text-fg-body">{node}</span> (palette B).
        </p>

        <p className="mt-5 text-micro font-bold text-fg-muted">Runs on</p>
        <ul className="mt-2 space-y-1.5">
          {endpoints.map((endpoint) => (
            <li key={endpoint} className="text-note text-fg-body">
              <code>{endpoint}</code>
            </li>
          ))}
        </ul>

        {note && (
          <p className="mt-5 text-note leading-relaxed text-fg-muted">{note}</p>
        )}
      </Card>
    </div>
  );
}
