import { Container, SectionMarker } from "@/components/ui/primitives";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="border-t border-graphite-200 bg-paper-raised">
      <Container className="py-16">
        <SectionMarker index="05" label="Education" className="mb-2" />
        <div className="flex flex-col">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="grid gap-4 border-t border-graphite-200 py-7 md:grid-cols-[220px_1fr] md:gap-9"
            >
              <div>
                <div className="font-mono text-[12px] uppercase tracking-wide text-blueprint-500">
                  {ed.period}
                </div>
                <div className="mt-1.5 text-[13px] text-graphite-400">{ed.location}</div>
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-ink">
                  {ed.school}
                </h3>
                <div className="mt-0.5 text-sm font-semibold text-graphite-600">
                  {ed.degree}
                </div>
                <p className="mt-2 max-w-[640px] text-[15px] leading-relaxed text-graphite-500">
                  {ed.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
