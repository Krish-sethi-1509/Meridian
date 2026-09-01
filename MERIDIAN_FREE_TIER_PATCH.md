# Meridian free-tier / free-deploy patch notes

This file documents two sets of changes made to the original World Monitor
codebase so it can run as **Meridian**: fully free (no billing/paywall) and
deployable on Vercel's free Hobby plan. Read this before touching the
gating or API-routing code again — both changes are centralized in a small
number of places on purpose, so a future edit that misses one of them can
silently reintroduce a paywall or a broken route.

## 1. Billing / premium gating removed

There is no Stripe/Dodo/Clerk billing backend running for this deployment,
so every "Pro" feature is unlocked for everyone, unconditionally. This was
done at four choke points rather than by touching every call site:

- `server/_shared/entitlement-check.ts` — `getRequiredTier()` now always
  returns `null` (unrestricted), short-circuiting the main tier-gate in
  `server/gateway.ts` before it ever looks at Clerk/Convex.
- `server/gateway.ts` — `needsLegacyProBearerGate` is hardcoded to `false`,
  disabling the older bearer-token gate that covered the same premium RPC
  paths.
- `server/_shared/premium-check.ts` — `resolvePremiumCallerIdentity()`
  returns a synthetic fully-entitled identity immediately, before any
  Clerk/Convex/user-key resolution runs. This covers MCP tool-call auth.
- `src/services/panel-gating.ts` (`hasPremiumAccess`) and
  `src/services/widget-store.ts` (`isProUser`) — both always return `true`
  client-side, which is what every paywall/lock UI in the dashboard checks.

None of the surrounding code was deleted — Stripe/Dodo/Clerk/Convex
integration is all still there, just unreachable. If you ever want to
reintroduce real billing, these are the four places to revert.

## 2. API consolidated to fit Vercel's free-tier function cap

Vercel's Hobby plan allows a maximum of **12 serverless functions** per
deployment. This codebase originally shipped **111 separate API route
files** under `api/`, each of which becomes its own physical Vercel
function — hence the "No more than 12 Serverless Functions" deploy error.

The fix: all 111 route handlers were moved, **unchanged**, from `api/` to
`server/routes/` (mirroring their original relative paths), so Vercel no
longer auto-detects them as functions. In their place:

- **`api/router.ts`** — one edge-runtime function that statically imports
  all 108 edge-runtime handlers and dispatches to the right one by
  matching the request's pathname against each route's original pattern
  (handling static segments, Vercel's `[param]` dynamic segments, and
  `[...catchall]` segments the same way Vercel's own file-based router
  would).
- **`api/mcp/handler.ts`, `api/og-story.js`, `api/story.js`** — the 3
  routes that declared Node.js runtime (not edge) instead of a config
  edge runtime stayed as their own individual functions, since a single
  physical function can only run one runtime. Each is now a one-line
  re-export shim pointing at its handler's new home under `server/routes/`.
- **`vercel.json`** — gained 108 new `rewrites` entries, one per original
  route path, each pointing to `/api/router`. Vercel rewrites preserve the
  original request path, so `api/router.ts` sees the real incoming
  pathname (e.g. `/api/market/v1/analyze-stock`) and dispatches correctly.

Total function count is now **4** (well under the 12 cap, with headroom).

Every handler's own logic is byte-for-byte unchanged — only their file
location and their relative imports to shared helpers (`api/_*.js`,
`server/_shared/*`) were updated to still resolve correctly from the new
location. Nothing about how each route parses the request, checks auth,
or talks to Redis/Convex/upstream APIs was touched.

### What to verify after deploying

This was built and reasoned through carefully, but it was **not
test-deployed against live Vercel** (this environment has no network
access to vercel.com). The riskiest assumptions, in order:

1. Vercel rewrites deliver the *original* pathname to `api/router.ts` via
   `request.url` — this is standard, documented Vercel behavior and the
   whole design depends on it.
2. No two routes' patterns actually collide at runtime for a real request
   (checked programmatically for exact duplicates during the migration;
   dynamic-segment ordering was sorted static-first, then single-dynamic,
   then catch-all last, matching Vercel's own precedence).
3. `npm run typecheck:api` (a script already in `package.json`, not run as
   part of the Vercel build) is worth running once locally before you lean
   on this in production — Vercel's own build step transpiles the API
   functions but does not type-check them, so a type error here wouldn't
   block deployment but could still be a real bug.

If a specific route 404s or errors after deploying, the fix is almost
always in `api/router.ts`'s `ROUTES` table or in `vercel.json`'s new
rewrites — not in the handler itself, which is unchanged.
