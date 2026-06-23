import { Container } from "@/components/ui/primitives";
import { buttonClasses } from "@/components/ui/Button";
import { sections } from "@/data/resume";

const navLinks = sections.filter((s) => s.id !== "contact");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-graphite-200 bg-paper/85 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-[13px] font-bold tracking-wide text-ink no-underline"
        >
          <span>A. DI FERDINANDO</span>
          <span className="text-blueprint-500">/</span>
          <span className="font-normal text-graphite-500">M.E.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-medium text-graphite-500 transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
          <a href="#contact" className={buttonClasses({ variant: "outline", size: "sm" })}>
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className={`md:hidden ${buttonClasses({ variant: "outline", size: "sm" })}`}
        >
          Contact
        </a>
      </Container>
    </header>
  );
}
