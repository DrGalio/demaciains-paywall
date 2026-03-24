# Consulting AI — Setup Guide

This guide walks you through installing the Consulting AI Config Pack in three platforms: ChatGPT Custom GPT, Claude Projects, and Gemini Gems. Pick the platform that fits your workflow — or set it up on all three.

---

## Option 1: ChatGPT Custom GPT

ChatGPT Custom GPTs let you create a dedicated AI assistant with custom instructions, knowledge files, and conversation starters.

### Step-by-Step

1. **Go to ChatGPT** — Visit [chat.openai.com](https://chat.openai.com) and sign in (requires ChatGPT Plus or Team plan).

2. **Create a Custom GPT** — Click your profile icon → "My GPTs" → "Create a GPT." This opens the GPT Builder.

3. **Configure the GPT** — In the Builder, describe what you want in plain language:
   > "Build me a consulting firm assistant that handles client inquiries, explains our services and methodology, discusses pricing, and guides prospects toward a discovery session. Professional, authoritative, and consultative."

4. **Add the System Prompt** — Switch to the "Configure" tab. Under "Instructions," paste the entire contents of `system-prompt.md`. This is the AI's core behavior.

5. **Upload Knowledge Files** — In the same "Configure" tab, scroll to "Knowledge" and upload:
   - `knowledge-base.md` (the 15 Q&A pairs)
   - `conversation-starters.md` (optional, or copy them into the Conversation Starters section)

6. **Set Conversation Starters** — Under "Conversation Starters" in the Configure tab, add the prompts from `conversation-starters.md` one by one.

7. **Configure Capabilities** — Disable capabilities you don't need (DALL-E, Code Interpreter) unless your workflow requires them. Web browsing can be useful for research and competitive analysis.

8. **Save and Share** — Click "Save" and choose who can access your GPT. You can keep it private, share with your team via link, or publish it to the GPT Store.

---

## Option 2: Claude Projects (Anthropic)

Claude Projects let you create persistent workspaces with custom instructions and uploaded documents.

### Step-by-Step

1. **Go to Claude** — Visit [claude.ai](https://claude.ai) and sign in (requires Claude Pro or Team plan).

2. **Create a Project** — Click "Projects" in the sidebar → "Create Project." Name it something like "Consulting AI Assistant."

3. **Add Project Instructions** — In the project's "Instructions" field, paste the entire contents of `system-prompt.md`. These instructions persist across every conversation in the project.

4. **Upload Knowledge Documents** — In the project's "Knowledge" section, upload:
   - `knowledge-base.md`
   - `conversation-starters.md`

   Claude will reference these documents in every conversation within the project.

5. **Start Using It** — Open a new conversation within the project. Claude will automatically apply your custom instructions and reference the uploaded knowledge. You can start with any of the conversation starters from the file.

6. **Customize Further** — Edit the project instructions anytime to add your firm name, specific service offerings, team bios, or brand-specific language.

---

## Option 3: Gemini Gems (Google)

Gemini Gems are Google's equivalent of custom AI assistants, available through Gemini Advanced.

### Step-by-Step

1. **Go to Gemini** — Visit [gemini.google.com](https://gemini.google.com) and sign in (requires Gemini Advanced, included with Google One AI Premium).

2. **Create a Gem** — Click "Gems" in the sidebar → "New Gem." Name it "Consulting AI Assistant."

3. **Add Instructions** — In the Gem's "Instructions" field, paste the entire contents of `system-prompt.md`. This defines the AI's behavior and personality.

4. **Upload Files** — Upload `knowledge-base.md` and `conversation-starters.md` to the Gem's knowledge base. Gemini will use these as reference material during conversations.

5. **Set Suggested Prompts** — Add conversation starters from `conversation-starters.md` as suggested prompts so users can quickly begin common interactions.

6. **Save and Use** — Save your Gem and access it from the Gems sidebar whenever you need it.

---

## Customization Tips

After setup, personalize your AI assistant to make it truly yours:

- **Add your firm name and branding** to the system prompt.
- **Include your specific service offerings** — practice areas, industry verticals, case studies.
- **Add team member bios** so the AI can introduce relevant consultants.
- **Include your specific engagement models** — pricing tiers, project timelines, proposal process.
- **Update the knowledge base** with anonymized case studies that demonstrate your impact.
- **Add local context** — office locations, regional expertise, industry certifications.

The more context you provide, the more useful and authentic your AI assistant will be.

---

## ROI Calculator

Estimate the value of your Consulting AI Assistant:

| Metric | Without AI | With AI | Monthly Value |
|---|---|---|---|
| Inbound inquiries handled (qualified) | 20/mo by BD team | 15 pre-qualified by AI | 15 BD hours saved |
| Average BD team cost per hour | $75/hour | — | — |
| BD time saved | — | 15 hours/mo | **$1,125/mo** |
| After-hours inquiries captured | 8/mo lost | 0 lost | **$40,000/mo** (at $5K avg project) |
| Proposal-ready prospects identified | 5/mo | 12/mo (+7) | **$35,000/mo** pipeline |
| Client onboarding time reduced | 5 hours/client | 2 hours/client | **$2,250/mo** |
| **Total estimated monthly value** | — | — | **$78,375/mo** |
| **One-time pack cost** | — | — | **$29** |
| **ROI** | — | — | **270,000%** in month one |

*Your actual results will vary based on inquiry volume, average deal size, and BD team efficiency. Even conservative estimates show the pack pays for itself within hours.*

---

## Need Help?

If you run into issues during setup, most platforms have robust help documentation:
- [ChatGPT Custom GPT Guide](https://help.openai.com)
- [Claude Projects Guide](https://support.anthropic.com)
- [Gemini Gems Guide](https://support.google.com/gemini)

You can also reach out to us at Demaciains for support.
