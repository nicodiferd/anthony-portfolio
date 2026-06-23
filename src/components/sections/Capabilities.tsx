import { Container, SectionMarker } from "@/components/ui/primitives";
import { skills } from "@/data/resume";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-graphite-200">
      <Container className="py-16">
        <SectionMarker index="04" label="Capabilities" className="mb-2" />
        <div className="flex flex-col">
          {skills.map((grp) => (
            <div
              key={grp.group}
              className="grid items-baseline gap-4 border-t border-graphite-200 py-6 md:grid-cols-[220px_1fr] md:gap-9"
            >
              <div className="font-mono text-[13px] font-semibold uppercase tracking-wide text-ink">
                {grp.group}
              </div>
              <div className="text-[16px] leading-relaxed text-graphite-600">
                {grp.items.join(", ")}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
