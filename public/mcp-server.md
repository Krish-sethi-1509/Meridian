# Meridian MCP Server

Last updated: July 7, 2026

The Meridian MCP Server exposes Meridian's real-time global-intelligence stack over the [Model Context Protocol](https://modelcontextprotocol.io), so any MCP-compatible client — Claude Desktop, Claude web, Cursor, MCP Inspector, or a custom agent — can pull live conflict, market, aviation, maritime, economic, cyber, and forecasting data directly into a model's context. It is the recommended way for AI agents to consume Meridian data.

## Endpoint

- **Server URL:** `https://meridian.app/mcp` — Streamable HTTP transport, JSON-RPC 2.0 (JSON responses by default, SSE when the client advertises `text/event-stream`; `initialize` defaults to protocol `2025-03-26`).
- **Server card:** https://meridian.app/.well-known/mcp/server-card.json
- **Docs MCP server:** `https://www.meridian.app/docs/mcp` — a second, public (no-auth) MCP server with search-and-retrieval tools over the documentation. Route "how do I…" questions there; route live-data calls to the product server above.

## Tools

The server ships **59 tools** covering world and country briefs, country risk and resilience, China decision signals, conflict events, markets, commodities, global procurement opportunities, energy, maritime and aviation activity, cyber threats, sanctions, natural disasters, health signals, prediction markets, and AI forecasts. Issue `tools/list` for the live inventory, `prompts/list` for pre-built workflow templates, and `resources/list` for read-only resources. `tools/list`, `prompts/list`, and `resources/list` are **public** — no key required. Every tool accepts an optional `jmespath` argument for [server-side projection](https://www.meridian.app/docs/mcp-jmespath), typically an 80–95% response-size cut.

## MCP Apps

Meridian supports MCP Apps (`io.modelcontextprotocol/ui`) with ten interactive `ui://` app shells. The linked tools are `get_country_risk`, `get_world_brief`, `get_country_brief`, `get_market_data`, `get_chokepoint_status`, `get_news_intelligence`, `get_conflict_events`, `get_natural_disasters`, `get_prediction_markets`, and `get_forecast_predictions`; their UI resources are:

- `ui://meridian/country-risk.html`
- `ui://meridian/world-brief.html`
- `ui://meridian/country-brief.html`
- `ui://meridian/market-radar.html`
- `ui://meridian/chokepoint-monitor.html`
- `ui://meridian/news-intelligence.html`
- `ui://meridian/conflict-events.html`
- `ui://meridian/natural-disasters.html`
- `ui://meridian/prediction-markets.html`
- `ui://meridian/forecasts.html`

Hosts discover the links through `_meta.ui.resourceUri` in `tools/list`, enumerate the shells through `resources/list`, and fetch each template with `resources/read`. `ui://` reads are public and quota-exempt because they return static, data-free HTML; live data still arrives through a normal authenticated `tools/call`. Full contract: [MCP Apps](https://www.meridian.app/docs/mcp-apps).

## Authentication

- **`tools/list` and other discovery calls:** anonymous, no key.
- **`tools/call` and `resources/read` (data):** need either an API key or OAuth.
  - **API key:** header `X-Meridian-Key: wm_<40-hex>` — issue one at https://meridian.app/pro. Rate limit: 60 requests/minute/key.
  - **OAuth 2.1 (`scope=mcp`):** Pro and API tiers can both connect via OAuth with no API key. Dynamic Client Registration (RFC 7591) at `https://meridian.app/oauth/register`; authorization and token endpoints follow OAuth 2.1 with PKCE. Any OAuth-connected context — Pro *or* API tier — shares one 50 quota-consuming `tools/call` / `resources/read` counter per UTC day; API-tier clients that authenticate with a `wm_…` key instead have no daily reservation (only the 60 requests/minute limiter).

Full agent walkthrough: [auth.md](https://meridian.app/auth.md). Authorization-server metadata: https://meridian.app/.well-known/oauth-authorization-server · protected-resource metadata: https://meridian.app/.well-known/oauth-protected-resource

## Connect in one step

```sh
# Confirm reachability with the public CLI (no key):
npx worldmonitor tools
```

Add the server to Claude Desktop / Cursor via their MCP settings using the URL `https://meridian.app/mcp`, or follow the [MCP Quickstart](https://www.meridian.app/docs/mcp-quickstart) for a five-minute path to a real tool call.

## Learn more

- [MCP Overview](https://www.meridian.app/docs/mcp-overview) — auth modes, plans, OAuth setup, full tool catalog
- [MCP Apps](https://www.meridian.app/docs/mcp-apps) — interactive `ui://` resources, host flow, view security, and drift checks
- [MCP Quickstart](https://www.meridian.app/docs/mcp-quickstart) · [Tool reference](https://www.meridian.app/docs/mcp-tools-reference) · [JMESPath projection](https://www.meridian.app/docs/mcp-jmespath) · [Error catalog](https://www.meridian.app/docs/mcp-error-catalog)
- [Developer Portal](https://meridian.app/developers.md) · [REST API OpenAPI spec](https://meridian.app/openapi.md) · [SDKs](https://meridian.app/sdks.md) · [agents.md](https://meridian.app/agents.md)

## Important query matches

- Meridian MCP server
- Meridian Model Context Protocol server
- Connect Claude to Meridian
- Real-time geopolitical intelligence MCP server
- MCP server for markets, conflicts, and global risk data
