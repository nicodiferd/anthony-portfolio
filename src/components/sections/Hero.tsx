import { Container, Stat } from "@/components/ui/primitives";
import { TitleBlock } from "@/components/ui/TitleBlock";
import { buttonClasses } from "@/components/ui/Button";
import { profile, results } from "@/data/resume";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-60" />
      <Container className="relative grid items-end gap-12 pt-14 pb-12 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
        {/* Left — identity */}
        <div className="min-w-0 motion-safe:[animation:fade-up_0.6s_ease_both]">
          <div className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-blueprint-500">
              Mechanical Engineer / Systems
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-graphite-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              {profile.status}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.25rem,11.5vw,4rem)] font-bold leading-[0.92] tracking-tight text-ink expanded-sm break-words sm:expanded xl:text-[4.5rem] 2xl:text-[4.75rem]">
            Anthony
            <br />
            DiFerdinando
          </h1>

          <p className="mt-8 max-w-[540px] text-[17px] leading-relaxed text-graphite-600">
            {profile.summary}
          </p>

          <p className="mt-5 font-mono text-[12px] uppercase tracking-wide text-graphite-400">
            {profile.focus.join("  ·  ")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className={buttonClasses({ variant: "solid", size: "lg" })}>
              View work
            </a>
            <a
              href="#contact"
              className={buttonClasses({ variant: "outline", size: "lg" })}
            >
              Get in touch
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={buttonClasses({ variant: "ghost", size: "lg" })}
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Right — headshot slot + title block */}
        <div className="mx-auto flex w-[85%] min-w-0 flex-col gap-4 motion-safe:[animation:fade-up_0.6s_0.1s_ease_both]">
          <div className="relative aspect-[4/5] overflow-hidden border border-graphite-300 bg-paper-raised">
            <img
              src="/anthony.jpeg"
              alt="Anthony DiFerdinando"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-2.5 top-2.5 bg-ink/55 px-1.5 py-0.5 font-mono text-[10px] tracking-[0.06em] text-paper">
              FIG. 01
            </span>
          </div>

          <TitleBlock
            rows={[
              { label: "Drawn", value: "A. DiFerdinando" },
              { label: "Disc", value: "Mechanical / Systems" },
              { label: "Loc", value: profile.location },
              { label: "Rev", value: profile.rev },
            ]}
          />
        </div>
      </Container>

      {/* Key results strip */}
      <Container className="relative">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-y border-graphite-200 py-8 sm:grid-cols-4">
          {results.map((r) => (
            <Stat key={r.label} value={r.value} label={r.label} note={r.note} />
          ))}
        </div>
      </Container>
    </section>
  );
}
