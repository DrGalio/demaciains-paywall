const express = require('express');
const path = require('path');
const { paymentMiddleware, x402ResourceServer } = require('@x402/express');
const { registerExactEvmScheme } = require('@x402/evm/exact/server');
const { HTTPFacilitatorClient } = require('@x402/core/server');

const app = express();
const PORT = process.env.PORT || 3000;
const TREASURY_ADDRESS = '0x83F31CE0F8b1f27a6Ad91693709febb728c71563';

// x402 setup — PayAI facilitator supports v2 + eip155:8453
const facilitator = new HTTPFacilitatorClient({
  url: 'https://facilitator.payai.network'
});

// Debug: verify facilitator connectivity at startup
facilitator.getSupported().then(supported => {
  const baseExact = supported.kinds.filter(k => k.network === 'eip155:8453' && k.scheme === 'exact');
  console.log(`✅ Facilitator connected: ${supported.kinds.length} kinds, Base+exact: ${baseExact.length > 0 ? 'YES' : 'NO'}`);
}).catch(err => {
  console.error(`❌ Facilitator error: ${err.message}`);
});

const resourceServer = new x402ResourceServer(facilitator);

// Register exact EVM scheme — defaults to eip155:* (all EVM chains)
registerExactEvmScheme(resourceServer);

const PRODUCTS = {
  'freelancer-revenue-engine': { title: 'Freelancer Revenue Engine — 50 AI Prompts', price: '$2.00', description: '50 battle-tested prompts to 10x your freelance income', file: 'freelancer-revenue-engine.pdf' },
  'ecommerce-profit-accelerator': { title: 'E-Commerce Profit Accelerator — 50 AI Prompts', price: '$2.00', description: '50 prompts to optimize your online store conversions', file: 'ecommerce-profit-accelerator.pdf' },
  'content-creator-machine': { title: 'Content Creator Machine — 50 AI Prompts', price: '$2.00', description: '50 prompts to create viral content across all platforms', file: 'content-creator-machine.pdf' },
  'instagram-algorithm-2026': { title: 'Instagram Algorithm Reverse-Engineered (April 2026)', price: '$3.00', description: 'Complete breakdown of Instagram ranking signals + exploitation framework', file: '01-instagram-algorithm-april-2026.pdf' },
  'tiktok-algorithm-2026': { title: 'TikTok Algorithm Reverse-Engineered (April 2026)', price: '$3.00', description: 'TikTok For You Page algorithm decoded + ready-to-use prompts', file: '02-tiktok-algorithm-april-2026.pdf' },
  'youtube-algorithm-2026': { title: 'YouTube Algorithm Reverse-Engineered (April 2026)', price: '$3.00', description: 'YouTube recommendation engine breakdown + optimization playbook', file: '03-youtube-algorithm-april-2026.pdf' },
  'linkedin-algorithm-2026': { title: 'LinkedIn Algorithm Reverse-Engineered (April 2026)', price: '$3.00', description: 'LinkedIn feed ranking signals + professional reach strategies', file: '04-linkedin-algorithm-april-2026.pdf' },
  'x-twitter-algorithm-2026': { title: 'X (Twitter) Algorithm Reverse-Engineered (April 2026)', price: '$3.00', description: 'X/Twitter timeline algorithm decoded + engagement maximization', file: '05-twitter-x-algorithm-april-2026.pdf' },
  'all-prompt-packs': { title: 'All 3 AI Prompt Packs Bundle', price: '$5.00', description: 'Freelancer + E-Commerce + Content Creator prompts (150 total)', file: 'freelancer-revenue-engine.pdf' },
  'all-algorithms': { title: 'All 5 Algorithm Guides Bundle', price: '$10.00', description: 'Instagram + TikTok + YouTube + LinkedIn + X algorithms decoded', file: '01-instagram-algorithm-april-2026.pdf' }
};

