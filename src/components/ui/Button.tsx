import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Button styles for this design system. `buttonClasses` is exported so links
 * (mailto:, résumé download, anchors) can wear the exact same skin.
 */
type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  solid: "bg-blueprint-500 text-white hover:bg-blueprint-600",
  outline: "border border-graphite-300 text-ink hover:border-graphite-400 hover:bg-graphite-50",
  ghost: "text-graphite-600 hover:bg-graphite-100 hover:text-ink",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

export function buttonClasses(opts: { variant?: Variant; size?: Size } = {}) {
  const { variant = "solid", size = "md" } = opts;
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "solid",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props} />
  );
}
