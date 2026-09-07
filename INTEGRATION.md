# Backend integration

How this frontend talks to `viaro-backend`, and the decisions behind it.

## Scope: this is the PASSENGER app

Viaro is four products against one API. This project is **only** the customer-facing
site. Chauffeurs, the platform admin and fleet operators each get their own
application:

| Product | Project | Roles |
|---|---|---|
| **Passenger site** (this one) | `viaro-frontend` | `customer` |
| Chauffeur portal | `../viaro-driver` | `driver` |
| Operations console | *not built yet* | `admin`, `company` |

Nothing role-specific for driver/admin/company belongs here. A non-passenger *can*
hold a valid session on this site — the API is shared — so `/portal` catches them and
links to their own app rather than showing a customer screen where every request would
403. Middleware sends any signed-in non-customer there automatically.

```bash
npm run dev     # http://localhost:3000
npm run build
```

Needs the backend on **`http://localhost:5001`** (not 5000 — another app on this machine
owns that port) and a seeded database: `cd ../viaro-backend && npm run seed`.
Credentials are in [TEST_USERS.md](./TEST_USERS.md).

---

## Auth: a BFF, not a token in the browser

The backend is a stateless Bearer API — it issues a 15-minute access token and a 30-day
refresh token, and expects the refresh token in the **body** of `POST /auth/refresh`.
None of that can be handed to client JavaScript safely, so:

- **Both tokens live in httpOnly cookies** (`viaro_access`, `viaro_refresh`). Client code
  cannot read them; only Server Components, Server Actions and Route Handlers can.
- **The browser never calls the backend.** Every request goes through the server, which
  is why `API_URL` is *not* `NEXT_PUBLIC_`.
- **A third cookie, `viaro_role`, is readable.** It exists so middleware can decide which
  page to render without a round trip. It is **not** a trust boundary: forging it changes
  which page you see, never which data comes back, because the backend authorises every
  request against the signed access token.

### Where refresh happens, and why

In **middleware**, not the API client. Middleware runs before render and owns the
response, so it can write the rotated cookies. A Server Component cannot — calling
`cookies().set()` during render throws — so a refresh attempted there would be silently
lost. If the refresh token is dead, middleware clears all three cookies so the user gets
a clean signed-out state instead of a half-session.

### Route protection

`middleware.ts` holds one table of prefix → allowed roles, and:

- signed out + protected route → `/login?next=…` (the destination survives the round trip)
- signed in but **not a customer** → `/portal`, the hand-off to their own app
- signed in + on an auth page → `/account` for customers, `/portal` for everyone else

---

## Server / client split

| Layer | Runs where | Why |
|---|---|---|
| Pages | Server Components | Data is fetched with the httpOnly token; nothing leaks to the bundle |
| Mutations | Server Actions | Forms post directly; no client fetch, no token in JS |
| Interactive bits | Client Components | Only where `useActionState`/`useState` is genuinely needed |

`lib/api/client.ts` imports `server-only`, so importing it into a Client Component is a
build error rather than a runtime leak.

`apiOptional()` returns `null` on 401/403/404 instead of throwing — used for panels that
should degrade (a customer with no subscription record yet) rather than take a page down.

---

## Response shapes that are **not** what you would guess

Traced against the running API. Every one of these was wrong on the first pass and was
caught by an end-to-end audit, not by types:

**Used by this app:**

| Endpoint | Returns | Not |
|---|---|---|
| `POST /bookings` | `{ booking, fareBreakdown }` | a bare `Booking` |
| `GET /subscriptions/me` | **404** when never subscribed | `null` |

`GET /bookings/:id`, `PATCH` and `DELETE /bookings/:id` all return the document
directly — only `create` has the extra envelope.

**Found while the driver/admin screens briefly lived here.** They belong to the other
two apps now, but the findings cost real debugging, so they are recorded rather than
rediscovered:

| Endpoint | Returns | Not |
|---|---|---|
| `GET /drivers/me` | `{ driver, stats }` | a bare `Driver` — this one crashed a page |
| `PATCH /drivers/me/status` | the `Driver` document | *(no envelope, unlike the getter)* |
| `GET /admin/dashboard/bookings` | `Paginated<Booking>` | `{ total, byStatus }` |
| `GET /admin/dashboard/users` | `Paginated<User>` | `{ total, byRole }` |
| `GET /admin/revenue/subscriptions` | `{ months, totalActive, totalRevenue }` | `{ total, count }` |
| `GET /admin/drivers/penalties` | `{ drivers, totalDrivers, totalEvents }` | an array |
| `GET /dispatch/pool` | `Paginated<…>` | an array |

---

## Things the API constrains that the UI has to respect

- **Quoting requires a signed-in customer.** `GET /pricing/fare-estimate` is
  `roleGuard('customer')`, so `/book` is behind the auth gate rather than public.
- **Customers never see a chauffeur's number** — it arrives masked as "Contact via app".
- **Customers cannot withdraw.** `POST /wallet/withdraw` is driver-only, so the wallet
  page offers "spend on a ride" and says so plainly.
- **Only an admin can move a support ticket's status** — so this site shows a ticket's
  status but never offers the control; triage belongs in the operations console.
- **Airport bookings require `flightDetails`**, and both addresses need ≥3 characters —
  both enforced in the form so the user sees a field error, not a server error.
- **The card vault is under `/payments`, not `/wallet`.**

## Two numbers the product owns, not the API

- **Tax (8.9%)** — `calculateFare` returns `baseFare × multiplier` and stops; there is no
  tax field anywhere in the API. The booking screen adds the line from `TAX_RATE` in
  `lib/constants.ts`.
- **The monthly plan price ($49.99)** — the subscription model stores whatever price it
  is given; the API never states one.

Both are in `lib/constants.ts` so they move in one place when the backend defines them.

---

## Environment

| Variable | Scope | Purpose |
|---|---|---|
| `API_URL` | server only | Backend base URL. Unprefixed on purpose — the browser never calls it. |
| `RESEND_API_KEY` | server only | Transactional email. Blank disables sending. |
| `NEXT_PUBLIC_SITE_URL` | public | Absolute URLs in metadata |
| `NEXT_PUBLIC_SOCKET_URL` | public | Socket.io connects from the browser, so it must be public |
| `NEXT_PUBLIC_DRIVER_URL` | public | Where `/portal` sends a chauffeur |
| `NEXT_PUBLIC_ADMIN_URL` | public | Where `/portal` sends an admin or fleet operator |

---

## Not built

- **Live tracking / chat.** `/tracking/:tripId` and `/chat/:tripId` are socket
  namespaces; no socket client is wired in any project yet. `GET /trips/:id/chat/history`
  exists and would back the transcript.
- **Real card capture.** `POST /payments/methods` takes a `gatewayToken` from a payment
  provider's SDK. Saved cards are listed and can be removed; adding one needs the SDK.
- **Document upload.** `POST /users/me/documents` records metadata only — storage is a
  placeholder on the backend, so the file itself is not shipped anywhere.
