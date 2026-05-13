import { ImageResponse } from "next/og";
import { createClient } from "@/lib/db/supabase";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: Promise<{
    shareId: string;
  }>;
};

export default async function OpenGraphImage({ params }: Props) {
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

  const monthly = Math.round(Number(lead?.estimated_monthly_savings ?? 0));
  const annual = Math.round(Number(lead?.estimated_annual_savings ?? 0));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #ecfdf5 100%)",
          color: "#0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#059669",
            marginBottom: 24,
          }}
        >
          StackTrim AI Spend Audit
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Save ${monthly.toLocaleString()}/month
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#475569",
          }}
        >
          ${annual.toLocaleString()}/year in potential savings
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}