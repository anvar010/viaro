# VIARO — Driver portal

Next.js 16.3 · React 19 · TypeScript · Tailwind 4 · App Router
Design: Figma `mHZbhtKtTnIUG1s3Yfdb2V` → **Desktop View** (`57:2`), frames `14`–`20`,
palette **B · Monochrome blue** (`57:2923`) with **C · Dark mode** as the dark theme.

Deployed to **`drive.viaro.com`**. The passenger site (`viaro.com`) is a separate
project, `../viaro-frontend`.

```bash
npm install
npm run dev     # http://localhost:3001  (the customer app uses 3000)
```

Needs `viaro-backend` running on `:5000` — see `.env.local`.

---

## Why this is a separate project

FRONTEND-STATUS open decision #3 ("same Next app with a route group, or a separate
deploy?") is now **settled as a separate deploy**, because the design puts the portal on
its own host and every screen behind it is `roleGuard('driver')`.

The cost is duplication: `src/lib/api`, `src/lib/auth`, `src/components/ui` and
`src/app/globals.css` are copies of the customer project's files, not imports.

**If these diverge, the palettes drift.** The clean fix is a shared workspace package
(`@viaro/ui`) once a third consumer appears — the admin/company screens will be that
third consumer. Until then, changes to tokens or the API client must be applied to both
projects.

---

## Status: 1 of 7 screens built

| # | Screen | Frame | Route | State |
|---|---|---|---|---|
| 14 | Dashboard | `57:5099` | `/` | ✅ built |
| 15 | Requests and pool | `57:5207` | `/requests` | ⬜ stub |
| 16 | Trip detail | `57:5310` | `/trips/[id]` | ⬜ not routed yet |
| 17 | Schedule | `57:5420` | `/schedule` | ⬜ stub |
| 18 | Earnings | `57:5517` | `/earnings` | ⬜ stub |
| 19 | Documents | `57:5650` | `/documents` | ⬜ stub |
| 20 | Support and appeals | `57:5747` | `/support` | ⬜ stub |

Each stub names its frame and its endpoints, so the next session starts without
re-deriving anything.

### The shell

Six of the seven frames are exactly **1280×786** — this is a fixed app shell, not a
scrolling page. `components/layout/PortalShell.tsx` implements it: a 230px rail, a 66px
top bar and the body. The rail keeps its 230px and the body takes the remaining width,
so the layout holds above 1280 rather than leaving a gap, and collapses to a bottom nav
below `lg`. **Build the remaining six as body content — the chrome is done.**

### Sign-in

The design has no sign-in screen for `drive.viaro.com`; the Figma tab opens straight on
the Dashboard. `RequireDriver` renders one on the same tokens and rejects non-driver
roles explicitly — a customer signing in here would otherwise reach a dashboard where
every request 403s.

---

## Endpoints wired

| Endpoint | Used by |
|---|---|
| `GET /drivers/me` | shell + Dashboard |
| `PATCH /drivers/me/status` | the Online/Offline switch |
| `GET /reports/earnings-payout` | Dashboard earnings tiles |
| `GET /reports/trips-completed` | Dashboard trip counts |
| `GET /admin/dispatch/pool` | Dashboard open-requests count |
| `GET /trips` | Dashboard schedule table |
| `POST /api/auth/login` → `/auth/login` | sign-in |

⚠ **`GET /drivers/me`, `PATCH /drivers/me/status` and `POST /drivers/apply` are missing
from the 59-route table in `../viaro-frontend/FRONTEND-STATUS.md` §3.** They exist and
are mounted at `/drivers`.

---

## Where the design and the API disagree

Three found while building `14 · Dashboard`. All are visible in the code as comments.

1. **"Acceptance rate 94% · Last 30 days"** — nothing counts offers versus accepts.
   `/trips` holds accepted trips but no record of requests declined or expired. The tile
   shows the driver's **rating**, which the API does keep, rather than inventing a
   percentage. Needs a dispatch-offer log to build as designed.

2. **Per-document expiry** ("Commercial insurance · Expires in 3 mo", "Driver's licence
   · Valid") — `Driver.documents` is a `string[]` of URLs with no type and no expiry
   date. The Dashboard shows only how many are on file. Needs a schema change; blocks
   most of `19 · Documents` too.

3. **Driver-visible money.** Spec §8 rule 2 strips `fareAmount` from every driver-facing
   response, including `/reports/trips-completed`. So a driver can never see what the
   passenger paid — only what they were credited, via `earnings-payout`. The Dashboard's
   earnings tiles read wallet credits for this reason. This is deliberate in the
   backend, not a gap, and `18 · Earnings` must respect it.

---

## Assets

Two variants, derived from the supplied `viaro-frontend/public/logo.png` (which is RGB
on solid black with no alpha — it would render as a black box on the white palette-B
pages):

| File | Wordmark | Used on |
|---|---|---|
| `viaro-logo.png` | navy `#04182E` | light surfaces (the default) |
| `viaro-logo-dark.png` | white | dark theme, and `<Logo onDark />` for navy panels |

`Logo.tsx` swaps them with CSS (`dark:hidden` / `hidden dark:block`), not a hook —
reading the theme in JS would paint one frame with the wrong file. Both are trimmed to
the artwork and resized to 440px wide, so a ~110px slot stays crisp at 2×.

Regenerate with `scratchpad/make_logo.py <source> <light-out> <dark-out>` if the source
artwork changes.

---

## Sessions across the two hosts

`refreshCookieOptions()` sets no `domain`, so the refresh cookie is scoped to whichever
host issued it. `viaro.com` and `drive.viaro.com` therefore keep **independent
sessions** — signing into the portal does not sign you into the passenger site.

That is the right default here, because the roles are disjoint: a chauffeur account is
not a passenger account, and `RequireDriver` rejects non-driver roles outright. If
single sign-on across subdomains is ever wanted, set `domain: ".viaro.com"` in **both**
projects' `src/lib/auth/cookies.ts`.
