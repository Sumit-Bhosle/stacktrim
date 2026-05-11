export type AuditAction =
  | "keep"
  | "downgrade"
  | "switch"
  | "credits"
  | "remove";

export interface ToolAuditResult {
  toolName: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  action: AuditAction;
  recommendation: string;
  reason: string;
}

export interface AuditResult {
  toolResults: ToolAuditResult[];
  totalCurrentSpend: number;
  totalRecommendedSpend: number;
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  summary: string;
}