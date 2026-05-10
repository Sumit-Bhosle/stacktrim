const faqs = [
  {
    question: "How does StackTrim calculate savings?",
    answer:
      "We compare your current AI subscriptions against current vendor pricing, team size, and usage patterns to identify lower-cost plans and alternatives.",
  },
  {
    question: "Which AI tools are supported?",
    answer:
      "StackTrim analyzes Cursor, Claude, ChatGPT, GitHub Copilot, Gemini, Windsurf, OpenAI API, and Anthropic API pricing.",
  },
  {
    question: "Do I need to connect any accounts?",
    answer:
      "No. Simply enter your current plans, monthly spend, and seat counts. No integrations or API keys are required.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Public share links automatically remove identifying information such as company name and email address.",
  },
  {
    question: "What happens after I submit my audit?",
    answer:
      "You receive a personalized report instantly. If we identify substantial savings, you can optionally connect with Credex.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Common questions.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know before running your audit.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 p-8"
            >
              <h3 className="text-lg font-semibold mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}