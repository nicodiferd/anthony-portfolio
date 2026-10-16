import { cn } from "@/lib/cn";

/**
 * TitleBlock: the boxed metadata in the corner of an engineering drawing
 * (DRAWN / DISC / REV / SHEET). The page's signature framing device.
 */
export type TitleBlockRow = { label: string; value: string };

export function TitleBlock({
  rows,
  className,
}: {
  rows: TitleBlockRow[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-[auto_1fr] border border-graphite-300 bg-paper-raised font-mono text-[11px] leading-none",
        className,
      )}
    >
      {rows.map((row, i) => (
        <div key={row.label} className="contents">
          <dt
            className={cn(
              "border-graphite-200 px-2.5 py-2 uppercase tracking-wider text-graphite-400",
              i > 0 && "border-t",
            )}
          >
            {row.label}
          </dt>
          <dd
            className={cn(
              "border-graphite-200 px-2.5 py-2 text-ink",
              "border-l",
              i > 0 && "border-t",
            )}
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
