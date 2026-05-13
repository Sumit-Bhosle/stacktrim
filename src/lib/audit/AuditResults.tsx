/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ToolResult = {
  toolName: string;
  currentSpend: number;
  recommendedSpend: number;
  monthlySavings: number;
  annualSavings: number;
  recommendation: string;
  reason: string;
  action: string;
};

type AuditResultsProps = {
  results: {
    toolResults?: ToolResult[];
  };
  summary: string | null;
  monthlySavings: number;
  annualSavings: number;
};

export default function AuditResults({
  results,
  summary,
  monthlySavings,
  annualSavings,
}: AuditResultsProps) {
  const toolResults = results?.toolResults ?? [];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <Card className="border-emerald-200 bg-white shadow-sm">
        <CardContent className="p-10 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Potential Savings
          </p>

          <h1 className="mt-4 text-5xl font-bold text-emerald-600">
            ${monthlySavings.toLocaleString()}/mo
          </h1>

          <p className="mt-2 text-xl text-muted-foreground">
            ${annualSavings.toLocaleString()}/year
          </p>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          <h2 className="mb-3 text-2xl font-semibold">AI Summary</h2>
          <p className="leading-8 text-muted-foreground">
            {summary || "No summary available."}
          </p>
        </CardContent>
      </Card>

      {/* Tool Breakdown */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Audit Breakdown</h2>

        {toolResults.map((tool) => (
          <Card key={tool.toolName} className="bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">{tool.toolName}</h3>

                <Badge variant="secondary" className="w-fit">
                  Save ${tool.monthlySavings.toLocaleString()}/mo
                </Badge>
              </div>

              <div className="mb-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Current Spend
                  </p>
                  <p className="text-lg font-semibold">
                    ${tool.currentSpend.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Recommended Spend
                  </p>
                  <p className="text-lg font-semibold">
                    ${tool.recommendedSpend.toLocaleString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Recommendation
                  </p>
                  <p className="text-lg font-semibold text-emerald-600">
                    {tool.recommendation}
                  </p>
                </div>
              </div>

              <p className="leading-7 text-muted-foreground">
                {tool.reason}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Credex CTA */}
      {monthlySavings > 500 && (
        <Card className="border-emerald-200 bg-emerald-50 shadow-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold">
              Unlock Even More Savings
            </h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              Credex can help your team access discounted AI credits and reduce
              infrastructure costs even further.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}