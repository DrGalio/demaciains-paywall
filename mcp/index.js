#!/usr/bin/env node
/**
 * Demaciains MCP Server
 * 17 pay-per-use AI tools via x402 protocol
 * Connect to: https://xpay-server.vercel.app
 * 
 * Usage in Claude/Cursor/VS Code:
 * Add to MCP config:
 * {
 *   "mcpServers": {
 *     "demaciains": {
 *       "command": "npx",
 *       "args": ["demaciains-mcp"]
 *     }
 *   }
 * }
 */

const https = require('https');
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { CallToolRequestSchema, ListToolsRequestSchema } = require('@modelcontextprotocol/sdk/types.js');

const BASE_URL = 'https://xpay-server.vercel.app';

// ─── Tool definitions ───
const TOOLS = [
  {
    name: 'ai_detector',
    description: 'Detect AI-generated content. Analyzes text for burstiness, vocabulary diversity, sentence structure patterns typical of AI writing. Returns probability score and signals.',
    inputSchema: {
      type: 'object',
      properties: { text: { type: 'string', description: 'Text to analyze (min 50 chars)' } },
      required: ['text'],
    },
    endpoint: '/api/ai-detector',
    price: '$2.44',
  },
  {
    name: 'email_verify',
    description: 'Verify email address with real DNS/MX checks. Detects disposable, free, corporate, role-based emails. Returns deliverability score.',
    inputSchema: {
      type: 'object',
      properties: { email: { type: 'string', description: 'Email address to verify' } },
      required: ['email'],
    },
    endpoint: '/api/email-verify',
    price: '$2.44',
  },
  {
    name: 'company_enrich',
    description: 'Enrich company data via web research. Returns firmographics, competitors, industry, size estimation from live web search.',
    inputSchema: {
      type: 'object',
      properties: { company: { type: 'string', description: 'Company name to research' } },
      required: ['company'],
    },
    endpoint: '/api/company-enrich',
    price: '$2.44',
  },
  {
    name: 'web_intel',
    description: 'Analyze a URL for SEO signals, page title, meta description, indexation status, and tech hints.',
    inputSchema: {
      type: 'object',
      properties: { url: { type: 'string', description: 'URL to analyze' } },
      required: ['url'],
    },
    endpoint: '/api/web-intel',
    price: '$2.44',
  },
  {
    name: 'plagiarism_check',
    description: 'Check text for plagiarism using n-gram fingerprinting. Returns originality score and similarity analysis.',
    inputSchema: {
      type: 'object',
      properties: { text: { type: 'string', description: 'Text to check (min 100 chars)' } },
      required: ['text'],
    },
    endpoint: '/api/plagiarism',
    price: '$2.44',
  },
  {
    name: 'seo_audit',
    description: 'Full SEO audit of a URL. Checks title, meta description, H1 tags, images, internal/external links. Returns score and prioritized issues.',
    inputSchema: {
      type: 'object',
      properties: { url: { type: 'string', description: 'URL to audit' } },
      required: ['url'],
    },
    endpoint: '/api/seo-audit',
    price: '$2.44',
  },
  {
    name: 'lead_score',
    description: 'Score a B2B lead for ICP fit. Evaluates email quality, title seniority, company match, industry alignment.',
    inputSchema: {
      type: 'object',
      properties: {
        lead: { type: 'string', description: 'JSON string: {email, company, title, industry}' },
      },
      required: ['lead'],
    },
    endpoint: '/api/lead-score',
    price: '$2.44',
  },
  {
    name: 'market_gap',
    description: 'Find market gap opportunities in a niche. Returns gap score, pain point, revenue estimate, and validation signals.',
    inputSchema: {
      type: 'object',
      properties: { niche: { type: 'string', description: 'Market niche to analyze (optional)' } },
    },
    endpoint: '/api/market-gap',
    price: '$1.39',
  },
  {
    name: 'trends',
    description: 'Get current market trends and growth signals for hot sectors including AI, SaaS, creator economy.',
    inputSchema: { type: 'object', properties: {} },
    endpoint: '/api/trends',
    price: '$1.39',
  },
  {
    name: 'competitor_gap',
    description: 'Analyze competitor weaknesses in an industry. Returns exploitable gaps and pricing comparison.',
    inputSchema: {
      type: 'object',
      properties: { industry: { type: 'string', description: 'Industry to analyze (optional)' } },
    },
    endpoint: '/api/competitor-gap',
    price: '$1.39',
  },
  {
    name: 'algo_report',
    description: 'Get social platform algorithm ranking signals and optimization hacks.',
    inputSchema: {
      type: 'object',
      properties: { platform: { type: 'string', enum: ['instagram', 'tiktok', 'youtube', 'linkedin', 'twitter'], description: 'Platform to analyze' } },
      required: ['platform'],
    },
    endpoint: '/api/algo-report',
    price: '$1.39',
  },
  {
    name: 'startup_validator',
    description: 'Validate a startup idea with multi-dimension scoring. Returns BUILD/PROMISING/HIGH RISK verdict.',
    inputSchema: {
      type: 'object',
      properties: { idea: { type: 'string', description: 'Startup idea to validate' } },
    },
    endpoint: '/api/startup-validator',
    price: '$1.39',
  },
  {
    name: 'domain_intel',
    description: 'Analyze a domain for brandability, SEO potential, TLD authority, and estimated value.',
    inputSchema: {
      type: 'object',
      properties: { domain: { type: 'string', description: 'Domain to analyze' } },
      required: ['domain'],
    },
    endpoint: '/api/domain-intel',
    price: '$1.39',
  },
  {
    name: 'prompt_optimize',
    description: 'Optimize an AI prompt. Scores it, identifies issues, returns rewritten version with best practices.',
    inputSchema: {
      type: 'object',
      properties: { prompt: { type: 'string', description: 'Prompt to optimize' } },
      required: ['prompt'],
    },
    endpoint: '/api/prompt-optimize',
    price: '$1.39',
  },
  {
    name: 'content_score',
    description: 'Score content for readability, SEO metrics, word/sentence analysis.',
    inputSchema: {
      type: 'object',
      properties: { text: { type: 'string', description: 'Content to score' } },
      required: ['text'],
    },
    endpoint: '/api/content-score',
    price: '$1.39',
  },
  {
    name: 'price_benchmark',
    description: 'Get SaaS pricing benchmark for a category. Returns tier pricing analysis with MRR estimates.',
    inputSchema: {
      type: 'object',
      properties: { category: { type: 'string', description: 'SaaS category (optional)' } },
    },
    endpoint: '/api/price-benchmark',
    price: '$1.39',
  },
  {
    name: 'name_generator',
    description: 'Generate business/product name ideas with brandability scores and domain availability hints.',
    inputSchema: {
      type: 'object',
      properties: { keywords: { type: 'string', description: 'Keywords (comma-separated)' } },
      required: ['keywords'],
    },
    endpoint: '/api/name-generator',
    price: '$1.39',
  },
];

