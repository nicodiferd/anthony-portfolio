# Anthony — Portfolio (Mechanical Engineer)

A portfolio site for Anthony, built with **React + Vite + Tailwind v4**.

This repo is the **code half of a design ↔ code loop**:

```
Claude Design  ──designs──▶  spec  ──▶  Claude Code builds it here  ──▶  real components
      ▲                                                                         │
      └──────────────────────  /design-sync  ◀──────────────────────────────────┘
        (push real components up so future designs are on-brand)
```

We're working **design-first**: design screens in [Claude Design](https://claude.ai/design),
hand the spec to Claude Code, and it builds them out in `src/` using the tokens and
patterns below. Once a handful of real components exist, run `/design-sync` to push
them up so every later design uses Anthony's actual components.

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # type-check (tsc -b) + production build
npm run preview    # preview the production build
npm run lint       # oxlint
```

Node version is pinned in `.nvmrc` (use `nvm use`).

## Project structure

```
src/
  index.css            Design tokens (@theme) — the source of truth for the look
  lib/cn.ts            cn() class-merge helper (clsx + tailwind-merge)
  components/ui/       Reusable primitives (Button is a convention reference)
  App.tsx              Design-system reference page (dev-only; not Anthony's site)
  main.tsx             App entry
```

## Design tokens

All color / type / radius / shadow tokens live in `src/index.css` under `@theme`.
Tailwind v4 turns each variable into utilities automatically:

| Token | Example utilities |
|---|---|
| `--color-blueprint-500` (accent) | `bg-blueprint-500`, `text-blueprint-500` |
| `--color-graphite-{50..900}` (neutrals) | `bg-graphite-100`, `border-graphite-200` |
| `--color-paper` / `--color-ink` | `bg-paper`, `text-ink` |
| `--font-sans` / `--font-mono` | `font-sans`, `font-mono` |
| `--radius-md`, `--shadow-card` | `rounded-md`, `shadow-card` |

There's also a `blueprint-grid` utility for the faint engineering-paper grid.

Edit the values in one place and the whole UI follows. The current palette is a
**starting point** tuned for a mechanical engineer (precise, technical, blueprint
blue on paper) — replace it with whatever the Claude Design direction calls for.

## Component convention

`src/components/ui/Button.tsx` shows the pattern to follow when building a component
from a design spec: typed props extending the native element, a small `variant`/`size`
map, and `cn()` to compose token-based classes. Import via the `@/` alias:

```tsx
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
```

## Syncing to Claude Design (later)

When real components exist, run `/design-sync` from this repo. It compiles the
component library and uploads it to a Claude Design project, so the design agent
builds with Anthony's real, on-brand parts. The cleanest sync fidelity comes from
adding **Storybook** (one story per component) before that first sync.
