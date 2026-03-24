# Restaurant AI — Setup Guide

This guide walks you through installing the Restaurant AI Config Pack in three platforms: ChatGPT Custom GPT, Claude Projects, and Gemini Gems. Pick the platform that fits your workflow — or set it up on all three.

---

## Option 1: ChatGPT Custom GPT

ChatGPT Custom GPTs let you create a dedicated AI assistant with custom instructions, knowledge files, and conversation starters.

### Step-by-Step

1. **Go to ChatGPT** — Visit [chat.openai.com](https://chat.openai.com) and sign in (requires ChatGPT Plus or Team plan).

2. **Create a Custom GPT** — Click your profile icon → "My GPTs" → "Create a GPT." This opens the GPT Builder.

3. **Configure the GPT** — In the Builder, describe what you want in plain language:
   > "Build me a restaurant assistant that helps guests with reservations, menu questions, dietary needs, private dining, and takeout orders. It should be warm, professional, and hospitality-focused."

4. **Add the System Prompt** — Switch to the "Configure" tab. Under "Instructions," paste the entire contents of `system-prompt.md`. This is the AI's core behavior.

5. **Upload Knowledge Files** — In the same "Configure" tab, scroll to "Knowledge" and upload:
   - `knowledge-base.md` (the 15 Q&A pairs)
   - `conversation-starters.md` (optional, or copy them into the Conversation Starters section)

6. **Set Conversation Starters** — Under "Conversation Starters" in the Configure tab, add the prompts from `conversation-starters.md` one by one.

7. **Configure Capabilities** — Disable capabilities you don't need (DALL-E, Code Interpreter) unless your workflow requires them. Web browsing can be useful for checking current restaurant reviews or competitor menus.

8. **Save and Share** — Click "Save" and choose who can access your GPT. You can keep it private, share with your team via link, or publish it to the GPT Store.

---

## Option 2: Claude Projects (Anthropic)

Claude Projects let you create persistent workspaces with custom instructions and uploaded documents.

### Step-by-Step

1. **Go to Claude** — Visit [claude.ai](https://claude.ai) and sign in (requires Claude Pro or Team plan).

2. **Create a Project** — Click "Projects" in the sidebar → "Create Project." Name it something like "Restaurant AI Assistant."

3. **Add Project Instructions** — In the project's "Instructions" field, paste the entire contents of `system-prompt.md`. These instructions persist across every conversation in the project.

4. **Upload Knowledge Documents** — In the project's "Knowledge" section, upload:
   - `knowledge-base.md`
   - `conversation-starters.md`

   Claude will reference these documents in every conversation within the project.

5. **Start Using It** — Open a new conversation within the project. Claude will automatically apply your custom instructions and reference the uploaded knowledge. You can start with any of the conversation starters from the file.

6. **Customize Further** — Edit the project instructions anytime to add your restaurant name, specific menu items, staff contacts, or brand-specific language.

---

## Option 3: Gemini Gems (Google)

Gemini Gems are Google's equivalent of custom AI assistants, available through Gemini Advanced.

### Step-by-Step

1. **Go to Gemini** — Visit [gemini.google.com](https://gemini.google.com) and sign in (requires Gemini Advanced, included with Google One AI Premium).

2. **Create a Gem** — Click "Gems" in the sidebar → "New Gem." Name it "Restaurant AI Assistant."

3. **Add Instructions** — In the Gem's "Instructions" field, paste the entire contents of `system-prompt.md`. This defines the AI's behavior and personality.

4. **Upload Files** — Upload `knowledge-base.md` and `conversation-starters.md` to the Gem's knowledge base. Gemini will use these as reference material during conversations.

5. **Set Suggested Prompts** — Add conversation starters from `conversation-starters.md` as suggested prompts so users can quickly begin common interactions.

6. **Save and Use** — Save your Gem and access it from the Gems sidebar whenever you need it.

---

## Customization Tips

After setup, personalize your AI assistant to make it truly yours:

- **Add your restaurant name and branding** to the system prompt.
- **Include your specific menu items** — dishes, prices, descriptions, and daily specials.
- **Add staff names and roles** so the AI can direct guests to the right person.
- **Include your specific policies** — reservation rules, cancellation terms, private event minimums.
- **Update the allergen matrix** with your actual menu items and allergen profiles.
- **Add local context** — parking information, neighborhood directions, nearby attractions.

The more context you provide, the more useful and authentic your AI assistant will be.

---

## ROI Calculator

Estimate the value of your Restaurant AI Assistant:

| Metric | Without AI | With AI | Monthly Value |
|---|---|---|---|
| Phone calls answered (reservations, hours, menu Qs) | 100/mo by staff | 70 handled by AI | 30 staff hours saved |
| Average staff cost per hour | $15/hour | — | — |
| Staff time saved | — | 30 hours/mo | **$450/mo** |
| Missed reservation calls (after hours) | 20/mo lost | 0 lost | **$600/mo** (at $30 avg ticket) |
| Private event inquiries captured | 3/mo | 8/mo (+5) | **$2,500/mo** (at $500 avg event) |
| Guest satisfaction improvement | Baseline | Fewer wait times, faster answers | Repeat visits ↑ |
| **Total estimated monthly value** | — | — | **$3,550/mo** |
| **One-time pack cost** | — | — | **$29** |
| **ROI** | — | — | **12,140%** in month one |

*Your actual results will vary based on call volume, average ticket price, and event booking rates. Even conservative estimates show the pack pays for itself in the first day.*

---

## Need Help?

If you run into issues during setup, most platforms have robust help documentation:
- [ChatGPT Custom GPT Guide](https://help.openai.com)
- [Claude Projects Guide](https://support.anthropic.com)
- [Gemini Gems Guide](https://support.google.com/gemini)

You can also reach out to us at Demaciains for support.
