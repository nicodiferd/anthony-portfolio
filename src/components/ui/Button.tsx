import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Button — convention reference for this design system.
 *
 * It demonstrates the pattern Claude Code should follow when turning a
 * Claude Design spec into a component:
 *   - typed props extending the native element
 *   - a small `variant` / `size` map
 *   - `cn()` to compose token-based Tailwind classes
 *
 * Restyle or replace freely once real designs land.
 */
type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  solid: "bg-blueprint-500 text-white hover:bg-blueprint-600",
  outline: "border border-graphite-300 text-ink hover:bg-graphite-50",
  ghost: "text-graphite-600 hover:bg-graphite-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

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
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
