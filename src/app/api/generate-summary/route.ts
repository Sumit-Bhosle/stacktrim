import { NextResponse } from "next/server";

import { anthropic } from "@/lib/ai/anthropic";
import { generateFallbackSummary } from "@/lib/ai/fallback-summary";
import { buildAuditSummaryPrompt } from "@/lib/ai/prompt";
import type { AuditResult } from "@/lib/audit/types";

export async function POST(request: Request) {
  const audit = (await request.json()) as AuditResult;

  try {
    const prompt = buildAuditSummaryPrompt(audit);

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-latest",
      max_tokens: 200,
      temperature: 0.3,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text =
      response.content.find((block) => block.type === "text")?.text ??
      generateFallbackSummary(audit);

    return NextResponse.json({
      summary: text,
      source: "anthropic",
    });
  } catch (error) {
    console.error("Failed to generate AI summary:", error);

    return NextResponse.json({
      summary: generateFallbackSummary(audit),
      source: "fallback",
    });
  }
}