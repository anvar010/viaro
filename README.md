# VIARO — Operations console

Next.js 16.3 · React 19 · TypeScript · Tailwind 4 · App Router
Role: **`admin`** only. Runs on **:3003**.

```bash
npm install
npm run dev
```

Needs `viaro-backend` on `:5001`. Sign in with `admin@viaro.test` / `test123`
(see `../viaro-frontend/TEST_USERS.md`).

---

## One API, four products

| Product | Project | Port | Roles |
|---|---|---|---|
| Passenger site | `viaro-frontend` | 3000 | `customer` |
| Chauffeur portal | `viaro-driver` | 3001 | `driver` |
| Fleet console | `viaro-company` | 3002 | `company` |
| Operations console | `viaro-admin` | 3003 | `admin` |

All four authenticate against the same backend, so a valid session for the wrong role is
possible. `RequireRole` catches that and says which app to use instead of rendering a
console where every request 403s.

---

## Pages

| Page | Route | Endpoints |
|---|---|---|
| Dashboard | `/` | dashboards, revenue, dispatch pool, pricing, cancellations |
| Bookings | `/bookings` | `GET /admin/dashboard/bookings` |
| Users | `/users` | `GET /admin/dashboard/users` |
| Dispatch | `/dispatch` | `GET /admin/dispatch/pool` (polled) |
| City pricing | `/pricing` | `GET/POST/PATCH /admin/pricing/city` |
| Drivers | `/drivers` | `GET /admin/drivers`, `PATCH /admin/drivers/:id`, penalties |
| Revenue | `/revenue` | `GET /admin/revenue/subscriptions`, `/reports/earnings-payout` |
| Reports | `/reports` | all three reports + CSV/PDF export jobs |
| Support | `/support` | ticket queue, reply, and admin-only status triage |

## What an admin cannot do

`POST /admin/drivers` is **company-only** — an admin can review every chauffeur and set
their payout terms, but cannot add one to a roster. The drivers page says so rather than
offering a form that would 403.

---

## Response shapes worth knowing

Traced against the running API — several are not what the models suggest:

| Endpoint | Returns |
|---|---|
| `GET /admin/dashboard/bookings` | `Paginated<Booking>` — `total` is the count, not a summary object |
| `GET /admin/dashboard/users` | `Paginated<User>` |
| `GET /admin/revenue/subscriptions` | `{ months, totalActive, totalRevenue }` |
| `GET /admin/drivers/penalties` | `{ drivers, totalDrivers, totalEvents }` — not an array |
| `GET /admin/dispatch/pool` | `Paginated<Booking>` — full booking documents |
| `GET /reports/cancellations-penalties` | `{ cancellations, penalties, counts }` |

---

## Not connected yet

Every screen that needs one of these is **built and reachable** — it renders a labelled
placeholder until the environment value is set:

| Variable | What it unlocks |
|---|---|
| `NEXT_PUBLIC_MAP_PROVIDER` + `NEXT_PUBLIC_MAP_API_KEY` | live map rendering |
| `NEXT_PUBLIC_REALTIME_ENABLED` | socket streams for dispatch and tracking; lists poll until then |

Report exports already work: the request returns a job id and the page polls the status
endpoint, then links to the download.
