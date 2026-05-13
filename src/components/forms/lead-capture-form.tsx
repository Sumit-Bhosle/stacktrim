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
        <h3 className="text-xl font-semibold">Audit sent successfully</h3>

        <p className="text-muted-foreground mt-2 text-sm">
          Check your inbox for your personalized audit summary.
        </p>

        {shareUrl && (
          <div className="mt-6 space-y-3">
            <p className="text-sm font-medium">Share this audit:</p>

            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm break-all text-emerald-600 underline"
            >
              {shareUrl}
            </a>

            <button
              type="button"
              onClick={handleCopyLink}
              className="hover:bg-muted rounded-md border px-4 py-2 text-sm"
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
      <h3 className="text-xl font-semibold">Get your audit by email</h3>

      <p className="text-muted-foreground text-sm">
        Save your report and receive future optimization updates.
      </p>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Work Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Company Name */}
      <div className="space-y-2">
        <label htmlFor="companyName" className="text-sm font-medium">
          Company Name <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="companyName"
          type="text"
          placeholder="Acme Inc."
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Role */}
      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium">
          Role <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="role"
          type="text"
          placeholder="Founder"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {error && (
        <p role="alert" className="text-sm text-red-600">
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