"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-gray-300/30 blur-3xl dark:bg-gray-700/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-300 backdrop-blur mb-6">
            Free AI Spend Audit Tool
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white leading-tight">
            Keep the tech.
            <br />
            Cut the burn.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover where your team is overspending on Cursor, Claude,
            ChatGPT, and other AI tools in under 60 seconds.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#audit"
              className="rounded-full bg-black dark:bg-white text-white dark:text-black px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free Audit
            </a>

            <a
              href="#sample-report"
              className="rounded-full border border-black/10 dark:border-white/10 px-8 py-3 font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              See Sample Report
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>60-second audit</span>
            <span>•</span>
            <span>8+ tools supported</span>
            <span>•</span>
            <span>Up to 70% savings</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur shadow-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 p-6">
                <p className="text-sm text-gray-500 mb-2">Monthly Savings</p>
                <p className="text-3xl font-bold">$842</p>
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 p-6">
                <p className="text-sm text-gray-500 mb-2">Annual Savings</p>
                <p className="text-3xl font-bold">$10,104</p>
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-white/5 p-6">
                <p className="text-sm text-gray-500 mb-2">Optimization Score</p>
                <p className="text-3xl font-bold">72%</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 dark:bg-white/5 p-6">
              <p className="font-semibold mb-2">
                Recommendation: Switch 5 Cursor Business seats to Pro
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Your team is overpaying for advanced admin features you are not
                currently using.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}