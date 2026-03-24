# Setup Guide: E-Commerce AI Shopping Assistant

> Deploy your AI shopping assistant in minutes on ChatGPT, Claude, or Gemini. This guide covers setup for all three platforms plus an ROI calculator to justify the investment.

---

## Quick Start (5-Minute Setup)

**Get your AI shopping assistant running in 5 minutes:**

1. **Pick your platform** (ChatGPT, Claude, or Gemini — see sections below)
2. **Copy the system prompt** from `system-prompt.md`
3. **Paste your store info** into `knowledge-base.md` (just fill in the `[PLACEHOLDER]` values)
4. **Upload both files** to your chosen platform
5. **Test with 3 scenarios:** product question, order status, return request

That's it! You now have a 24/7 AI shopping assistant. Read on for platform-specific details.

---

## Platform 1: ChatGPT Custom GPT

### Prerequisites
- ChatGPT Plus, Team, or Enterprise subscription ($20/month for Plus)
- OpenAI account

### Step-by-Step Setup

#### Step 1: Create a New GPT
1. Go to [chat.openai.com/gpts](https://chat.openai.com/gpts)
2. Click **"Create a GPT"**
3. You'll enter the GPT Builder interface

#### Step 2: Configure the GPT
1. **Name:** `[Your Store Name] Shopping Assistant`
2. **Description:** `AI shopping assistant for [Your Store]. Get product recommendations, track orders, process returns, and more — 24/7.`
3. **Instructions:** Copy the entire contents of `system-prompt.md` and paste it here

#### Step 3: Upload Knowledge Base
1. In the GPT Builder, go to the **"Knowledge"** section
2. Upload your customized `knowledge-base.md` file
3. Optionally upload:
   - Product catalog (CSV/JSON)
   - Size chart images
   - Return policy document
   - FAQ document

#### Step 4: Configure Conversation Starters
1. In the **"Configure"** tab, find **"Conversation starters"**
2. Add these starter prompts:
   - "Help me find a product"
   - "Check my order status"
   - "I need to return an item"
   - "What's on sale right now?"
   - "What size should I order?"

#### Step 5: Set Capabilities
1. Enable **Web Browsing** (for real-time stock checks if using web-based inventory)
2. Enable **Code Interpreter** (for calculations, data lookups)
3. Disable **DALL-E Image Generation** (unless you want AI-generated product images)

#### Step 6: Test & Publish
1. Click **"Preview"** to test your GPT
2. Run through these test scenarios:
   - "What size should I get in your classic t-shirt?"
   - "Where is my order #12345?"
   - "I want to return a jacket I bought last week"
   - "Do you have any deals today?"
3. When satisfied, click **"Save"** → **"Publish"**
4. Choose visibility: **Only me**, **Anyone with a link**, or **Public**

#### Sharing Your GPT
- **Internal use:** Share the link with your customer support team
- **Customer-facing:** Embed the GPT link in your website chat widget
- **API access:** Use the GPT's API endpoint for custom integrations

---

## Platform 2: Claude Projects (Anthropic)

### Prerequisites
- Claude Pro subscription ($20/month) or Claude Team/Enterprise
- Anthropic account

### Step-by-Step Setup

#### Step 1: Create a Project
1. Go to [claude.ai](https://claude.ai)
2. Click **"Projects"** in the sidebar
3. Click **"Create Project"**
4. **Name:** `[Your Store Name] Shopping Assistant`
5. **Description:** `AI shopping assistant for customer support, product recommendations, and order management`

#### Step 2: Add System Instructions
1. In the project, click **"Set Project Instructions"**
2. Paste the entire contents of `system-prompt.md`
3. Save the instructions

#### Step 3: Upload Knowledge Files
1. In the project's **"Knowledge"** section, upload:
   - Your customized `knowledge-base.md`
   - Product catalog (any format: CSV, JSON, Excel, PDF)
   - Size charts, policy documents, FAQ files
2. Claude will automatically index these files for retrieval

#### Step 4: Upload Conversation Starters (Reference)
1. Upload `conversation-starters.md` to the project knowledge
2. Reference these in your system prompt if needed:
   ```
   When starting a conversation, use the conversation starters 
   defined in conversation-starters.md as guidance for tone and structure.
   ```

#### Step 5: Test the Assistant
1. Start a new conversation in the project
2. Test with the same scenarios as ChatGPT:
   - Product recommendation requests
   - Order status inquiries
   - Return/exchange processing
   - Size guidance
   - Shipping estimates

#### Step 6: Integrate with Your Store
Claude Projects work best as an internal tool. For customer-facing deployment:
1. **API Integration:** Use the Claude API to embed the assistant in your website
   - Get your API key from [console.anthropic.com](https://console.anthropic.com)
   - Use the system prompt and knowledge base in your API calls
2. **Chat Widget:** Use a service like Crisp, Intercom, or a custom widget to connect to the Claude API

#### Claude API Setup (Customer-Facing)
```python
import anthropic

client = anthropic.Anthropic(api_key="your-api-key")

# Load your system prompt
with open("system-prompt.md", "r") as f:
    system_prompt = f.read()

# Load your knowledge base
with open("knowledge-base.md", "r") as f:
    knowledge_base = f.read()

# Create a chat completion
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system=system_prompt + "\n\n" + knowledge_base,
    messages=[
        {"role": "user", "content": customer_message}
    ]
)
```

---

## Platform 3: Gemini Gems (Google)

### Prerequisites
- Google One AI Premium subscription ($19.99/month) or Google Workspace with Gemini
- Google account

### Step-by-Step Setup

#### Step 1: Create a Gem
1. Go to [gemini.google.com](https://gemini.google.com)
2. Click **"Gems"** in the sidebar (or the Gems icon)
3. Click **"New Gem"** or **"Create a Gem"**

#### Step 2: Configure Your Gem
1. **Name:** `[Your Store Name] Shopping Assistant`
2. **Description:** `Your personal shopping assistant — product recommendations, order tracking, returns, and more, available 24/7.`

#### Step 3: Add Instructions
1. In the **"Instructions"** field, paste your customized `system-prompt.md` contents
2. Add any additional context:
   ```
   Additional Context:
   - Store: [Your Store Name]
   - Website: [Your URL]
   - Support Email: [Your Email]
   - Current Promotion: [Any active promotion]
   ```

#### Step 4: Add Knowledge (Google Drive Integration)
1. Upload your `knowledge-base.md` to Google Drive
2. In the Gem configuration, reference the document
3. You can also upload:
   - Product spreadsheets (Google Sheets)
   - Policy documents (Google Docs)
   - Size charts (images in Drive)

#### Step 5: Test Your Gem
1. Start a conversation with your Gem
2. Run through standard test scenarios
3. Verify that knowledge base information is accessible
4. Check that tone and responses match your brand voice

#### Step 6: Share Your Gem
1. Click **"Share"** on your Gem
2. Options:
   - **Private:** Only you can use it
   - **Shared:** Specific people or Google Workspace groups
   - **Public:** Anyone with the link (Gemini Business/Enterprise)

#### Gemini API Integration (Advanced)
For customer-facing deployment, use the Gemini API:

```python
import google.generativeai as genai

genai.configure(api_key="your-api-key")

# Load your system prompt and knowledge base
with open("system-prompt.md", "r") as f:
    system_prompt = f.read()

with open("knowledge-base.md", "r") as f:
    knowledge_base = f.read()

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash",
    system_instruction=system_prompt + "\n\n" + knowledge_base
)

response = model.generate_content(customer_message)
print(response.text)
```

---

## ROI Calculator

### The Business Case for an AI Shopping Assistant

Use this calculator to estimate the return on investment for your AI shopping assistant.

### Input Your Numbers

| Metric | Your Store | Industry Average |
|--------|-----------|-----------------|
| Monthly website visitors | [INPUT] | 50,000 |
| Current conversion rate | [INPUT] | 2.5% |
| Average order value (AOV) | [INPUT] | $75 |
| Monthly support tickets | [INPUT] | 500 |
| Cost per support ticket (human agent) | [INPUT] | $7 |
| Hours spent on order tracking per week | [INPUT] | 15 |
| Average hourly wage (support staff) | [INPUT] | $18 |
| Cart abandonment rate | [INPUT] | 70% |

### Estimated Impact

#### 1. Customer Support Deflection
| Metric | Calculation | Result |
|--------|------------|--------|
| AI can handle | 60-80% of tickets | — |
| Tickets deflected (70%) | [Monthly tickets] × 0.70 | [X] tickets |
| Cost savings per month | [Deflected tickets] × $[cost per ticket] | **$[X]/month** |

#### 2. 24/7 Availability Revenue Capture
| Metric | Calculation | Result |
|--------|------------|--------|
| Off-hours traffic | 30-40% of visitors | — |
| Off-hours conversions without AI | Near zero | $0 |
| Estimated off-hours conversion lift | [Visitors] × 0.35 × [CR] × [AOV] × 0.3 (conservative) | **$[X]/month** |

#### 3. Upsell/Cross-Sell Conversion Lift
| Metric | Calculation | Result |
|--------|------------|--------|
| AI recommendation acceptance rate | 5-15% | — |
| Additional revenue per month | [Monthly orders] × 0.10 × $[avg upsell value] | **$[X]/month** |

#### 4. Cart Recovery Revenue
| Metric | Calculation | Result |
|--------|------------|--------|
| Cart abandonment rate | [INPUT]% | — |
| Recovery rate with AI assistant | 5-10% | — |
| Recovered revenue per month | [Monthly visitors] × [CR] × [Abandonment rate] × 0.08 × [AOV] | **$[X]/month** |

#### 5. Staff Time Savings
| Metric | Calculation | Result |
|--------|------------|--------|
| Hours saved per week | [Current hours] × 0.70 | [X] hours |
| Monthly savings | [Hours saved] × 4.33 × $[hourly wage] | **$[X]/month** |

### ROI Summary

| Category | Monthly Value |
|----------|-------------|
| Support ticket deflection | $[X] |
| 24/7 availability revenue | $[X] |
| Upsell/cross-sell lift | $[X] |
| Cart recovery | $[X] |
| Staff time savings | $[X] |
| **Total Monthly Value** | **$[X]** |
| AI Assistant Cost | $20-50/month |
| **Net Monthly ROI** | **$[X]** |
| **Annual ROI** | **$[X]** |
| **ROI Multiple** | **[X]x** |

### Example Calculation (Medium Store)

**Assumptions:** 50,000 monthly visitors, 2.5% conversion rate, $75 AOV, 500 support tickets/month

| Category | Monthly Value |
|----------|-------------|
| Support deflection (350 tickets × $7) | $2,450 |
| 24/7 availability (17,500 off-hours × 2.5% × $75 × 0.3) | $984 |
| Upsell lift (1,250 orders × 10% × $15 avg upsell) | $1,875 |
| Cart recovery (87,500 carts × 8% × $75) | $5,250 |
| Staff time savings (10.5 hrs/wk × 4.33 × $18) | $818 |
| **Total Monthly Value** | **$11,377** |
| AI Cost | $35 |
| **Net Monthly ROI** | **$11,342** |
| **Annual ROI** | **$136,104** |
| **ROI Multiple** | **324x** |

---

## Troubleshooting

### Common Issues

**AI gives wrong product information:**
- Update your knowledge base with accurate product data
- Ensure the system prompt emphasizes not making up information
- Add specific instructions for your product catalog format

**AI doesn't follow your brand voice:**
- Add more specific tone examples in the system prompt
- Include "DO say this / DON'T say this" examples
- Upload brand voice guidelines as additional knowledge

**AI can't access order data:**
- For real-time order tracking, you'll need API integration
- Use webhooks to connect your e-commerce platform (Shopify, WooCommerce, etc.)
- Consider a custom chatbot solution with backend integration

**AI recommends out-of-stock items:**
- Update your knowledge base regularly (daily or real-time if possible)
- Add explicit instructions: "Always check stock status before recommending"
- Integrate with your inventory API for live stock checks

**Response latency is too high:**
- Reduce knowledge base size (focus on active products only)
- Use a faster model (e.g., GPT-4o-mini, Claude Haiku, Gemini Flash)
- Implement caching for common queries

---

## Maintenance Checklist

### Weekly
- [ ] Update product catalog with new arrivals and discontinued items
- [ ] Check stock levels and update availability
- [ ] Review customer conversations for common issues
- [ ] Update active promotions

### Monthly
- [ ] Review and update FAQ based on new customer questions
- [ ] Update shipping rates if changed
- [ ] Review loyalty program data
- [ ] Analyze conversation analytics (most common topics, resolution rates)

### Quarterly
- [ ] Full knowledge base audit — update policies, pricing, and procedures
- [ ] Review and refresh conversation starters
- [ ] Update ROI calculations with actual data
- [ ] Evaluate platform performance and consider switching if needed

---

## Support & Resources

- **System Prompt:** `system-prompt.md` — The core AI instructions
- **Knowledge Base:** `knowledge-base.md` — Your store's data and policies
- **Conversation Starters:** `conversation-starters.md` — Pre-built interaction templates
- **This Guide:** `setup-guide.md` — Setup instructions and ROI calculator

For questions about this configuration pack, contact [SUPPORT CONTACT].

---

*Last updated: March 2026*
