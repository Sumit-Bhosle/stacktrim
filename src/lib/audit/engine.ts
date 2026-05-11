import { TOOL_RULES } from "./rules";
import type { AuditResult, ToolAuditResult } from "./types";
import type { SpendFormValues } from "@/lib/schemas";
export function runAudit(data: SpendFormValues): AuditResult {
  const toolResults: ToolAuditResult[] = [];

  let totalCurrentSpend = 0;
  let totalRecommendedSpend = 0;

  for (const tool of data.tools) {
    const rules = TOOL_RULES[tool.toolName as keyof typeof TOOL_RULES];

    if (!rules) continue;

    const currentSpend = Number(tool.monthlySpend) || 0;
    const seats = Number(tool.seats) || 1;

    totalCurrentSpend += currentSpend;

    // Determine recommended plan based on primary use case
    const recommendedPlan =
      rules.recommendations[
        data.primaryUseCase as keyof typeof rules.recommendations
      ] ?? Object.keys(rules.plans)[0];

    const recommendedUnitPrice =
      rules.plans[recommendedPlan as keyof typeof rules.plans] ?? 0;

    const recommendedSpend = recommendedUnitPrice * seats;

    totalRecommendedSpend += recommendedSpend;

    const monthlySavings = Math.max(0, currentSpend - recommendedSpend);
    const annualSavings = monthlySavings * 12;

    let action: ToolAuditResult["action"] = "keep";
    if (monthlySavings > 0) {
      action = "downgrade";
    }

    const recommendation =
      monthlySavings > 0
        ? `Switch to ${recommendedPlan}`
        : `Stay on ${tool.plan}`;

    const reason =
      monthlySavings > 0
        ? `${recommendedPlan} provides similar value for your ${data.primaryUseCase} workflow at a lower cost.`
        : `Your current plan appears cost-effective for your usage.`;

    toolResults.push({
      toolName: tool.toolName,
      currentSpend,
      recommendedSpend,
      monthlySavings,
      annualSavings,
      action,
      recommendation,
      reason,
    });
  }

  const totalMonthlySavings = Math.max(
    0,
    totalCurrentSpend - totalRecommendedSpend
  );

  const totalAnnualSavings = totalMonthlySavings * 12;

  return {
    toolResults,
    totalCurrentSpend,
    totalRecommendedSpend,
    totalMonthlySavings,
    totalAnnualSavings,
    summary: "",
  };
}