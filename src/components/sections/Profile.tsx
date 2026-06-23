import { Container, SectionMarker, Tag } from "@/components/ui/primitives";
import { profile } from "@/data/resume";

export function Profile() {
  return (
    <section id="profile" className="border-t border-graphite-200 bg-paper-raised">
      <Container className="grid gap-10 py-16 md:grid-cols-[0.5fr_1.5fr] md:gap-14">
        <SectionMarker index="01" label="Profile" />
        <div>
          <p className="max-w-[720px] font-display text-2xl leading-snug tracking-tight text-ink expanded-sm">
            I build test procedures, troubleshoot hardware, and validate systems
            with my hands as much as my head.
          </p>
          <p className="mt-6 max-w-[640px] text-[16px] leading-relaxed text-graphite-600">
            I collaborate across mechanical, electrical, and manufacturing teams to
            deliver reliable hardware for the field, from avionics displays to
            fluid-power systems and cleanroom electronics, covering everything from
            translating requirements into designs to validating finished hardware.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.disciplines.map((d) => (
              <Tag key={d}>{d}</Tag>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