// ─── API caller ───
async function callApi(endpoint, params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}${endpoint}${query ? '?' + query : ''}`;
  
  return new Promise((resolve, reject) => {
    https.get(url, { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (res.statusCode === 402) {
            resolve({
              error: 'payment_required',
              message: `This tool requires payment (${parsed.accepts?.[0]?.maxAmountRequired ? '$' + (Number(parsed.accepts[0].maxAmountRequired) / 1e6).toFixed(2) : 'USDC'}). Set up x402 payments to use this tool.`,
              payment_requirements: parsed,
              setup_guide: 'Visit https://xpay-server.vercel.app for payment setup instructions.',
            });
          } else {
            resolve(parsed);
          }
        } catch { resolve({ error: 'parse_error', raw: data.slice(0, 500) }); }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// ─── MCP Server ───
const server = new Server(
  { name: 'demaciains', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS.map(t => ({
    name: t.name,
    description: `${t.description} [${t.price}]`,
    inputSchema: t.inputSchema,
  })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const tool = TOOLS.find(t => t.name === request.params.name);
  if (!tool) throw new Error(`Unknown tool: ${request.params.name}`);
  
  const params = request.params.arguments || {};
  const result = await callApi(tool.endpoint, params);
  
  return {
    content: [{
      type: 'text',
      text: JSON.stringify(result, null, 2),
    }],
  };
});

// ─── Start ───
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Demaciains MCP Server running — 17 tools available');
}

main().catch(console.error);
