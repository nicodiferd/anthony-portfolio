import { Button } from "@/components/ui/Button";

const graphite = [
  "50", "100", "200", "300", "400", "500", "600", "700", "800", "900",
] as const;
const blueprint = ["50", "100", "200", "300", "400", "500", "600", "700"] as const;

function Swatch({ name }: { name: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-12 w-full rounded-sm border border-black/5"
        style={{ background: `var(--color-${name})` }}
      />
      <span className="font-mono text-[11px] text-graphite-500">{name}</span>
    </div>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-blueprint-500">{n}</span>
      <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-graphite-500">
        {title}
      </h3>
      <div className="h-px flex-1 bg-graphite-200" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh">
      <header className="border-b border-graphite-200">
        <div className="mx-auto flex max-w-5xl items-baseline justify-between px-6 py-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-blueprint-500">
              Design System · v0.1
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight">
              Anthony — Mechanical Engineer
            </h1>
          </div>
          <span className="font-mono text-[11px] text-graphite-400">
            scaffold / reference
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-16 px-6 py-12">
        <section className="blueprint-grid rounded-md border border-graphite-200 p-8 shadow-card">
          <h2 className="text-2xl font-semibold tracking-tight">Foundation is live.</h2>
          <p className="mt-2 max-w-xl text-graphite-600">
            This is a developer reference for the design tokens — not Anthony's real
            site. Design screens in Claude Design, then Claude Code builds them out
            here using these tokens and components.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Primary action</Button>
            <Button variant="outline">Secondary</Button>
            <Button variant="ghost">Tertiary</Button>
          </div>
        </section>

        <section className="space-y-4">
          <SectionLabel n="01" title="Typography" />
          <div className="space-y-2">
            <p className="text-4xl font-semibold tracking-tight">
              Precision in every detail
            </p>
            <p className="text-2xl font-medium tracking-tight text-graphite-700">
              Designed and engineered
            </p>
            <p className="max-w-prose text-base text-graphite-600">
              Body copy uses the sans family. Technical labels, specs, and
              dimensions use the mono family — a nod to engineering drawings.
            </p>
            <p className="font-mono text-sm text-graphite-500">
              DIM 42.0 mm · TOL ±0.05 · MAT 6061-T6
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <SectionLabel n="02" title="Graphite · neutrals" />
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
            {graphite.map((g) => (
              <Swatch key={g} name={`graphite-${g}`} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionLabel n="03" title="Blueprint · accent" />
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {blueprint.map((b) => (
              <Swatch key={b} name={`blueprint-${b}`} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-graphite-200">
        <div className="mx-auto max-w-5xl px-6 py-6 font-mono text-[11px] text-graphite-400">
          React · Vite · Tailwind v4 — edit tokens in{" "}
          <span className="text-graphite-600">src/index.css</span>
        </div>
      </footer>
    </div>
  );
}
