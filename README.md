# VIARO — passenger site

Next.js 16.1 · React 19 · TypeScript · Tailwind 3 + shadcn/ui · App Router

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run typecheck
```

Needs `viaro-backend` on **:5001** and a seeded database
(`cd ../viaro-backend && npm run seed`). Credentials: [TEST_USERS.md](./TEST_USERS.md).

---

## One API, four products

This project is the **passenger** site. It is customer-only: a chauffeur, admin or
fleet operator can hold a valid session here — the API is shared — but every signed-in
area is for customers, so they are handed to `/portal`, which links to their own app.

| Product | Project | Port | Role |
|---|---|---|---|
| **Passenger site** (this one) | `viaro-frontend` | 3000 | `customer` |
| Chauffeur portal | `../viaro-driver` | 3001 | `driver` |
| Fleet console | `../viaro-company` | 3002 | `company` |
| Operations console | `../viaro-admin` | 3003 | `admin` |

---

## Pages

**Public** — home, about, fleet, services, service areas, contact, FAQ, blog, terms.

**Auth** — `/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-phone`.

**Signed in**

| Page | Route |
|---|---|
| Book a ride | `/book` |
| My trips | `/trips` |
| Trip detail | `/trips/[id]` |
| Change a booking | `/trips/[id]/edit` |
| Live tracking | `/trips/[id]/track` |
| Chat | `/trips/[id]/chat` |
| Wallet | `/wallet` |
| Monthly plan | `/subscription` |
| Favourite chauffeurs | `/favorites` |
| Notifications | `/notifications` |
| Support | `/support`, `/support/new`, `/support/[id]` |
| Account | `/account` |

Architecture, response-shape gotchas and the API constraints the UI has to respect are
in [INTEGRATION.md](./INTEGRATION.md).

---

## Not connected yet

Every screen below **exists and is reachable**; it renders a labelled placeholder until
the environment value is set, then switches to the live version.

| Variable | Unlocks |
|---|---|
| `NEXT_PUBLIC_MAP_PROVIDER` + `NEXT_PUBLIC_MAP_API_KEY` | a real map on `/trips/[id]/track` (currently a panel showing the live coordinates) |
| `NEXT_PUBLIC_REALTIME_ENABLED` | socket streams; tracking polls until then, and chat can send (there is no REST route to post a message) |
| `NEXT_PUBLIC_PAYMENT_PROVIDER` | adding a saved card — `POST /payments/methods` needs a `gatewayToken` from the provider SDK. Listing and removing cards already work. |
