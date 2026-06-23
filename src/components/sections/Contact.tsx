import { Container, SectionMarker } from "@/components/ui/primitives";
import { profile } from "@/data/resume";

const darkOutline =
  "inline-flex h-11 items-center justify-center rounded-sm border border-paper/30 px-5 text-sm font-semibold text-paper no-underline transition-colors hover:border-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function Contact() {
  return (
    <section id="contact" className="border-t border-graphite-200 bg-ink text-paper">
      <Container className="py-20">
        <SectionMarker index="06" label="Contact" className="mb-5 text-paper/50" />
        <h2 className="max-w-[620px] font-display text-4xl font-semibold leading-tight tracking-tight expanded-sm sm:text-[42px]">
          Open to new mechanical and systems engineering roles.
        </h2>
        <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-paper/65">
          Reach out if you have a hardware challenge worth solving. Happy to talk
          through the work in detail.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center justify-center rounded-sm bg-blueprint-500 px-5 text-sm font-semibold text-white no-underline transition-colors hover:bg-blueprint-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {profile.email}
          </a>
          <a href={`tel:${profile.phoneHref}`} className={darkOutline}>
            {profile.phone}
          </a>
          <a
            href={profile.linkedinHref}
            target="_blank"
            rel="noreferrer"
            className={darkOutline}
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6">
          <div className="font-mono text-[12px] tracking-[0.04em] text-paper/50">
            ANTHONY DIFERDINANDO / 2026
          </div>
          <div className="text-[13px] text-paper/40">{profile.location}</div>
        </div>
      </Container>
    </section>
  );
}
