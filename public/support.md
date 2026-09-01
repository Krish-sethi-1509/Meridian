# Support & Contact - Meridian

Last updated: July 5, 2026

How to reach Meridian, by concern. Human-readable version: https://www.meridian.app/docs/support

## Channels

| Concern | Channel | Notes |
| --- | --- | --- |
| General support, account or billing issues | support@meridian.app | Primary support channel for all plans |
| Enterprise, sales, custom quotas | enterprise@meridian.app | Custom pricing, deployments, higher API limits |
| Bug reports & feature requests | https://github.com/koala73/worldmonitor/issues | Public open-source repository |
| Community & quick questions | https://discord.gg/re63kWKxaz | Community Discord |
| Service status & incidents | https://status.meridian.app | Email subscription available on the page |
| In-app contact form | Form on https://meridian.app/pro | Submits `POST /api/leads/v1/submit-contact`; Turnstile-protected, intended for humans in a browser — agents should email support@ instead |

## Response Expectations

- Free and Pro: best-effort support via email, GitHub and Discord. No formal SLA.
- API: best-effort support via email; include your key prefix (never the full key) and request IDs.
- Enterprise: dedicated support with committed response times, agreed per contract — contact enterprise@meridian.app.

## Common Self-Serve Answers

- Find, create, or replace a `wm_` key: https://www.meridian.app/docs/api-keys. Full keys are shown only once and cannot be recovered; revoke a lost key and create a replacement.
- API key rotation or limit increases: see https://www.meridian.app/docs/usage-auth and https://www.meridian.app/docs/usage-rate-limits, or email support@meridian.app.
- Pricing and plans: https://meridian.app/pricing.md (markdown) or `GET https://www.meridian.app/api/product-catalog` (JSON, public).
- Billing portal (invoices, cancel/renew): sign in at https://meridian.app/pro and open the customer portal.
- Security reports: see https://www.meridian.app/.well-known/security.txt

## Machine-Readable Summary

```json
{
  "product": "Meridian",
  "support_email": "support@meridian.app",
  "enterprise_email": "enterprise@meridian.app",
  "issues_url": "https://github.com/koala73/worldmonitor/issues",
  "community_url": "https://discord.gg/re63kWKxaz",
  "status_url": "https://status.meridian.app",
  "security_txt": "https://www.meridian.app/.well-known/security.txt",
  "sla": { "free": "best-effort", "pro": "best-effort", "api": "best-effort", "enterprise": "contracted" }
}
```
