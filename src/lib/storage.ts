import type { SpendFormInput } from "./schemas";

const STORAGE_KEY = "stacktrim-spend-form";

export function saveFormData(data: SpendFormInput) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save form data:", error);
  }
}

export function loadFormData(): SpendFormInput | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    return JSON.parse(raw) as SpendFormInput;
  } catch (error) {
    console.error("Failed to load form data:", error);
    return null;
  }
}

export function clearFormData() {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear form data:", error);
  }
}