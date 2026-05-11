import { TOOL_OPTIONS } from "@/lib/toolData";

export function getPlansForTool(toolName: string): string[] {
  const tool = TOOL_OPTIONS.find((t) => t.name === toolName);
  return tool ? [...tool.plans] : [];
}