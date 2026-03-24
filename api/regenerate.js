#!/usr/bin/env node
/**
 * Demaciains API Data Regenerator
 * Run: node api/regenerate.js
 * Generates fresh data for all 9 x402 endpoints
 */
const fs = require('fs');
const path = require('path');
const E = require('./engine/dynamic-engine-v3.js');

const apiDir = __dirname;

const endpoints = [
  { file: 'market-gap.json', gen: () => E.marketGap() },
  { file: 'trends.json', gen: () => E.trends() },
  { file: 'competitor-gap.json', gen: () => E.competitorGap('ai agent tools') },
  { file: 'algo-report.json', gen: () => E.algoReport('x402 agent commerce') },
  { file: 'startup-validator.json', gen: () => E.startupValidator('AI-powered productivity tool') },
  { file: 'pricing-strategy.json', gen: () => E.pricingStrategy('digital template pack') },
  { file: 'revenue-forecast.json', gen: () => E.revenueForecast('AI prompt pack', { price: 29, traffic: 2000 }) },
  { file: 'go-to-market.json', gen: () => E.goToMarket('AI productivity toolkit', { niche: 'creators', price: 29 }) },
  { file: 'content-strategy.json', gen: () => E.contentStrategy('AI productivity tool', { niche: 'AI agents', audience: 'founders' }) },
];

console.log(`[${new Date().toISOString()}] Regenerating API data...`);

endpoints.forEach(ep => {
  const data = ep.gen();
  const outPath = path.join(apiDir, ep.file);
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
  console.log(`  ✅ ${ep.file} — generated at ${data.generated}`);
});

console.log('Done. All 9 endpoints regenerated.');
