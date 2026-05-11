"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  useForm, useFieldArray, useWatch, type SubmitHandler,} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  spendFormSchema,
  type SpendFormInput,
} from "@/lib/schemas";

import { USE_CASES } from "@/lib/toolData";
import { loadFormData, saveFormData } from "@/lib/storage";

import { ToolCard } from "./ToolCard";

import { Button } from "@/components/ui/button";

export function SpendForm() {
  const router = useRouter();

  const form = useForm<SpendFormInput>({
    resolver: zodResolver(spendFormSchema),
    defaultValues: loadFormData() ?? {
      teamSize: 5,
      primaryUseCase: "coding",
      tools: [
        {
          toolName: "",
          plan: "",
          monthlySpend: 20,
          seats: 1,
        },
      ],
    },
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const watchedValues = useWatch({ control });

  // Auto-save form to localStorage whenever values change
  useEffect(() => {
    saveFormData(watchedValues as SpendFormInput);
  }, [watchedValues]);

  // Submit handler
  const onSubmit: SubmitHandler<SpendFormInput> = (data) => {
    saveFormData(data);
    router.push("/audit");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* Global Inputs */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Team Size */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Team Size
          </label>
          <input
            type="number"
            {...register("teamSize")}
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3"
          />
          {errors.teamSize && (
            <p className="text-sm text-red-400">
              {errors.teamSize.message}
            </p>
          )}
        </div>

        {/* Primary Use Case */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Primary Use Case
          </label>
          <select
            {...register("primaryUseCase")}
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3"
          >
            {USE_CASES.map((useCase) => (
              <option key={useCase} value={useCase}>
                {useCase.charAt(0).toUpperCase() +
                  useCase.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tool Cards */}
      <div className="space-y-6">
        {fields.map((field, index) => (
          <ToolCard
            key={field.id}
            index={index}
            register={register}
            errors={errors}
            selectedTool={
              watchedValues?.tools?.[index]?.toolName
            }
            onRemove={() => remove(index)}
            canRemove={fields.length > 1}
          />
        ))}
      </div>

      {/* Add Tool */}
      <Button
        type="button"
        variant="outline"
        onClick={() =>
          append({
            toolName: "",
            plan: "",
            monthlySpend: 20,
            seats: 1,
          })
        }
      >
        + Add Another Tool
      </Button>

      {/* Submit */}
      <div>
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-auto"
        >
          Generate My Savings Audit
        </Button>
      </div>
    </form>
  );
}