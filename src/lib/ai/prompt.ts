import type { AuditResult } from "@/lib/audit/types";

export function buildAuditSummaryPrompt(audit: AuditResult): string {
  const recommendations = audit.toolResults
    .filter((tool) => tool.monthlySavings > 0)
    .map(
      (tool) =>
        `- ${tool.toolName}: ${tool.recommendation} (save $${tool.monthlySavings.toFixed(
          0
        )}/month)`
    )
    .join("\n");

  return `
You are an expert AI infrastructure cost consultant.

Write a concise executive summary (90-120 words) for a startup founder.

Requirements:
- Professional and direct tone
- Mention total monthly and annual savings
- Highlight the biggest cost drivers
- Explain why the recommendations make sense
- If savings exceed $500/month, mention that Credex can help secure discounted AI credits
- If savings are minimal, say the stack is already well optimized
- Do not use bullet points
- Do not exaggerate

Audit Data:
- Current monthly spend: $${audit.totalCurrentSpend.toFixed(0)}
- Monthly savings: $${audit.totalMonthlySavings.toFixed(0)}
- Annual savings: $${audit.totalAnnualSavings.toFixed(0)}

Recommendations:
${recommendations || "- No meaningful savings opportunities identified."}
`.trim();
}