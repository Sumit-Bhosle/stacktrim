"use client";

import { useState } from "react";

type Props = {
  auditId: string;
  monthlySavings: number;
  annualSavings: number;
  summary: string;
  results: unknown;
};

export function LeadCaptureForm({
  auditId,
  monthlySavings,
  annualSavings,
  summary,
  results,
}: Props) {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [shareUrl, setShareUrl] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          companyName,
          role,
          auditId,
          monthlySavings,
          annualSavings,
          website,
          summary,
          auditData: results,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      if (data.shareId) {
        const url = `${window.location.origin}/audit/${data.shareId}`;
        setShareUrl(url);
      }

      setSuccess(true);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCopyLink() {
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // Ignore clipboard errors silently
    }
  }

  if (success) {
    return (
      <div className="rounded-xl border bg-white p-6 text-center shadow-sm">
        <h3 className="text-xl font-semibold">
          Audit sent successfully
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Check your inbox for your personalized audit summary.
        </p>

        {shareUrl && (
          <div className="mt-6 space-y-3">
            <p className="text-sm font-medium">
              Share this audit:
            </p>

            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block break-all text-sm text-emerald-600 underline"
            >
              {shareUrl}
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="rounded-md border px-4 py-2 text-sm hover:bg-muted"
            >
              Copy Share Link
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border bg-white p-6 shadow-sm"
    >
      <h3 className="text-xl font-semibold">
        Get your audit by email
      </h3>

      <p className="text-sm text-muted-foreground">
        Save your report and receive future optimization updates.
      </p>

      <input
        type="email"
        placeholder="you@company.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-md border px-3 py-2"
      />

      <input
        type="text"
        placeholder="Company name (optional)"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="w-full rounded-md border px-3 py-2"
      />

      <input
        type="text"
        placeholder="Role (optional)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full rounded-md border px-3 py-2"
      />

      {/* Honeypot field */}
      <input
        title="HoneyPot field"
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Sending..." : "Email My Audit"}
      </button>
    </form>
  );
}