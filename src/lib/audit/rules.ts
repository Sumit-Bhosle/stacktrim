export const TOOL_RULES = {
  Cursor: {
    plans: {
      Hobby: 0,
      Pro: 20,
      Business: 40,
      Enterprise: 60,
    },
    recommendations: {
      coding: "Cursor Pro",
    },
  },

  "GitHub Copilot": {
    plans: {
      Individual: 10,
      Business: 19,
      Enterprise: 39,
    },
    recommendations: {
      coding: "Individual",
    },
  },

  Claude: {
    plans: {
      Free: 0,
      Pro: 20,
      Max: 100,
      Team: 30,
      Enterprise: 60,
    },
    recommendations: {
      writing: "Pro",
      research: "Pro",
      mixed: "Pro",
      coding: "Max",
    },
  },

  ChatGPT: {
    plans: {
      Plus: 20,
      Team: 30,
      Enterprise: 60,
    },
    recommendations: {
      writing: "Plus",
      research: "Plus",
      data: "Plus",
      mixed: "Plus",
    },
  },

  Gemini: {
    plans: {
      Pro: 20,
      Ultra: 250,
    },
    recommendations: {
      research: "Pro",
      writing: "Pro",
    },
  },
} as const;