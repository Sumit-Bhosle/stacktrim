import { z } from "zod";

export const leadSchema = z.object({
  email: z.email(),
  companyName: z.string().optional(),
  role: z.string().optional(),
  teamSize: z.number().optional(),
  auditId: z.uuid(),
  monthlySavings: z.number(),
  annualSavings: z.number(),
  website: z.string().optional(), // honeypot field
});