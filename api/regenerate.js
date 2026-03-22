#!/usr/bin/env node
/**
 * Demaciains API Data Regenerator
 * Run: node api/regenerate.js
 * Generates fresh data for all 4 x402 endpoints
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
];

console.log(`[${new Date().toISOString()}] Regenerating API data...`);

endpoints.forEach(ep => {
  const data = ep.gen();
  const outPath = path.join(apiDir, ep.file);
  fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
  console.log(`  ✅ ${ep.file} — generated at ${data.generated}`);
});

console.log('Done. All endpoints regenerated.');
