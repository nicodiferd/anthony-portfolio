# Anthony Di Ferdinando — Portfolio

Recruiter-facing portfolio site for Anthony Di Ferdinando, a mechanical engineer
(avionics displays, hydraulic systems, military-grade electronics).

- **Live:** https://anthony.diferdinando.com
- **Pages URL:** https://anthony-portfolio-cd5.pages.dev
- **Stack:** React 19 + Vite + Tailwind v4, self-hosted fonts, deployed on Cloudflare Pages.

The visual direction is a *controlled engineering drawing*: a wide industrial display
face, the name dimensioned like a CAD callout, a drawing title block, hairline rules,
and a blueprint-blue accent with a single amber "open to roles" status spark.

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # type-check (tsc -b) + production build
npm run preview    # preview the production build locally
npm run lint       # oxlint
```

Node version is pinned in `.nvmrc`.

## Project structure

```
src/
  index.css                 Design tokens (@theme) — source of truth for the look
  data/resume.ts            All site content (transcribed from the resume)
  lib/cn.ts                 cn() class-merge helper (clsx + tailwind-merge)
  components/
    ui/                     Primitives: Button, TitleBlock, primitives (Container, Tag, Stat…)
    layout/SiteHeader.tsx   Sticky nav
    sections/               Hero, Profile, Experience, Projects, Capabilities, Education, Contact
  App.tsx                   Composes the page
public/_redirects           SPA fallback for Cloudflare Pages
design/                     Claude Design handoff (reference for a future merge)
```

**Editing content:** everything (jobs, projects, skills, education, contact) lives in
`src/data/resume.ts`. **Editing the look:** all tokens live in `src/index.css` under
`@theme` — change a value once and the whole UI follows.

Still to add (placeholders are in place): a headshot, project photos / CAD renders, and
additional projects. Search `TODO:` in `src/data/resume.ts`.

## Deployment & CI/CD

Pushes to `main` auto-deploy to Cloudflare Pages via GitHub Actions
(`.github/workflows/deploy.yml`). The workflow needs two repo secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | A Cloudflare API token with **Account → Cloudflare Pages → Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | The Cloudflare account id |

Manual deploy from your machine (after `wrangler login`):

```bash
npm run deploy     # builds, then wrangler pages deploy dist
```
