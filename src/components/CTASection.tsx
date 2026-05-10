export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl bg-black text-white dark:bg-white dark:text-black p-12 md:p-16 text-center shadow-2xl">
          <p className="text-sm uppercase tracking-wider opacity-80 mb-4">
            Start Saving Today
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Discover how much your team can save on AI tools.
          </h2>

          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            Run a free audit and get a personalized breakdown of your current spend, optimization opportunities, and potential annual savings.
          </p>

          <a
            href="#audit"
            className="inline-flex rounded-full bg-white text-black dark:bg-black dark:text-white px-8 py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Run Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}