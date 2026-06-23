import { Container, SectionMarker, Tag } from "@/components/ui/primitives";
import { projects } from "@/data/resume";

export function Projects() {
  return (
    <section id="projects" className="border-t border-graphite-200 bg-paper-raised">
      <Container className="py-16">
        <div className="mb-9 flex flex-wrap items-baseline justify-between gap-4">
          <SectionMarker index="03" label="Projects" />
          <p className="max-w-[360px] text-right text-[13px] text-graphite-400">
            Photos, CAD renders, and results to be added as these are built out.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((proj) => (
            <article
              key={proj.title}
              className="flex flex-col border border-graphite-200 bg-paper"
            >
              <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 border-b border-graphite-200 bg-graphite-50 text-graphite-400">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em]">
                  Project image
                </span>
              </div>
              <div className="p-6">
                <div className="font-mono text-[11px] tracking-wide text-graphite-400">
                  {proj.org}
                </div>
                <h3 className="mt-2 font-display text-[21px] font-semibold leading-snug tracking-tight text-ink">
                  {proj.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-graphite-600">
                  {proj.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </article>
          ))}

          {/* Reserved slot for future work */}
          <article className="flex min-h-[220px] flex-col items-center justify-center gap-2.5 border border-dashed border-graphite-300 bg-paper p-6 text-center">
            <span className="flex h-10 w-10 items-center justify-center border border-graphite-300 text-xl leading-none text-graphite-500">
              +
            </span>
            <span className="text-[15px] font-semibold text-ink">More projects coming</span>
            <span className="max-w-[220px] text-[13px] text-graphite-400">
              Space reserved for additional work — send details and media to fill in.
            </span>
          </article>
        </div>
      </Container>
    </section>
  );
}
