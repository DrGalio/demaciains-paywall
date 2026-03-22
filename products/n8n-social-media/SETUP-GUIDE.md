# n8n Social Media Automation Pack — Setup Guide

## What You Get

5 production-ready n8n workflow JSON files that automate your entire social media presence:

| # | Workflow | What It Does | Time Saved |
|---|----------|-------------|------------|
| 1 | Cross-Post to 5 Platforms | One webhook call → posts to Twitter, LinkedIn, Instagram, Facebook, Threads with platform-specific formatting | ~45 min/day |
| 2 | Best Time Scheduler | Checks optimal posting windows hourly, auto-publishes queued content when timing is right | ~30 min/day |
| 3 | Content Repurposing Pipeline | Feed 1 piece of content → AI generates Twitter thread, LinkedIn post, IG caption, email subjects, blog outline | ~2 hrs/week |
| 4 | Engagement Auto-Reply Bot | Monitors mentions/comments every 15 min, prioritizes by intent, generates on-brand AI replies | ~1 hr/day |
| 5 | Weekly Analytics Digest | Pulls IG/Twitter/LinkedIn stats weekly, formats report, sends to Slack | ~1 hr/week |

**Total estimated time savings: ~30+ hours/month**

---

## Prerequisites

- **n8n instance** (self-hosted free or n8n Cloud)
- **API credentials** for platforms you want to connect:
  - Twitter/X: Developer account + API keys
  - Instagram: Facebook Business account + Instagram API access
  - LinkedIn: LinkedIn app + OAuth
  - OpenAI: API key (for AI-powered workflows only)
  - Slack: Bot token (for analytics digest only)

---

## Installation Steps

### Step 1: Import Workflows

1. Open your n8n dashboard
2. Go to **Workflows** → **Import from File**
3. Select each `.json` file from the `workflows/` folder
4. The workflows will appear as drafts

### Step 2: Configure Credentials

For each workflow, you'll need to add credentials:

1. Open the workflow
2. Click on any disabled (greyed-out) node
3. Click **Credential** dropdown → **Create New**
4. Enter your API keys for that platform
5. Repeat for all disabled nodes

**Which nodes to connect:**
- 🔴 **Red/disabled nodes** = need your credentials
- 🟢 **Green/active nodes** = ready to use (code nodes, webhooks)

### Step 3: Enable Workflows

1. Toggle each workflow to **Active**
2. Test the webhook URL by sending a POST request:

```bash
# Test cross-posting
curl -X POST https://your-n8n.com/webhook/cross-post \
  -H "Content-Type: application/json" \
  -d '{"content": "Hello world! Testing my social media automation 🚀", "hashtags": "#automation #n8n"}'
```

---

## Workflow Details

### 1. Cross-Post to 5 Platforms
**Trigger:** POST to `/webhook/cross-post`

**Input JSON:**
```json
{
  "content": "Your post text here",
  "image_url": "https://example.com/image.jpg",
  "hashtags": "#tag1 #tag2",
  "link": "https://example.com"
}
```

**How it works:**
- Receives your content via webhook
- Code node formats it per platform (280 char limit for Twitter, hashtags for IG, professional tone for LinkedIn)
- Posts to all configured platforms simultaneously
- Returns a summary of what posted/failed

### 2. Best Time Scheduler
**Trigger:** Hourly check

**How it works:**
- Checks if current time falls in an optimal posting window
- Fetches queued posts from your Google Sheet
- Matches content to platforms that are in their engagement sweet spot
- Connects to your posting workflow to publish

**Setup:** Create a Google Sheet with columns: `platform`, `content`, `status` (queued/posted/skipped), `scheduled_date`

### 3. Content Repurposing Pipeline
**Trigger:** POST to `/webhook/repurpose`

**Input JSON:**
```json
{
  "content": "Your long-form content, blog post, or video transcript"
}
```

**Output:** Saves 5 platform-specific versions to your Google Sheets content calendar

### 4. Engagement Auto-Reply Bot
**Trigger:** Every 15 minutes

**How it works:**
- Pulls new mentions and comments
- Scores by intent: purchase intent (5) > complaint (4) > question (3) > praise (2)
- Only replies to items scoring ≥ 3 (saves API costs)
- AI generates context-appropriate replies
- ⚠️ Default: saves replies as drafts for review. Remove the "save draft" node to auto-post.

### 5. Weekly Analytics Digest
**Trigger:** Every Monday 8 AM

**Output:** Slack message with:
- Post count per platform
- Total reach, impressions, engagement
- Top performing post
- Week-over-week comparison placeholder

---

## ROI Calculator

| Metric | Before | After |
|--------|--------|-------|
| Time spent posting daily | 2 hours | 10 minutes |
| Platforms active on | 1-2 | 5 |
| Content repurposing | 1 hour/piece | 2 minutes |
| Engagement response time | 4-24 hours | < 15 minutes |
| Weekly reporting | 1 hour manual | 0 (automated) |
| **Monthly time saved** | | **~30 hours** |
| **At $50/hr freelance rate** | | **$1,500/mo value** |

---

## Customization Tips

- **Add more platforms:** Duplicate any posting node, change the API endpoint
- **Change posting schedule:** Edit the Schedule Trigger node's interval
- **Custom AI prompts:** Edit the system prompts in AI nodes to match your brand voice
- **Approval workflow:** Insert a "Wait for approval" node before posting to review AI-generated content
- **Multiple accounts:** Duplicate credential nodes for different brand accounts

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Credentials not found" | Click the node → Credential → Create New → enter API keys |
| Webhook returns 404 | Make sure the workflow is **Active** (not just saved) |
| Posts only go to 1 platform | Check that all destination nodes are enabled (not greyed out) |
| AI replies sound generic | Edit the system prompt in the AI node to include your brand voice examples |
| Rate limit errors | Add a "Wait" node between API calls (1-2 second delay) |

---

**Need help?** Open an issue at github.com/DrGalio/demaciains-paywall

Built by Demaciains · Sold as-is · No refunds on digital products
