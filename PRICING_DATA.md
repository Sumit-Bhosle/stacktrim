# PRICING_DATA.md

Pricing data was collected from each vendor’s official pricing page and verified on 2026-05-13. The audit engine uses this data as the basis for all savings recommendations. Where enterprise pricing is custom, the audit engine uses only plans with publicly listed prices and treats enterprise tiers as informational rather than making precise savings claims.

---

## Cursor

- Pro: $20/user/month — https://cursor.com/pricing — verified 2026-05-13
- Business: $40/user/month — https://cursor.com/pricing — verified 2026-05-13

### Audit Logic Notes
- If a team of 1–2 users is on Business, recommend downgrading to Pro unless admin controls or SSO are explicitly required.
- Estimated savings: $20/user/month.

---

## GitHub Copilot

- Individual: $10/user/month — https://github.com/features/copilot/plans — verified 2026-05-13
- Business: $19/user/month — https://github.com/features/copilot/plans — verified 2026-05-13
- Enterprise: $39/user/month — https://github.com/features/copilot/plans — verified 2026-05-13

### Audit Logic Notes
- Small teams on Enterprise may be overpaying if advanced compliance features are not required.
- Business is typically sufficient for most startups.

---

## Claude

- Pro: $20/month — https://www.anthropic.com/pricing — verified 2026-05-13
- Max 5x: $100/month — https://www.anthropic.com/pricing — verified 2026-05-13
- Max 20x: $200/month — https://www.anthropic.com/pricing — verified 2026-05-13
- Team: $30/user/month (annual billing) — https://www.anthropic.com/pricing — verified 2026-05-13

### Audit Logic Notes
- Team plans for very small teams may be unnecessary unless shared administration features are needed.
- Max plans should be justified by high usage.

---

## ChatGPT

- Plus: $20/user/month — https://openai.com/chatgpt/pricing — verified 2026-05-13
- Team: $25/user/month (annual) or $30/user/month (monthly) — https://openai.com/chatgpt/pricing — verified 2026-05-13
- Enterprise: Custom pricing — https://openai.com/chatgpt/pricing — verified 2026-05-13

### Audit Logic Notes
- Teams with 1–2 users on ChatGPT Team may be candidates for Plus if shared workspace features are not required.

---

## OpenAI API

- GPT-4.1 input: usage-based — https://openai.com/api/pricing — verified 2026-05-13
- GPT-4.1 output: usage-based — https://openai.com/api/pricing — verified 2026-05-13

### Audit Logic Notes
- API spend is highly variable. Recommendations focus on identifying discounted credit opportunities rather than plan downgrades.

---

## Anthropic API

- Claude API pricing: usage-based — https://www.anthropic.com/pricing#api — verified 2026-05-13

### Audit Logic Notes
- Recommendations focus on potential savings via infrastructure credits rather than fixed-price alternatives.

---

## Gemini

- Gemini Advanced (Google AI Pro): $19.99/month — https://one.google.com/about/google-ai-plans/ — verified 2026-05-13
- Gemini API: usage-based — https://ai.google.dev/pricing — verified 2026-05-13

### Audit Logic Notes
- Gemini can be a lower-cost alternative depending on use case and model needs.

---

## Windsurf

- Pro: $15/user/month — https://windsurf.com/pricing — verified 2026-05-13
- Teams: $30/user/month — https://windsurf.com/pricing — verified 2026-05-13

### Audit Logic Notes
- Used as an additional coding assistant benchmark alongside Cursor and Copilot.

---

## Pricing Methodology

All recommendations are based on publicly listed prices from official vendor websites. The audit engine combines this pricing data with deterministic business rules that consider:

- Team size
- Current plan
- Number of seats
- Primary use case
- Monthly spend

The application does not rely on AI to calculate savings. AI is used only to generate a human-readable executive summary of the deterministic audit results.

---

## Limitations

- Enterprise plans with custom pricing are treated qualitatively.
- Vendor pricing may change after the verification date.
- Usage-based API spend recommendations are directional rather than exact.

These limitations are surfaced transparently so users understand the assumptions behind each recommendation.