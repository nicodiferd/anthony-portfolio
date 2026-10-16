import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely; later classes win conflicts.
 * Standard helper used by every component in this design system.
 *
 *   cn("px-2 py-1", isActive && "bg-blueprint-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
