# PROMPTS.md

## Purpose of the LLM

StackTrim uses an LLM only for one task: generating a short, personalized executive summary of the audit results.

The model does **not** perform any pricing calculations or decide which recommendations to make. All financial logic is deterministic and implemented in code. The LLM receives structured audit results and converts them into a concise narrative that is easier for a founder or engineering manager to understand.

---

## Model Used

- Provider: Anthropic
- Model: Claude Sonnet
- Fallback: Deterministic template summary when the API call fails

---

## Prompt Template

```text
You are an expert SaaS cost optimization consultant.

Write a concise executive summary (80–120 words) for a startup founder.

Use the audit findings below to explain:
- The estimated monthly savings
- The estimated annual savings
- The most important optimization opportunities
- Whether the current AI stack is already well optimized

Tone:
- Professional and direct
- Specific and actionable
- Honest if savings are small

Audit Findings:
{{structured_audit_json}}
````

---

## Example Input

```json
{
  "monthlySavings": 140,
  "annualSavings": 1680,
  "recommendations": [
    {
      "tool": "Cursor",
      "action": "Downgrade to Pro",
      "savings": 40
    },
    {
      "tool": "ChatGPT",
      "action": "Switch from Team to Plus",
      "savings": 100
    }
  ]
}
```

---

## Example Output

```text
Your current AI stack appears to have approximately $140 in avoidable monthly spend, or $1,680 annually. The largest savings opportunities come from downgrading Cursor Business to Pro and moving ChatGPT Team users to Plus if shared workspace features are not required. These changes preserve most functionality while reducing recurring costs. Overall, your stack is well chosen, but there are a few straightforward optimizations that could meaningfully reduce spend.
```

---

## Why I Wrote the Prompt This Way

### Structured Context

The model receives only structured audit output rather than raw user input. This ensures the summary is grounded in deterministic calculations.

### Explicit Word Limit

Constraining the response to 80–120 words keeps the summary concise and avoids generic over-explanation.

### Tone Guidance

The prompt emphasizes honesty so the model does not exaggerate small savings opportunities.

### Clear Output Goals

Listing exactly what to include produces more consistent summaries.

---

## What I Tried That Didn't Work

### Letting the Model Calculate Savings

I initially experimented with sending raw user inputs and asking the model to calculate savings directly. The results were inconsistent and sometimes mathematically incorrect.

### Looser Prompt Instructions

Without a strict word range and tone guidance, the model tended to produce overly generic summaries.

### Passing Unstructured Text

Sending free-form text instead of structured JSON reduced consistency and made the summaries less grounded.

---

## Fallback Strategy

If the Anthropic API call fails for any reason (network issue, quota exhaustion, malformed response), the application generates a deterministic summary template based on the audit results.

Example fallback:

```text
Your audit identified approximately $140 in potential monthly savings ($1,680 annually). The largest opportunities come from optimizing Cursor and ChatGPT plans. These recommendations are based on current public pricing and your reported usage.
```

This ensures the summary feature never blocks the user experience.

---

## Prompt Design Principles

1. Keep calculations deterministic.
2. Use AI only for narrative generation.
3. Constrain output length and tone.
4. Provide structured inputs.
5. Always include a fallback.

---

## Lessons Learned

The most effective use of AI in this project was converting structured business logic into natural language. Using the model for calculations reduced trust and made the system harder to test. Restricting AI to a clearly bounded summarization task produced a much more reliable product.

```
```
