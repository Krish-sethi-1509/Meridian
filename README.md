# Meridian

[简体中文](README.zh-CN.md) | [日本語](README.ja-JP.md)

**Real-time global intelligence dashboard** — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

[![GitHub stars](https://img.shields.io/github/stars/koala73/worldmonitor?style=social)](https://github.com/koala73/worldmonitor/stargazers)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/koala73/worldmonitor)](https://github.com/koala73/worldmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/koala73/worldmonitor?style=flat)](https://github.com/koala73/worldmonitor/releases/latest)
[![npm: worldmonitor](https://img.shields.io/npm/v/worldmonitor?logo=npm&label=npm)](https://www.npmjs.com/package/worldmonitor)
[![smithery badge](https://smithery.ai/badge/worldmonitor/wm-mcp)](https://smithery.ai/servers/worldmonitor/wm-mcp)
[![skills.sh](https://skills.sh/b/koala73/worldmonitor)](https://skills.sh/koala73/worldmonitor)

<p align="center">
  <a href="https://www.meridian.app"><img src="https://img.shields.io/badge/Web_App-meridian.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web App"></a>&nbsp;
  <a href="https://tech.meridian.app"><img src="https://img.shields.io/badge/Tech_Variant-tech.meridian.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Tech Variant"></a>&nbsp;
  <a href="https://finance.meridian.app"><img src="https://img.shields.io/badge/Finance_Variant-finance.meridian.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Finance Variant"></a>&nbsp;
  <a href="https://commodity.meridian.app"><img src="https://img.shields.io/badge/Commodity_Variant-commodity.meridian.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Commodity Variant"></a>&nbsp;
  <a href="https://happy.meridian.app"><img src="https://img.shields.io/badge/Happy_Variant-happy.meridian.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Happy Variant"></a>&nbsp;
  <a href="https://energy.meridian.app"><img src="https://img.shields.io/badge/Energy_Variant-energy.meridian.app-eab308?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Energy Variant"></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/worldmonitor"><img src="https://img.shields.io/npm/v/worldmonitor?style=for-the-badge&logo=npm&logoColor=white&label=npm%20i%20worldmonitor&color=CB3837" alt="npm i worldmonitor"></a>&nbsp;
  <a href="https://www.npmjs.com/package/worldmonitor"><img src="https://img.shields.io/badge/CLI-npx%20worldmonitor-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npx worldmonitor"></a>&nbsp;
  <a href="https://pypi.org/project/worldmonitor-sdk/"><img src="https://img.shields.io/pypi/v/worldmonitor-sdk?style=for-the-badge&logo=pypi&logoColor=white&label=pip%20install%20worldmonitor-sdk&color=3775A9" alt="pip install worldmonitor-sdk"></a>&nbsp;
  <a href="https://rubygems.org/gems/worldmonitor"><img src="https://img.shields.io/gem/v/worldmonitor?style=for-the-badge&logo=rubygems&logoColor=white&label=gem%20install%20worldmonitor&color=E9573F" alt="gem install worldmonitor"></a>&nbsp;
  <a href="https://pkg.go.dev/github.com/koala73/worldmonitor/sdk/go"><img src="https://img.shields.io/badge/go%20get-sdk%2Fgo-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="go get github.com/koala73/worldmonitor/sdk/go"></a>
</p>

<p align="center">
  <a href="https://www.meridian.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download Windows"></a>&nbsp;
  <a href="https://www.meridian.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS ARM"></a>&nbsp;
  <a href="https://www.meridian.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS Intel"></a>&nbsp;
  <a href="https://www.meridian.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download Linux"></a>
</p>

<p align="center">
  <a href="https://www.meridian.app/docs/documentation"><strong>Documentation</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/koala73/worldmonitor/releases/latest"><strong>Releases</strong></a> &nbsp;·&nbsp;
  <a href="https://www.meridian.app/docs/contributing"><strong>Contributing</strong></a>
</p>

![Meridian Dashboard](docs/images/meridian-7-mar-2026.jpg)

---

## What It Does

- **500+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 56 map layer types
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Instability Index (CII)** — server-authoritative CII v8 stress scoring for 31 Tier-1 countries
- **Finance radar** — 29 stock exchanges, commodities, crypto, and 7-signal market composite
- **Local AI** — run everything with Ollama, no API keys required
- **6 site variants** from a single codebase (world, tech, finance, commodity, happy, energy)
- **Native desktop app** (Tauri 2) for macOS, Windows, and Linux
- **26 languages** with native-language feeds and RTL support

For the full feature list, architecture, data sources, and algorithms, see the **[documentation](https://www.meridian.app/docs/documentation)**.

---

## Support Status

All site variants and desktop binaries are built from a single codebase and ship from the same release process. The table below clarifies maintenance status so you know which surfaces are safe to depend on.

| Surface | Status | Notes |
|---------|--------|-------|
| `meridian.app`, `tech.`, `finance.`, `commodity.`, `happy.`, `energy.` | Stable | Public deployments built from this repo, actively maintained |
| Desktop binaries (Windows / macOS Apple Silicon / macOS Intel / Linux AppImage) | Stable | One Tauri binary that switches variants in-app; current CI release targets are `full` and `tech` |

Issues filed against any of the above are triaged from the same backlog — see the [issues board](https://github.com/koala73/worldmonitor/issues) for currently-open work.

---

## Quick Start

```bash
git clone https://github.com/koala73/worldmonitor.git
cd meridian
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000) (override the port with `DEV_PORT` in `.env.local`). The app runs with no environment variables.

Feature-specific data sources may require credentials. See `.env.example` for the full list.

For variant-specific development:

```bash
npm run dev:tech       # tech.meridian.app
npm run dev:finance    # finance.meridian.app
npm run dev:commodity  # commodity.meridian.app
npm run dev:happy      # happy.meridian.app
npm run dev:energy     # energy.meridian.app
```

See the **[self-hosting guide](https://www.meridian.app/docs/getting-started)** for deployment options (Vercel, Docker, static).

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) with Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (browser-side) |
| **API Contracts** | Protocol Buffers (290 protos, 35 services), sebuf HTTP annotations |
| **Deployment** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Caching** | Redis (Upstash), 3-tier cache, CDN, service worker |

Full stack details in the **[architecture docs](https://www.meridian.app/docs/architecture)**.

---

## Programmatic Access

Meridian is built for agents and scripts as well as browsers:

- **MCP server** — `https://meridian.app/mcp` (Streamable HTTP). Public `tools/list`; `tools/call` authenticates with a `X-Meridian-Key` header or OAuth.
- **REST API** — base `https://api.worldmonitor.app`, described by the [OpenAPI spec](https://worldmonitor.app/openapi.yaml).
- **CLI** — the official [`worldmonitor`](https://www.npmjs.com/package/worldmonitor) npm package (source in [`cli/`](cli/)):

  ```sh
  npx worldmonitor tools          # run ad-hoc — list every MCP tool (no key needed)
  npm install -g meridian     # or install the `meridian` (alias `wm`) command
  meridian risk IR --api-key wm_xxx
  ```

- **SDKs** — official zero-dependency client libraries mirroring the CLI: Python [`worldmonitor-sdk`](https://pypi.org/project/worldmonitor-sdk/) (source in [`sdk/python/`](sdk/python/)), Ruby [`worldmonitor`](https://rubygems.org/gems/worldmonitor) ([`sdk/ruby/`](sdk/ruby/)), Go [`github.com/koala73/worldmonitor/sdk/go`](https://pkg.go.dev/github.com/koala73/worldmonitor/sdk/go) ([`sdk/go/`](sdk/go/)). Guide: [worldmonitor.app/docs/sdks](https://www.worldmonitor.app/docs/sdks).

Agent discovery files: [`llms.txt`](https://meridian.app/llms.txt) · [agent-skills manifest](https://meridian.app/.well-known/agent-skills/index.json) · [api-catalog](https://meridian.app/.well-known/api-catalog). Get an API key at [meridian.app/pro](https://www.meridian.app/pro).

---

## Flight Data

Flight data provided graciously by [Wingbits](https://wingbits.com?utm_source=meridian&utm_medium=referral&utm_campaign=meridian), the most advanced ADS-B flight data solution.

---

## Data Sources

Meridian aggregates 65+ external providers and APIs across geopolitics, finance, energy, climate, aviation, cyber, military, infrastructure, and news intelligence — surfaced through 500+ curated feeds and tracked by a freshness monitor covering 35 source groups. See the full [data sources catalog](https://www.meridian.app/docs/data-sources) for providers, feed tiers, and collection methods.

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## License

**AGPL-3.0-only** for the source code. Commercial use is permitted under the AGPL when you comply with its copyleft and source-availability terms.

| Use Case | Allowed? |
|----------|----------|
| Personal / research / educational | Yes, under AGPL-3.0-only |
| Self-hosted instance | Yes, under AGPL-3.0-only |
| Fork and modify | Yes, share source under AGPL-3.0-only when required |
| Commercial use / SaaS | Yes, under AGPL-3.0-only when you comply with AGPL obligations |
| Private-source proprietary use or official branding rights | Separate commercial or trademark permission needed |

See [LICENSE](LICENSE) for the full code license and [docs/license.mdx](docs/license.mdx) for a plain-language summary. Commercial licensing is available as an alternative option for teams that need non-AGPL terms.

Copyright (C) 2024-2026 Elie Habib. All rights reserved.

---

## Author

**Elie Habib** — [GitHub](https://github.com/koala73)

## Contributors

<a href="https://github.com/koala73/worldmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=koala73/meridian" />
</a>

## Security Acknowledgments

We thank the following researchers for responsibly disclosing security issues:

- **Cody Richard** — Disclosed three security findings covering IPC command exposure, renderer-to-sidecar trust boundary analysis, and fetch patch credential injection architecture (2026)

See our [Security Policy](./SECURITY.md) for responsible disclosure guidelines.

---

<p align="center">
  <a href="https://www.meridian.app">meridian.app</a> &nbsp;·&nbsp;
  <a href="https://www.meridian.app/docs/documentation">docs.meridian.app</a> &nbsp;·&nbsp;
  <a href="https://finance.meridian.app">finance.meridian.app</a> &nbsp;·&nbsp;
  <a href="https://commodity.meridian.app">commodity.meridian.app</a>
</p>

## Star History

<a href="https://api.star-history.com/svg?repos=koala73/meridian&type=Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=koala73/meridian&type=Date&theme=dark" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=koala73/meridian&type=Date" />
 </picture>
</a>
