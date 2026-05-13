import { notFound } from "next/navigation";
import { createClient } from "@/lib/db/supabase";
import AuditResults from "@/lib/audit/AuditResults";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    shareId: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { shareId } = await params;

  const supabase = createClient();

  const { data: lead } = await supabase
    .from("leads")
    .select(
      `
      estimated_monthly_savings,
      estimated_annual_savings
      `
    )
    .eq("share_id", shareId)
    .single();

  if (!lead) {
    return {
      title: "AI Spend Audit | StackTrim",
      description: "See how much your startup can save on AI tools.",
    };
  }

  const monthly = Math.round(lead.estimated_monthly_savings ?? 0);
  const annual = Math.round(lead.estimated_annual_savings ?? 0);

  const title = `Save $${monthly}/month on AI tools`;
  const description = `This startup could save $${annual}/year by optimizing its AI stack.`;

  const url = `https://your-domain.com/audit/${shareId}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        type: "article",
        siteName: "StackTrim",
        images: [
          {
            url: `${url}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${url}/opengraph-image`],
      },
    };
}

export default async function SharedAuditPage({ params }: PageProps) {
  const { shareId } = await params;

  const supabase = createClient();

  const { data: lead, error } = await supabase
    .from("leads")
    .select(
      `
      share_id,
      audit_data,
      audit_summary,
      estimated_monthly_savings,
      estimated_annual_savings,
      created_at
      `
    )
    .eq("share_id", shareId)
    .single();

  if (error || !lead || !lead.audit_data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <AuditResults
          results={lead.audit_data}
          summary={lead.audit_summary}
          monthlySavings={lead.estimated_monthly_savings}
          annualSavings={lead.estimated_annual_savings}
        />
      </div>
    </main>
  );

}