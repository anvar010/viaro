# Test users

Created by the backend's own seeding mechanism — the accounts are registered through
`authService.register()`, so password hashing, wallet creation and driver/company
profiles are identical to a real signup.

```bash
cd ../viaro-backend
npm run seed          # create (safe to re-run; clears its own records first)
npm run seed:clean    # remove everything the seed created
```

**Every account uses the same password:** `test123`

## The five states

| # | Email | Password | Role | Subscription | Covers |
|---|---|---|---|---|---|
| 1 | `customer1@viaro.test` | `test123` | customer | — none | Rider on pay-per-ride. Pays the peak surcharge. Has a favourite driver saved. |
| 2 | `customer2@viaro.test` | `test123` | customer | **active** (`monthly`, $49.99) | Subscriber tier. Peak surcharge waived. |
| 3 | `customer3@viaro.test` | `test123` | customer | **expired** (`monthly`, $49.99) | Lapsed subscriber — must be billed as a non-subscriber while still showing the expired record. |
| 4 | `driver.platform@viaro.test` | `test123` | driver | n/a | Chauffeur on the platform, 70% revenue share, `available`. |
| 5 | `admin@viaro.test` | `test123` | admin | n/a | Full platform access: dashboards, city pricing, dispatch pool, ticket triage. |

## Also seeded

| Email | Role | Notes |
|---|---|---|
| `company@viaro.test` | company | Fleet operator "Sunset Fleet Ltd". Owns the roster driver below. Can create drivers — **admin cannot**. |
| `driver.company@viaro.test` | driver | On the company roster, flat $30/trip payout, vehicle class `suv`. |

## Verified behaviour

Checked live against `GET /pricing/fare-estimate` after seeding:

| Account | `subscriber` | Meaning |
|---|---|---|
| customer1 | `false` | correct — never subscribed |
| customer2 | `true` | correct — active subscription waives the peak multiplier |
| customer3 | `false` | correct — an expired subscription must not confer the discount |

That third row is the one worth keeping an eye on: it is the case where a naive
"has a subscription row" check would wrongly give a lapsed customer subscriber pricing.

## Where to sign in

Viaro is four products against one API, so **which app you sign into matters**:

| Product | Project | Port | Sign in with |
|---|---|---|---|
| Passenger site | `viaro-frontend` | 3000 | `customer1/2/3@viaro.test` |
| Chauffeur portal | `viaro-driver` | 3001 | `driver.platform@viaro.test`, `driver.company@viaro.test` |
| Fleet console | `viaro-company` | 3002 | `company@viaro.test` |
| Operations console | `viaro-admin` | 3003 | `admin@viaro.test` |

A non-passenger account can still sign in on the passenger site — the API is shared —
but every signed-in area there is customer-only, so they land on `/portal`, which links
them to their own app instead.

## Other seeded data

The seed also creates city pricing (Los Angeles plus Seattle, Bellevue, Tacoma,
Kirkland and Everett), a completed and settled trip with a rating and chat history, a
cancelled trip with a refund, and a dispatched booking sitting in the pool — so trip
history, wallet movements and the driver request list all have something to show.
