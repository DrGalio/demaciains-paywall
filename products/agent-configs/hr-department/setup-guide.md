# HR Department AI — Setup Guide

This guide walks you through installing the HR Department AI Config Pack in three platforms: ChatGPT Custom GPT, Claude Projects, and Gemini Gems. Pick the platform that fits your workflow — or set it up on all three.

---

## Option 1: ChatGPT Custom GPT

ChatGPT Custom GPTs let you create a dedicated AI assistant with custom instructions, knowledge files, and conversation starters.

### Step-by-Step

1. **Go to ChatGPT** — Visit [chat.openai.com](https://chat.openai.com) and sign in (requires ChatGPT Plus or Team plan).

2. **Create a Custom GPT** — Click your profile icon → "My GPTs" → "Create a GPT." This opens the GPT Builder.

3. **Configure the GPT** — In the Builder, describe what you want in plain language:
   > "Build me an HR assistant that helps employees with benefits questions, leave requests, policy clarification, onboarding support, performance review prep, and general HR inquiries. It should be professional, empathetic, and confidential."

4. **Add the System Prompt** — Switch to the "Configure" tab. Under "Instructions," paste the entire contents of `system-prompt.md`. This is the AI's core behavior.

5. **Upload Knowledge Files** — In the same "Configure" tab, scroll to "Knowledge" and upload:
   - `knowledge-base.md` (the 15 Q&A pairs)
   - `conversation-starters.md` (optional, or copy them into the Conversation Starters section)

6. **Set Conversation Starters** — Under "Conversation Starters" in the Configure tab, add the prompts from `conversation-starters.md` one by one.

7. **Configure Capabilities** — Disable capabilities you don't need (DALL-E, Code Interpreter) unless your workflow requires them. Web browsing is generally not needed for internal HR queries.

8. **Save and Share** — Click "Save" and choose who can access your GPT. For an HR assistant, we recommend keeping it private or sharing with your team via link — not publishing to the GPT Store.

---

## Option 2: Claude Projects (Anthropic)

Claude Projects let you create persistent workspaces with custom instructions and uploaded documents.

### Step-by-Step

1. **Go to Claude** — Visit [claude.ai](https://claude.ai) and sign in (requires Claude Pro or Team plan).

2. **Create a Project** — Click "Projects" in the sidebar → "Create Project." Name it something like "HR AI Assistant."

3. **Add Project Instructions** — In the project's "Instructions" field, paste the entire contents of `system-prompt.md`. These instructions persist across every conversation in the project.

4. **Upload Knowledge Documents** — In the project's "Knowledge" section, upload:
   - `knowledge-base.md`
   - `conversation-starters.md`

   Claude will reference these documents in every conversation within the project.

5. **Start Using It** — Open a new conversation within the project. Claude will automatically apply your custom instructions and reference the uploaded knowledge. You can start with any of the conversation starters from the file.

6. **Customize Further** — Edit the project instructions anytime to add your company name, specific policies, HR team contacts, or brand-specific language.

---

## Option 3: Gemini Gems (Google)

Gemini Gems are Google's equivalent of custom AI assistants, available through Gemini Advanced.

### Step-by-Step

1. **Go to Gemini** — Visit [gemini.google.com](https://gemini.google.com) and sign in (requires Gemini Advanced, included with Google One AI Premium).

2. **Create a Gem** — Click "Gems" in the sidebar → "New Gem." Name it "HR AI Assistant."

3. **Add Instructions** — In the Gem's "Instructions" field, paste the entire contents of `system-prompt.md`. This defines the AI's behavior and personality.

4. **Upload Files** — Upload `knowledge-base.md` and `conversation-starters.md` to the Gem's knowledge base. Gemini will use these as reference material during conversations.

5. **Set Suggested Prompts** — Add conversation starters from `conversation-starters.md` as suggested prompts so users can quickly begin common interactions.

6. **Save and Use** — Save your Gem and access it from the Gems sidebar whenever you need it.

---

## Customization Tips

After setup, personalize your AI assistant to make it truly yours:

- **Add your company name and branding** to the system prompt.
- **Include your specific benefits details** — plan names, providers, costs, enrollment dates.
- **Add HR team contacts** so the AI can direct employees to the right person.
- **Include your specific policies** — PTO accrual rates, remote work rules, review timelines.
- **Update the knowledge base** with your actual policy documents and FAQs.
- **Add compliance specifics** — state-specific leave laws, industry regulations, union agreements.

The more context you provide, the more useful and authentic your AI assistant will be.

---

## ROI Calculator

Estimate the value of your HR Department AI Assistant:

| Metric | Without AI | With AI | Monthly Value |
|---|---|---|---|
| HR tickets/emails per month | 200/mo handled by HR team | 140 handled by AI | 60 HR hours saved |
| Average HR team cost per hour | $35/hour | — | — |
| HR time saved | — | 60 hours/mo | **$2,100/mo** |
| Employee self-service resolution | 30% of questions | 70% resolved by AI | Reduced escalations |
| New hire onboarding time | 8 hours HR time/hire | 3 hours (AI pre-boarding) | **$500/mo** (at 4 hires/mo) |
| Benefits enrollment questions | 50/mo during OE | 35 handled by AI | **$525/mo** |
| Employee satisfaction improvement | Baseline | Faster response, 24/7 availability | Engagement ↑ |
| **Total estimated monthly value** | — | — | **$3,125/mo** |
| **One-time pack cost** | — | — | **$29** |
| **ROI** | — | — | **10,672%** in month one |

*Your actual results will vary based on company size, HR ticket volume, and employee count. Even conservative estimates show the pack pays for itself within the first day.*

---

## Important Considerations for HR AI

**Confidentiality:** This AI assistant should be configured as an internal tool only. Do not publish it to public GPT stores or make it publicly accessible. It will handle sensitive employee information.

**Data privacy:** Ensure your AI platform's data handling policies align with your company's data privacy requirements (GDPR, CCPA, etc.). Review the platform's data retention and training policies.

**Not a replacement:** The AI assistant is a support tool, not a replacement for human HR professionals. Always maintain human escalation paths for sensitive, complex, or legally significant matters.

**Legal review:** We recommend having your legal team review the system prompt and knowledge base content before deployment to ensure compliance with applicable employment laws and regulations.

---

## Need Help?

If you run into issues during setup, most platforms have robust help documentation:
- [ChatGPT Custom GPT Guide](https://help.openai.com)
- [Claude Projects Guide](https://support.anthropic.com)
- [Gemini Gems Guide](https://support.google.com/gemini)

You can also reach out to us at Demaciains for support.
