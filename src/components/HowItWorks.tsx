const steps = [
  {
    title: "Connect Your Stack",
    description:
      "Enter the AI tools your team uses, current plans, monthly spend, and number of seats.",
  },
  {
    title: "Get Instant Insights",
    description:
      "Our audit engine identifies overpayments, unnecessary plans, and lower-cost alternatives.",
  },
  {
    title: "Capture Your Savings",
    description:
      "Download your report and, for high-savings opportunities, connect with Credex.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-50 dark:bg-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Audit your AI spend in three simple steps.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Built for founders and engineering leaders who want clear, defensible savings recommendations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-8"
            >
              <div className="w-12 h-12 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}