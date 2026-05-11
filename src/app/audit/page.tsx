/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { loadFormData } from "@/lib/storage";
import { runAudit } from "@/lib/audit/engine";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type AuditFormData = {
  teamSize: number;
  primaryUseCase: "coding" | "writing" | "research" | "data" | "mixed";
  tools: Array<{
    toolName: string;
    plan: string;
    monthlySpend: number;
    seats: number;
  }>;
};

const validUseCases = ["coding", "writing", "research", "data", "mixed"] as const;

function parseFormData(raw: unknown): AuditFormData | null {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return null;
  }

  const maybeTeamSize = Number((raw as any).teamSize);
  const primaryUseCase = (raw as any).primaryUseCase;
  const tools = (raw as any).tools;

  if (
    !Number.isFinite(maybeTeamSize) ||
    !validUseCases.includes(primaryUseCase) ||
    !Array.isArray(tools)
  ) {
    return null;
  }

  const parsedTools = tools.map((tool) => {
    if (
      typeof tool !== "object" ||
      tool === null ||
      typeof (tool as any).toolName !== "string" ||
      typeof (tool as any).plan !== "string"
    ) {
      return null;
    }

    const monthlySpend = Number((tool as any).monthlySpend);
    const seats = Number((tool as any).seats);

    if (!Number.isFinite(monthlySpend) || !Number.isFinite(seats)) {
      return null;
    }

    return {
      toolName: (tool as any).toolName,
      plan: (tool as any).plan,
      monthlySpend,
      seats,
    };
  });

  if (parsedTools.some((tool) => tool === null)) {
    return null;
  }

  return {
    teamSize: maybeTeamSize,
    primaryUseCase,
    tools: parsedTools as AuditFormData["tools"],
  };
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AuditPage() {
  const data = parseFormData(loadFormData());

  if (!data) {
    return (
      <main className="container mx-auto max-w-4xl px-4 py-20">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-8 text-center space-y-4">
            <h1 className="text-2xl font-bold">No audit data found</h1>
            <p className="text-muted-foreground">
              Please return to the homepage and complete the spend form.
            </p>
            <Button asChild>
              <Link href="/">Back to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  const audit = runAudit(data);
  const highSavings = audit.totalMonthlySavings >= 500;

  return (
    <main className="container mx-auto max-w-6xl px-4 py-16 space-y-10">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-linear-to-br from-emerald-500/10 via-white/5 to-cyan-500/10 p-8 md:p-12 backdrop-blur">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Potential Savings Identified
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {formatCurrency(audit.totalMonthlySavings)}
            <span className="text-2xl md:text-4xl text-muted-foreground">
              /month
            </span>
          </h1>

          <p className="text-lg text-muted-foreground">
            {formatCurrency(audit.totalAnnualSavings)} in annual savings
          </p>

          <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
            We analyzed your current AI stack and identified opportunities to
            reduce costs without sacrificing team productivity.
          </p>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Current Spend</p>
            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(audit.totalCurrentSpend)}
            </p>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Optimized Spend</p>
            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(audit.totalRecommendedSpend)}
            </p>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 backdrop-blur">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Tools Audited</p>
            <p className="mt-2 text-3xl font-bold">
              {audit.toolResults.length}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Personalized Summary */}
      <Card className="border-white/10 bg-white/5 backdrop-blur">
        <CardContent className="p-8 space-y-3">
          <h2 className="text-2xl font-semibold">Executive Summary</h2>
          <p className="leading-7 text-muted-foreground">
            {audit.totalMonthlySavings > 0
              ? `Your team could save ${formatCurrency(
                  audit.totalMonthlySavings
                )} per month by moving to more cost-effective plans that better match your ${data.primaryUseCase} workflow.`
              : `Your current AI tooling appears well optimized for your team size and use case. At the moment, there are no meaningful savings opportunities.`}
          </p>
        </CardContent>
      </Card>

      {/* Tool Recommendations */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">Per-Tool Recommendations</h2>
          <p className="mt-2 text-muted-foreground">
            Specific recommendations for each tool in your AI stack.
          </p>
        </div>

        <div className="space-y-4">
          {audit.toolResults.map((tool) => (
            <Card
              key={tool.toolName}
              className="border-white/10 bg-white/5 backdrop-blur"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{tool.toolName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tool.recommendation}
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-sm text-muted-foreground">
                      Monthly Savings
                    </p>
                    <p className="text-2xl font-bold text-emerald-400">
                      {formatCurrency(tool.monthlySavings)}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current Spend</p>
                    <p className="font-semibold">
                      {formatCurrency(tool.currentSpend)}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground">Recommended Spend</p>
                    <p className="font-semibold">
                      {formatCurrency(tool.recommendedSpend)}
                    </p>
                  </div>

                  <div>
                    <p className="text-muted-foreground">Annual Savings</p>
                    <p className="font-semibold text-emerald-400">
                      {formatCurrency(tool.annualSavings)}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-muted-foreground border-t border-white/10 pt-4">
                  {tool.reason}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Card className="border-emerald-500/20 bg-emerald-500/5 backdrop-blur">
        <CardContent className="p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">
            {highSavings
              ? "Unlock Even More Savings with Credex"
              : "Stay Updated on Future Optimization Opportunities"}
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            {highSavings
              ? "Credex helps startups reduce AI infrastructure costs by sourcing discounted credits from leading vendors."
              : "We'll let you know when pricing changes create new opportunities to reduce your AI spend."}
          </p>

          <Button size="lg" className="px-8">
            {highSavings ? "Book a Credex Consultation" : "Get Future Alerts"}
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
