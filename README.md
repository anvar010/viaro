# VIARO — Fleet console

Next.js 16.3 · React 19 · TypeScript · Tailwind 4 · App Router
Role: **`company`** only. Runs on **:3002**.

```bash
npm install
npm run dev
```

Needs `viaro-backend` on `:5001`. Sign in with `company@viaro.test` / `test123`
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
| Dashboard | `/` | roster, trips, revenue share, penalties |
| Drivers | `/drivers` | `GET/POST /admin/drivers`, `PATCH /admin/drivers/:id` |
| Trips | `/trips` | `GET /reports/trips-completed` |
| Revenue | `/revenue` | `GET /reports/earnings-payout` |
| Penalties | `/penalties` | `GET /admin/drivers/penalties`, cancellations |
| Reports | `/reports` | all three reports + CSV/PDF export jobs |

## The one thing only a company can do

`POST /admin/drivers` rejects an admin, so **adding a chauffeur to a fleet happens only
here**. The platform admin can review and set terms; the roster itself is yours.

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
