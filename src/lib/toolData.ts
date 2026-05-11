export const TOOL_OPTIONS = [
  {
    name: "Cursor",
    plans: ["Hobby", "Pro", "Business", "Enterprise"],
  },
  {
    name: "GitHub Copilot",
    plans: ["Individual", "Business", "Enterprise"],
  },
  {
    name: "Claude",
    plans: ["Free", "Pro", "Max", "Team", "Enterprise", "API"],
  },
  {
    name: "ChatGPT",
    plans: ["Plus", "Team", "Enterprise", "API"],
  },
  {
    name: "Anthropic API",
    plans: ["Direct API"],
  },
  {
    name: "OpenAI API",
    plans: ["Direct API"],
  },
  {
    name: "Gemini",
    plans: ["Pro", "Ultra", "API"],
  },
  {
    name: "Windsurf",
    plans: ["Free", "Pro", "Teams", "Enterprise"],
  },
] as const;

export const USE_CASES = [
  "coding",
  "writing",
  "research",
  "data",
  "mixed",
] as const;