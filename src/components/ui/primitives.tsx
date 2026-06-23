import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Page-width wrapper — matches the drawing sheet's margins. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1180px] px-6 sm:px-11", className)}>
      {children}
    </div>
  );
}

/** Mono "01 / PROFILE" sheet marker used to open every section. */
export function SectionMarker({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "font-mono text-[12px] uppercase tracking-[0.12em] text-graphite-400",
        className,
      )}
    >
      <span className="text-blueprint-500">{index}</span>
      <span className="px-1.5 text-graphite-300">/</span>
      <span>{label}</span>
    </div>
  );
}

/** Mono outlined chip for skills, tags, focus areas. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-graphite-200 bg-paper-raised px-2.5 py-1 font-mono text-[11px] tracking-wide text-graphite-600">
      {children}
    </span>
  );
}

/** A quantified result — value over a mono caption. The portfolio's proof. */
export function Stat({
  value,
  label,
  note,
}: {
  value: ReactNode;
  label: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="font-display text-3xl font-semibold tracking-tight expanded-sm">
        {value}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-graphite-500">
        {label}
      </div>
      {note ? (
        <div className="text-[12px] text-graphite-400">{note}</div>
      ) : null}
    </div>
  );
}
