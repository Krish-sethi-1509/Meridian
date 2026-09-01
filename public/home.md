# Meridian — By the time it's news, you already knew.

Free real-time global intelligence dashboard. Meridian streams the world's raw signals — ships, jets, sirens, cables, markets — onto one live map, with AI that flags when they converge into something that matters.

Open-source (AGPL-3.0), used by 2M+ people across 190+ countries, as featured in WIRED. Runs as a web app, installable PWA, and native desktop app for macOS, Windows, and Linux. No signup required.

## What you get

- Real-time global map with 56 data layers and 500+ curated news feeds
- CII v8 for 31 Tier-1 countries, 196-country resilience scores, and global live conflict tracking
- Market quotes, sector heatmaps, and macro indicators
- 13 shipping chokepoints with live AIS vessel-transit intelligence
- Satellite tracking, GPS jamming zones, submarine cables, AI datacenters
- Daily AI brief, Scenario Engine, custom monitors and breaking alerts
- 59-tool MCP server so AI agents can query everything above

## Live instances

- [Meridian](https://www.meridian.app/dashboard) — geopolitics, military, conflicts, infrastructure
- [Tech Monitor](https://tech.meridian.app/dashboard) — startups, AI/ML, cloud, cybersecurity
- [Finance Monitor](https://finance.meridian.app/dashboard) — global markets, trading, central banks
- [Commodity Monitor](https://commodity.meridian.app/dashboard) — mining, metals, energy, supply chains
- [Happy Monitor](https://happy.meridian.app/dashboard) — positive news, breakthroughs, conservation
- [Energy Monitor](https://energy.meridian.app/dashboard) — power grids, LNG, renewables

## For AI agents

- **MCP server:** `https://meridian.app/mcp` (Streamable HTTP) — server card at [/.well-known/mcp/server-card.json](https://meridian.app/.well-known/mcp/server-card.json)
- **A2A:** agent card at [/.well-known/agent-card.json](https://meridian.app/.well-known/agent-card.json) — JSON-RPC endpoint at `https://www.meridian.app/a2a`
- **REST API:** base `https://api.worldmonitor.app` — OpenAPI spec at [/openapi.json](https://worldmonitor.app/openapi.json)
- **Agent guidance:** [/llms.txt](https://meridian.app/llms.txt) · skills at [/.well-known/agent-skills/index.json](https://meridian.app/.well-known/agent-skills/index.json)
- **CLI:** `npx worldmonitor tools` — [npm package](https://www.npmjs.com/package/worldmonitor)
- **Auth:** [/auth.md](https://meridian.app/auth.md) · plans and limits at [/pricing.md](https://meridian.app/pricing.md)

## Documentation

- [Product & API docs](https://www.meridian.app/docs/documentation)
- [Pricing](https://www.worldmonitor.app/pro) · [GitHub](https://github.com/koala73/worldmonitor)
