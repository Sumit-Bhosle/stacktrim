"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import type { SpendFormInput } from "@/lib/schemas";
import { TOOL_OPTIONS } from "@/lib/toolData";
import { getPlansForTool } from "./ToolSelector";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

type ToolCardProps = {
  index: number;
  register: UseFormRegister<SpendFormInput>;
  errors: FieldErrors<SpendFormInput>;
  selectedTool?: string;
  onRemove: () => void;
  canRemove: boolean;
};

export function ToolCard({
  index,
  register,
  errors,
  selectedTool,
  onRemove,
  canRemove,
}: ToolCardProps) {
  const plans = selectedTool ? getPlansForTool(selectedTool) : [];

  const toolErrors = errors.tools?.[index];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">AI Tool #{index + 1}</h3>

        {canRemove && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onRemove}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Tool Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Tool</label>
        <select
          {...register(`tools.${index}.toolName`)}
          className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3"
        >
          <option value="">Select a tool</option>
          {TOOL_OPTIONS.map((tool) => (
            <option key={tool.name} value={tool.name}>
              {tool.name}
            </option>
          ))}
        </select>
        {toolErrors?.toolName && (
          <p className="text-sm text-red-400">
            {toolErrors.toolName.message}
          </p>
        )}
      </div>

      {/* Plan */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Plan</label>
        <select
          {...register(`tools.${index}.plan`)}
          className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3"
        >
          <option value="">Select a plan</option>
          {plans.map((plan) => (
            <option key={plan} value={plan}>
              {plan}
            </option>
          ))}
        </select>
        {toolErrors?.plan && (
          <p className="text-sm text-red-400">
            {toolErrors.plan.message}
          </p>
        )}
      </div>

      {/* Monthly Spend */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Monthly Spend ($)</label>
        <input
          type="number"
          step="0.01"
          {...register(`tools.${index}.monthlySpend`)}
          className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3"
        />
        {toolErrors?.monthlySpend && (
          <p className="text-sm text-red-400">
            {toolErrors.monthlySpend.message}
          </p>
        )}
      </div>

      {/* Seats */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Seats</label>
        <input
          type="number"
          {...register(`tools.${index}.seats`)}
          className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3"
        />
        {toolErrors?.seats && (
          <p className="text-sm text-red-400">
            {toolErrors.seats.message}
          </p>
        )}
      </div>
    </div>
  );
}