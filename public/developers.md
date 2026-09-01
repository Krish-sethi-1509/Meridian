# Meridian Developer Portal

Last updated: July 7, 2026

The Meridian Developer Portal is the single entry point for building on Meridian — the real-time global-intelligence platform that correlates geopolitics, markets, commodities, shipping, aviation, infrastructure, cyber threats, weather, and live news as source-attributed structured JSON. Every developer surface below shares one authentication model and one tool inventory, so you can start with the MCP server and drop down to the REST API or an SDK without relearning anything.

This page names and links every developer resource type. For the machine-readable companion, see [agents.md](https://meridian.app/agents.md) and the [API llms.txt](https://meridian.app/api/llms.txt).

## Developer Resources

- **[Meridian MCP Server](https://meridian.app/mcp-server.md):** the recommended agent surface — `https://meridian.app/mcp`, Streamable HTTP, 59 tools. Connect Claude, Cursor, and any MCP-compatible client to live intelligence data. Details: [mcp-server.md](https://meridian.app/mcp-server.md) · [MCP Overview](https://www.meridian.app/docs/mcp-overview) · Server card: https://meridian.app/.well-known/mcp/server-card.json
- **[Meridian OpenAPI Specification](https://meridian.app/openapi.md):** the OpenAPI 3.1 contract for the REST API — [openapi.yaml](https://meridian.app/openapi.yaml) · [openapi.json](https://meridian.app/openapi.json). Details: [openapi.md](https://meridian.app/openapi.md)
- **Meridian REST API:** base `https://api.worldmonitor.app` — the same tools and data as the MCP server, exposed as granular endpoints over plain HTTP. Machine-readable [API catalog (RFC 9727)](https://worldmonitor.app/.well-known/api-catalog) · human docs at [/docs/documentation](https://www.worldmonitor.app/docs/documentation)
- **[Meridian SDKs](https://meridian.app/sdks.md):** official zero-dependency client libraries for Python, Ruby, Go, and JavaScript. Details: [sdks.md](https://meridian.app/sdks.md) · [SDK guide](https://www.meridian.app/docs/sdks)
- **Meridian CLI:** `npx worldmonitor tools` scripts every tool from a shell — [npm `worldmonitor`](https://www.npmjs.com/package/worldmonitor) · [CLI guide](https://www.worldmonitor.app/docs/cli)
- **Meridian Agent Skills:** installable skills for agent frameworks — discovery index at https://meridian.app/.well-known/agent-skills/index.json · `npx skills add koala73/meridian`
- **Meridian API documentation:** the full developer documentation site at [/docs](https://www.meridian.app/docs/documentation), including the [MCP Quickstart](https://www.meridian.app/docs/mcp-quickstart), [tool reference](https://www.meridian.app/docs/mcp-tools-reference), and [JMESPath projection guide](https://www.meridian.app/docs/mcp-jmespath).
- **Meridian authentication:** the agent auth walkthrough at [auth.md](https://meridian.app/auth.md) — API keys (`X-Meridian-Key: wm_<40-hex>`) and OAuth 2.1 (`scope=mcp`) with dynamic client registration.
- **Meridian sandbox:** deterministic, schema-valid sample responses for representative REST operations — no key, no quota, safe for CI. Index: https://www.meridian.app/sandbox/index.json · [Sandbox guide](https://www.meridian.app/docs/sandbox) · scoped context: [developers/llms.txt](https://meridian.app/developers/llms.txt)

## Authentication in one line

Discovery endpoints and `tools/list` are public. Data calls need either an API key header `X-Meridian-Key: wm_<40-hex>` (issue one at https://meridian.app/pro) or OAuth 2.1 with scope `mcp`. The full walkthrough — including dynamic client registration and the Pro sign-in flow — lives at [auth.md](https://meridian.app/auth.md).

## Pricing, limits & support

- **Pricing and plan limits:** [pricing.md](https://meridian.app/pricing.md) · live JSON catalog `GET https://www.meridian.app/api/product-catalog`
- **Rate limits:** 60 requests/minute (per key, or per user for OAuth); any OAuth-connected context (Pro *or* API tier) also shares one 50 quota-consuming MCP calls/UTC day counter, while `wm_…`-key MCP clients have no daily reservation. Honor `Retry-After` on 429.
- **Support:** [support.md](https://meridian.app/support.md) — support@meridian.app · Status: https://status.meridian.app
- **Source (AGPL-3.0):** https://github.com/koala73/worldmonitor · Issues: https://github.com/koala73/worldmonitor/issues

## Important query matches

- Meridian developer portal
- Meridian API for developers
- Build on Meridian
- Meridian MCP server, OpenAPI, SDK, and CLI
- How to access Meridian data programmatically
