# Demaciains AI Tools

> 19 pay-per-use API tools for AI agents. x402 protocol. USDC on Base. No subscriptions, no API keys — pay per call.

[![x402](https://img.shields.io/badge/protocol-x402-blue)](https://x402.org)
[![Network](https://img.shields.io/badge/network-Base-blue)](https://base.org)
[![Payment](https://img.shields.io/badge/payment-USDC-2775ca)](https://www.circle.com/usdc)

## What is this?

19 AI-powered API tools that charge per call via the [x402 protocol](https://x402.org). No accounts, no API keys, no subscriptions. You pay USDC on Base, you get the result. That's it.

**Perfect for:** AI agents, automation workflows, MCP clients, and developers who need data on-demand.

## Tools

### Premium ($2.44 USDC/call)

| Tool | Endpoint | What it does |
|------|----------|-------------|
| AI Detector | `/api/ai-detector?text=...` | Detect AI-generated content (burstiness, vocabulary analysis) |
| Email Verify | `/api/email-verify?email=...` | Real DNS/MX verification, deliverability scoring |
| Company Enrich | `/api/company-enrich?company=...` | Web search enrichment, firmographics |
| Web Intel | `/api/web-intel?url=...` | Page analysis, SEO signals, indexation |
| Plagiarism | `/api/plagiarism?text=...` | N-gram fingerprinting, originality scoring |
| SEO Audit | `/api/seo-audit?url=...` | Technical + on-page analysis with issues |
| Lead Score | `/api/lead-score?lead=...` | B2B ICP fit scoring |
| Social Audit | `/api/social-audit?handle=...` | Social profile analysis via web search |
| Tech Stack | `/api/tech-stack?url=...` | Detect CMS, frameworks, analytics from URL |

### Standard ($1.39 USDC/call)

| Tool | Endpoint | What it does |
|------|----------|-------------|
| Market Gap | `/api/market-gap?niche=...` | Find underserved niches with revenue estimates |
| Trends | `/api/trends` | Market trends and growth signals |
| Competitor Gap | `/api/competitor-gap?industry=...` | Competitor weaknesses to exploit |
| Algo Report | `/api/algo-report?platform=...` | Social algorithm ranking signals |
| Startup Validator | `/api/startup-validator?idea=...` | Idea scoring with BUILD/PROMISING/RISK verdict |
| Domain Intel | `/api/domain-intel?domain=...` | Brandability, SEO, value estimate |
| Prompt Optimize | `/api/prompt-optimize?prompt=...` | Rewrite and score AI prompts |
| Content Score | `/api/content-score?text=...` | Readability and SEO metrics |
| Price Benchmark | `/api/price-benchmark?category=...` | SaaS pricing tiers by category |
| Name Generator | `/api/name-generator?keywords=...` | Business/product name ideas |

## Quick Start

```bash
# Check what's available (free)
curl https://xpay-server.vercel.app/

# Try a paid endpoint (returns 402 with payment requirements)
curl https://xpay-server.vercel.app/api/market-gap
```

## MCP Server

Use with Claude, Cursor, VS Code, or any MCP client:

```json
{
  "mcpServers": {
    "demaciains": {
      "command": "node",
      "args": ["path/to/mcp/index.js"]
    }
  }
}
```

See [`mcp/`](./mcp/) for the MCP server source.

## Payment Details

- **Protocol:** [x402 v2](https://x402.org) (HTTP 402 Payment Required)
- **Facilitator:** [xpay.sh](https://facilitator.xpay.sh) (free, no auth, handles verify + settle)
- **Network:** Base (eip155:8453)
- **Asset:** USDC (`0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`)
- **Wallet:** `0x83F31CE0F8b1f27a6Ad91693709febb728c71563`

## Discovery

- **Agent Card:** [`/.well-known/agent.json`](https://drgalio.github.io/demaciains-paywall/.well-known/agent.json)
- **OpenAPI:** [`/openapi.json`](./openapi.json)
- **llms.txt:** [`/llms.txt`](./llms.txt)

## Links

- **API:** https://xpay-server.vercel.app
- **Docs:** https://drgalio.github.io/demaciains-paywall/
- **x402:** https://x402.org
- **xpay.sh:** https://xpay.sh

## License

MIT
