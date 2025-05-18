import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/-+$/, "");
};

export const tryCatch = async <T>(fn: () => Promise<T>) => {
  try {
    const result = await fn();
    return [undefined, result] as const;
  } catch (error) {
    return [error as Error] as const;
  }
};