// x402 payment middleware — protects ALL paid endpoints
app.use(paymentMiddleware({
  // API endpoints
  'GET /api/market-gap': {
    accepts: [{ scheme: 'exact', price: '$1.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Market gap analysis report'
  },
  'GET /api/trends': {
    accepts: [{ scheme: 'exact', price: '$0.25', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Live trend signals'
  },
  'GET /api/competitor-gap': {
    accepts: [{ scheme: 'exact', price: '$0.50', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Competitor gap analysis'
  },
  'GET /api/algo-report': {
    accepts: [{ scheme: 'exact', price: '$2.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Algorithm performance report'
  },
  // PDF product downloads — ALL protected
  'GET /products/freelancer-revenue-engine': {
    accepts: [{ scheme: 'exact', price: '$2.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Freelancer Revenue Engine — 50 AI Prompts PDF'
  },
  'GET /products/ecommerce-profit-accelerator': {
    accepts: [{ scheme: 'exact', price: '$2.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'E-Commerce Profit Accelerator — 50 AI Prompts PDF'
  },
  'GET /products/content-creator-machine': {
    accepts: [{ scheme: 'exact', price: '$2.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Content Creator Machine — 50 AI Prompts PDF'
  },
  'GET /products/instagram-algorithm-2026': {
    accepts: [{ scheme: 'exact', price: '$3.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'Instagram Algorithm Reverse-Engineered (April 2026)'
  },
  'GET /products/tiktok-algorithm-2026': {
    accepts: [{ scheme: 'exact', price: '$3.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'TikTok Algorithm Reverse-Engineered (April 2026)'
  },
  'GET /products/youtube-algorithm-2026': {
    accepts: [{ scheme: 'exact', price: '$3.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'YouTube Algorithm Reverse-Engineered (April 2026)'
  },
  'GET /products/linkedin-algorithm-2026': {
    accepts: [{ scheme: 'exact', price: '$3.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'LinkedIn Algorithm Reverse-Engineered (April 2026)'
  },
  'GET /products/x-twitter-algorithm-2026': {
    accepts: [{ scheme: 'exact', price: '$3.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'X (Twitter) Algorithm Reverse-Engineered (April 2026)'
  },
  'GET /products/all-prompt-packs': {
    accepts: [{ scheme: 'exact', price: '$5.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'All 3 AI Prompt Packs Bundle'
  },
  'GET /products/all-algorithms': {
    accepts: [{ scheme: 'exact', price: '$10.00', network: 'eip155:8453', payTo: TREASURY_ADDRESS }],
    description: 'All 5 Algorithm Guides Bundle'
  }
}, resourceServer));

// Homepage
app.get('/', (req, res) => {
  let html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Demaciains — AI-Powered Digital Products</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0a0a0a;color:#e0e0e0}.container{max-width:900px;margin:0 auto;padding:40px 20px}h1{font-size:2.5em;margin-bottom:8px;color:#fff}.subtitle{color:#888;font-size:1.1em;margin-bottom:40px}.section-title{font-size:1.3em;color:#6366f1;margin:30px 0 15px;text-transform:uppercase;letter-spacing:2px}.product{background:#141414;border:1px solid #222;border-radius:12px;padding:24px;margin-bottom:16px;transition:border-color .2s}.product:hover{border-color:#6366f1}.product h3{color:#fff;margin-bottom:6px}.product p{color:#888;font-size:.95em;margin-bottom:12px}.product .price{color:#22c55e;font-weight:bold;font-size:1.1em}.product a{display:inline-block;margin-top:8px;padding:8px 20px;background:#6366f1;color:#fff;text-decoration:none;border-radius:6px;font-weight:500}.product a:hover{background:#4f46e5}.badge{display:inline-block;background:#1e1b4b;color:#a5b4fc;padding:2px 8px;border-radius:4px;font-size:.75em;margin-left:8px}.api-badge{background:#064e3b;color:#6ee7b7}.footer{margin-top:60px;padding-top:20px;border-top:1px solid #222;color:#555;font-size:.85em}.agent-section{background:#0f172a;border:1px solid #1e3a5f;border-radius:12px;padding:24px;margin:30px 0}.agent-section h3{color:#60a5fa;margin-bottom:10px}.agent-section code{background:#1e293b;padding:2px 6px;border-radius:4px;font-size:.9em}.endpoint{background:#1e293b;border-radius:8px;padding:16px;margin:10px 0}.endpoint .method{color:#22c55e;font-weight:bold}.endpoint .path{color:#f59e0b}.endpoint .desc{color:#888;font-size:.9em;margin-top:4px}</style></head><body><div class="container"><h1>🏛️ Demaciains</h1><p class="subtitle">AI-powered research, algorithms, and prompt engineering — for humans and agents.</p><span style="display:inline-block;background:#1e1b4b;color:#a5b4fc;padding:4px 12px;border-radius:6px;font-size:.85em;margin-bottom:30px">⚡ x402 Protocol — USDC on Base — No accounts needed</span>`;

  html += `<div class="agent-section"><h3>🤖 Agent-to-Agent API (x402)</h3><p style="color:#888;margin-bottom:15px">Machine-readable endpoints. Hit with X-PAYMENT header → get instant JSON response.</p>`;
  html += `<div class="endpoint"><span class="method">GET</span> <span class="path">/api/market-gap</span> <span class="badge api-badge">$1.00 USDC</span><div class="desc">Structured market gap report with evidence, search volume, and build complexity.</div></div>`;
  html += `<div class="endpoint"><span class="method">GET</span> <span class="path">/api/trends</span> <span class="badge api-badge">$0.25 USDC</span><div class="desc">Top 5 trending pain points from Reddit, HN, and Product Hunt.</div></div>`;
  html += `<div class="endpoint"><span class="method">GET</span> <span class="path">/api/competitor-gap</span> <span class="badge api-badge">$0.50 USDC</span><div class="desc">Competitor gap analysis for any niche.</div></div>`;
  html += `<div class="endpoint"><span class="method">GET</span> <span class="path">/api/algo-report</span> <span class="badge api-badge">$2.00 USDC</span><div class="desc">Backtested pattern analysis on market signals.</div></div>`;
  html += `<p style="color:#555;font-size:.85em;margin-top:12px">Agent discovery: <code>/.well-known/agent.json</code> | Facilitator: facilitator.payai.network</p></div>`;

  html += '<h2 class="section-title">AI Prompt Packs</h2>';
  for (const [slug, p] of Object.entries(PRODUCTS).filter(([k]) => !k.includes('algorithm') && !k.includes('all-'))) {
    html += `<div class="product"><h3>${p.title} <span class="badge">x402</span></h3><p>${p.description}</p><span class="price">${p.price} USDC</span><br><a href="/products/${slug}">Download →</a></div>`;
  }
  html += '<h2 class="section-title">Algorithm Reverse-Engineering</h2>';
  for (const [slug, p] of Object.entries(PRODUCTS).filter(([k]) => k.includes('algorithm') && !k.includes('all-'))) {
    html += `<div class="product"><h3>${p.title} <span class="badge">x402</span></h3><p>${p.description}</p><span class="price">${p.price} USDC</span><br><a href="/products/${slug}">Download →</a></div>`;
  }
  html += '<h2 class="section-title">Bundles</h2>';
  for (const [slug, p] of Object.entries(PRODUCTS).filter(([k]) => k.includes('all-'))) {
    html += `<div class="product"><h3>${p.title} <span class="badge">x402</span></h3><p>${p.description}</p><span class="price">${p.price} USDC</span><br><a href="/products/${slug}">Get Bundle →</a></div>`;
  }
  html += `<div class="footer"><p>Demaciains — Autonomous AI Agent | Base | x402</p><p>Wallet: ${TREASURY_ADDRESS}</p></div></div></body></html>`;
  res.send(html);
});

// Product downloads
for (const [slug, product] of Object.entries(PRODUCTS)) {
  app.get(`/products/${slug}`, (req, res) => {
    res.download(path.join(__dirname, 'public', 'products', product.file), product.file, (err) => {
      if (err) res.status(404).json({ error: 'Product file not found.' });
    });
  });
}

// API endpoints (protected by x402 middleware)
app.get('/api/market-gap', (req, res) => res.sendFile(path.join(__dirname, 'public', 'api', 'market-gap.json')));
app.get('/api/trends', (req, res) => res.sendFile(path.join(__dirname, 'public', 'api', 'trends.json')));
app.get('/api/competitor-gap', (req, res) => res.sendFile(path.join(__dirname, 'public', 'api', 'competitor-gap.json')));
app.get('/api/algo-report', (req, res) => res.sendFile(path.join(__dirname, 'public', 'api', 'algo-report.json')));

// Agent discovery
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

// Health (unprotected)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', agent: 'Demaciains', network: 'eip155:8453', facilitator: 'https://facilitator.payai.network', version: '2.0.0', timestamp: new Date().toISOString() });
});

// Agent info (unprotected)
app.get('/agent', (req, res) => {
  res.json({ name: 'Demaciains Agent', version: '2.0.0', wallet: TREASURY_ADDRESS, network: 'eip155:8453', products: Object.keys(PRODUCTS).length, payment: 'x402', facilitator: 'https://facilitator.payai.network', contact: 'galio@sharebot.net' });
});

app.listen(PORT, () => {
  console.log(`🏛️ Demaciains Paywall Server running on port ${PORT}`);
  console.log(`📡 x402 payments on Base via PayAI facilitator`);
  console.log(`💰 Treasury: ${TREASURY_ADDRESS}`);
});

module.exports = app;
