const features = [
  {
    title: "Defensible Audit Logic",
    description:
      "Every recommendation is backed by current pricing data and clear usage-fit reasoning.",
  },
  {
    title: "AI-Powered Summary",
    description:
      "Generate a personalized executive summary using an LLM, with graceful fallback handling.",
  },
  {
    title: "Shareable Reports",
    description:
      "Each completed audit gets a unique public URL with clean social previews.",
  },
  {
    title: "Lead Capture",
    description:
      "Capture emails after value is shown and store submissions securely in Supabase.",
  },
  {
    title: "Real Pricing Sources",
    description:
      "Every price point is traceable to an official vendor pricing page.",
  },
  {
    title: "Startup-Focused Insights",
    description:
      "Designed for teams using Cursor, Claude, ChatGPT, Copilot, and more.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Why StackTrim
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Built to help startups spend smarter on AI.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Actionable recommendations, transparent logic, and a report you can actually share with your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}