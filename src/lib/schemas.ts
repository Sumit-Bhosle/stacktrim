import { z } from "zod";

export const toolSchema = z.object({
  toolName: z.string().min(1, "Select a tool"),
  plan: z.string().min(1, "Select a plan"),
  monthlySpend: z.coerce
    .number()
    .min(0, "Monthly spend must be 0 or greater"),
  seats: z.coerce
    .number()
    .int()
    .min(1, "Seats must be at least 1"),
});

export const spendFormSchema = z.object({
  teamSize: z.coerce
    .number()
    .int()
    .min(1, "Team size must be at least 1"),

  primaryUseCase: z.enum([
    "coding",
    "writing",
    "research",
    "data",
    "mixed",
  ]),

  tools: z
    .array(toolSchema)
    .min(1, "Add at least one AI tool"),
});

export type ToolInput = z.infer<typeof toolSchema>;
export type SpendFormInput = z.infer<typeof spendFormSchema>;