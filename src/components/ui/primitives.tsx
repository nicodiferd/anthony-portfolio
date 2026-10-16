import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { imageSizes } from "@/data/images";

/** Page-width wrapper: matches the drawing sheet's margins. */
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

/**
 * A career-highlight clip art over a mono caption. Falls back to a dashed
 * placeholder when the image is missing.
 */
export function Highlight({
  img,
  alt,
  label,
  scale = 1,
}: {
  img: string;
  alt: string;
  label: string;
  scale?: number;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-20 w-full items-center justify-center overflow-hidden border border-graphite-200 bg-white p-3 sm:h-24">
        {errored ? (
          <div className="flex h-full w-full items-center justify-center border border-dashed border-graphite-300 text-graphite-300">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="3" width="18" height="18" rx="1" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        ) : (
          <img
            src={img}
            alt={alt}
            width={imageSizes[img]?.width}
            height={imageSizes[img]?.height}
            decoding="async"
            className="h-full w-full object-contain"
            style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-graphite-500">
        {label}
      </div>
    </div>
  );
}

/** A quantified result: value over a mono caption. The portfolio's proof. */
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
