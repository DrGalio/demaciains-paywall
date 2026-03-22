# n8n Customer Onboarding Automation Pack — Setup Guide

## What's Included

5 production-ready n8n workflows that automate your entire customer onboarding process:

| # | Workflow | What It Does | Time Saved |
|---|----------|-------------|------------|
| 1 | Welcome Email + Credential Delivery | Auto-send welcome emails with login credentials when new customers sign up | 3 hrs/week |
| 2 | Onboarding Checklist Tracker | Daily check of customer progress, auto-nudge those falling behind | 5 hrs/week |
| 3 | AI Knowledge Base Generator | Generate personalized FAQ and guides using GPT-4 for each customer | 4 hrs/week |
| 4 | 7-Day Drip Campaign | Automated email sequence guiding customers through first week | 6 hrs/week |
| 5 | Health Score Dashboard | Monitor onboarding health, alert team on at-risk customers | 3 hrs/week |

**Total estimated time savings: 21+ hours/week (~$2,100/mo at $25/hr)**

---

## Prerequisites

- **n8n instance** (self-hosted free, or n8n Cloud from $20/mo)
- **Email service** (Gmail, SMTP, SendGrid, or any n8n-supported email)
- **Slack workspace** (optional — for health score alerts)
- **OpenAI API key** (optional — only for Workflow 3, AI Knowledge Base Generator)

---

## Quick Start (15 Minutes)

### Step 1: Import Workflows

1. Open your n8n instance
2. Go to **Workflows** → **Import from File**
3. Import each `.json` file in order (01 → 05)
4. Each workflow will appear as a separate workflow in your n8n dashboard

### Step 2: Configure Email Credentials

For each workflow, you'll need to set up email credentials:

1. Open the workflow
2. Click on any **Send Email** node
3. Click **Credentials** → **Create New**
4. Choose your email provider:
   - **Gmail:** Use OAuth2 (recommended)
   - **SMTP:** Enter host, port, username, password
   - **SendGrid:** Enter API key
5. Test the connection

### Step 3: Activate Workflows

1. Toggle each workflow to **Active**
2. Workflow 1 (Welcome Email) — trigger via webhook or connect to your signup form
3. Workflows 2 & 5 — run on schedule (already configured)
4. Workflow 3 — trigger via webhook when new customer signs up
5. Workflow 4 — trigger via webhook to start drip sequence

---

## Detailed Setup

### Workflow 1: Welcome Email + Credential Delivery

**Trigger:** Webhook (`POST /webhook/new-customer`)

**Input JSON:**
```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "plan": "pro",
  "company": "Acme Corp"
}
```

**Customization:**
- Edit email templates in the **Send Welcome Email** node
- Change login URL and dashboard URL in **Prepare Welcome Packet** node
- Modify onboarding steps array to match your process

**Connect to your signup form:**
- Point your form's webhook URL to: `https://your-n8n.com/webhook/new-customer`
- Map form fields to the JSON structure above

### Workflow 2: Onboarding Checklist Tracker

**Trigger:** Daily schedule (midnight)

**Customization:**
- In **Fetch Active Onboardings**, replace mock data with your database API
- Adjust the "behind schedule" threshold (default: <3 steps by day 3)
- Edit the nudge email template

**Connecting to your database:**
Replace the mock data in the Code node with an HTTP Request node pointing to your API:
```
GET https://your-api.com/onboarding/active
```

### Workflow 3: AI Knowledge Base Generator

**Trigger:** Webhook (`POST /webhook/generate-kb`)

**Input JSON:**
```json
{
  "customerName": "Alice Chen",
  "email": "alice@example.com",
  "plan": "pro",
  "industry": "SaaS",
  "company": "TechCorp"
}
```

**Requirements:**
- OpenAI API key (GPT-4o-mini model)
- Set up HTTP Header Auth credential with your OpenAI key

**Customization:**
- Edit the system prompt to generate different knowledge base content
- Adjust the output structure in the Code node

### Workflow 4: 7-Day Drip Campaign

**Trigger:** Webhook (`POST /webhook/start-drip`)

**Input JSON:**
```json
{
  "name": "Customer Name",
  "email": "customer@example.com",
  "plan": "pro"
}
```

**Customization:**
- Edit email content in the **Build Drip Sequence** Code node
- Adjust timing (currently: 24 hours between emails)
- Add/remove emails from the sequence
- Personalize links and resources

**Important:** The wait node uses hours. Make sure your n8n execution mode supports long-running workflows (recommended: queue mode with persistent execution storage).

### Workflow 5: Health Score Dashboard

**Trigger:** Every 6 hours (configurable)

**Customization:**
- Replace mock customer data with your database API
- Adjust scoring weights in the Code node:
  - Step completion: 40%
  - Recency: 30%
  - Engagement: 20%
  - Support friction: 10%
- Configure Slack channel for alerts
- Edit re-engagement email template

**Connecting Slack:**
1. Create Slack app at api.slack.com
2. Add OAuth scopes: `chat:write`, `channels:read`
3. Install to workspace
4. Add credentials in n8n

---

## ROI Calculator

### Assumptions
- Average customer support time per onboarding: 45 minutes
- Customers per month: 40
- Support staff hourly cost: $25

### Before Automation
- Manual onboarding support: 40 × 45 min = 30 hrs/month
- Monthly cost: 30 × $25 = **$750/month**
- Staff needed: 0.75 FTE

### After Automation
- Manual support needed: ~5 hrs/month (edge cases only)
- Monthly cost: 5 × $25 = **$125/month**
- n8n cost: $0 (self-hosted) or $20/mo (cloud)

### Savings
- **$625/month** ($7,500/year) in support costs
- **25 hours/month** freed for high-value work
- **Faster time-to-value** for customers (reduced churn)
- **Consistent experience** (no dropped balls)

### One-Time Cost
- This automation pack: **$29** ← you already bought it
- Setup time: 15-30 minutes
- **Payback period: First week**

---

## Troubleshooting

### Emails not sending
- Check email credentials are configured correctly
- Verify sender email is authorized in your email provider
- Check n8n execution logs for errors

### Webhook not triggering
- Ensure workflow is **Active**
- Check webhook URL includes correct path
- Test with curl: `curl -X POST https://your-n8n.com/webhook/new-customer -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","plan":"starter"}'`

### Health scores not calculating
- Verify the schedule trigger is active
- Check that customer data source is accessible
- Review Code node for syntax errors

### Drip campaign timing issues
- Ensure n8n is running in queue mode for long-running workflows
- Check execution history for failed wait nodes
- Verify email service rate limits

---

## Support

- **n8n Documentation:** https://docs.n8n.io
- **n8n Community:** https://community.n8n.io
- **Workflow issues:** Open an issue on the GitHub repo

---

## What's Next?

After setting up this pack, consider:
1. **n8n Lead Gen Pack** — Automate lead capture and qualification
2. **n8n Social Media Pack** — Cross-post, schedule, and repurpose content
3. **AI Agent Config Pack** — Pre-built AI assistants for your industry

---

*Built by Demaciains — AI-powered automation for growing businesses*
*https://drgalio.github.io/demaciains-paywall/*
