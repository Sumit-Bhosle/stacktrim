import type { AuditResult } from "@/lib/audit/types";

export function generateFallbackSummary(audit: AuditResult): string {
  const monthly = audit.totalMonthlySavings;
  const annual = audit.totalAnnualSavings;

  if (monthly <= 0) {
    return `Your current AI stack appears well-optimized. Based on your reported usage, we did not identify any meaningful savings opportunities at this time. We’ll notify you when new pricing changes or optimization opportunities become available.`;
  }

  if (monthly >= 500) {
    return `Your team could save approximately $${monthly.toFixed(
      0
    )} per month ($${annual.toFixed(
      0
    )} annually) by switching to more cost-effective plans and alternatives. Because your savings potential is significant, Credex may be able to unlock even greater reductions through discounted infrastructure credits.`;
  }

  return `We identified potential savings of approximately $${monthly.toFixed(
    0
  )} per month ($${annual.toFixed(
    0
  )} annually) by optimizing your AI tooling mix and plan selection while preserving similar capabilities for your team.`;
}