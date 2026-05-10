export default function SocialProof() {
  const tools = [
    "Cursor",
    "Claude",
    "ChatGPT",
    "GitHub Copilot",
    "Gemini",
    "Windsurf",
    "OpenAI API",
    "Anthropic API",
  ];

  return (
    <section className="py-12 border-y border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
          Supports the tools your team already uses
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}