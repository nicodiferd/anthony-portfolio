import { Container, SectionMarker } from "@/components/ui/primitives";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="work" className="border-t border-graphite-200">
      <Container className="py-16">
        <SectionMarker index="02" label="Work" className="mb-2" />
        <div className="flex flex-col">
          {experience.map((job) => (
            <article
              key={job.company}
              className="grid gap-5 border-t border-graphite-200 py-8 md:grid-cols-[220px_1fr] md:gap-9"
            >
              <div>
                <div className="font-mono text-[12px] uppercase tracking-wide text-blueprint-500">
                  {job.start} – {job.end}
                </div>
                <div className="mt-1.5 text-[13px] text-graphite-400">
                  {job.location}
                </div>
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-ink">
                  {job.role}
                </h3>
                <div className="mt-0.5 text-sm font-semibold text-graphite-600">
                  {job.company}
                </div>
                {job.summary ? (
                  <p className="mt-2 max-w-[640px] text-[14px] text-graphite-500">
                    {job.summary}
                  </p>
                ) : null}
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.bullets.map((b) => (
                    <li
                      key={b}
                      className="relative max-w-[680px] pl-5 text-[15px] leading-relaxed text-graphite-600"
                    >
                      <span aria-hidden="true" className="absolute left-0 top-[0.7em] h-px w-2.5 bg-blueprint-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
