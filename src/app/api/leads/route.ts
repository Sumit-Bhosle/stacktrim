import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/db/supabase";
import { resend } from "@/lib/resend";
import { leadSchema } from "@/lib/lead-schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request payload
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot spam protection
    if (data.website && data.website.trim() !== "") {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const isHighValue = data.monthlySavings > 500;

    // Create Supabase client
    const supabase = createClient();

    // Store lead in Supabase
      const { error: insertError } = await supabase.from("leads").insert({
          audit_id: data.auditId,
          email: data.email,
          company_name: data.companyName || null,
          role: data.role || null,
          team_size: data.teamSize || null,
          estimated_monthly_savings: data.monthlySavings,
          estimated_annual_savings: data.annualSavings,
          is_high_value: isHighValue,

          audit_summary: body.summary ?? null,
          audit_data: body.auditData ?? null,
      }); 

    if (insertError) {
      console.error("Supabase insert error:", insertError);

      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    // Send confirmation email
    if (resend) {
    await resend.emails.send({
        from: process.env["FROM_EMAIL"]!,
        to: data.email,
        subject: "Your StackTrim audit is ready",
        html: `
        <h2>Your AI Spend Audit Summary</h2>
        <p>
            You identified potential savings of
            <strong>$${data.monthlySavings}/month</strong>
            ($${data.annualSavings}/year).
        </p>
        ${
            isHighValue
            ? "<p>Our team may reach out with additional optimization opportunities.</p>"
            : "<p>We'll notify you when new optimization opportunities are available.</p>"
        }
        `,
    });
    }

    return NextResponse.json({
      success: true,
      isHighValue,
    });
  } catch (error) {
    console.error("Lead API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}