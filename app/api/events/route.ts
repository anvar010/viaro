import { API_URL } from "@/lib/api/client";
import { readTokens } from "@/lib/auth/session";

/**
 * Proxies the API's change stream to the browser.
 *
 * This site keeps its tokens in httpOnly cookies, so nothing in the page can read one —
 * that is the whole point, and it is why the browser cannot open the upstream stream
 * itself. This handler reads the cookie server-side, opens the stream with a proper
 * Authorization header, and pipes it back on the same origin, where an EventSource can
 * consume it with no token ever reaching JavaScript.
 *
 * The body is passed through untouched. Nothing is parsed here because the payload is
 * only ever "topic X changed" — no domain data crosses this boundary, so there is
 * nothing to filter or redact.
 */
export const dynamic = "force-dynamic";
/** Node, not Edge: `readTokens` uses next/headers cookies and the upstream is internal. */
export const runtime = "nodejs";

export async function GET(request: Request): Promise<Response> {
  const { accessToken } = await readTokens();

  if (!accessToken) {
    return new Response("Not signed in", { status: 401 });
  }

  let upstream: Response;
  try {
    upstream = await fetch(`${API_URL}/events/stream`, {
      headers: { Authorization: `Bearer ${accessToken}`, Accept: "text/event-stream" },
      // Without this the fetch is buffered and nothing is forwarded until it ends —
      // which for a stream is never.
      cache: "no-store",
      // Ties the upstream connection's life to the browser's: navigating away closes
      // both instead of leaking a held-open request per page view.
      signal: request.signal,
    });
  } catch {
    return new Response("Upstream unavailable", { status: 503 });
  }

  if (!upstream.ok || !upstream.body) {
    return new Response("Upstream refused", { status: upstream.status || 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
