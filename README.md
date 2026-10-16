# Anthony DiFerdinando: Portfolio

Recruiter-facing portfolio site for Anthony DiFerdinando, a mechanical engineer
(avionics displays, hydraulic systems, military-grade electronics).

- **Live:** https://anthony.diferdinando.com
- **Pages URL:** https://anthony-portfolio-cd5.pages.dev
- **Stack:** React 19 + Vite + Tailwind v4, self-hosted fonts, prerendered at build
  time, deployed on Cloudflare Pages.

The visual direction is a *controlled engineering drawing*: a wide industrial display
face, the name dimensioned like a CAD callout, a drawing title block, hairline rules,
and a blueprint-blue accent with a single amber "open to roles" status spark.

## Getting started

```bash
npm ci
npm run dev        # local dev server (http://localhost:5173)
npm run build      # type-check (tsc -b), production build, prerender into dist/index.html
npm run preview    # preview the production build locally
npm run lint       # oxlint
```

Node version is pinned in `.nvmrc`. Agent and contributor rules (copy approvals,
style) are in `CLAUDE.md`.

## Project structure

```
src/
  index.css                 Design tokens (@theme): source of truth for the look
  data/resume.ts            All site content (transcribed from the resume)
  data/images.ts            Pixel sizes of the images in public/ (width/height attrs)
  lib/cn.ts                 cn() class-merge helper (clsx + tailwind-merge)
  components/
    ui/                     Primitives: Button, TitleBlock, primitives (Container, Tag, Stat...)
    layout/SiteHeader.tsx   Sticky nav
    sections/               Hero, Profile, Experience, Projects, Capabilities, Education, Contact
  App.tsx                   Composes the page
  main.tsx                  Client entry (hydrates the prerendered HTML)
  entry-server.tsx          Build-time render used by scripts/prerender.mjs
public/                     Deployed as is: optimized images, favicons, robots.txt,
                            sitemap.xml, _headers, _redirects (SPA fallback)
source-images/              Original images (kept in git, not deployed)
scripts/
  optimize-images.sh        Regenerates the images in public/ from source-images/
  prerender.mjs             Writes the rendered page into dist/index.html
```

**Editing content:** everything (jobs, projects, skills, education, contact) lives in
`src/data/resume.ts`. If the summary, current job or school changes, update the meta
description and JSON-LD in `index.html` to match. **Editing the look:** all tokens live
in `src/index.css` under `@theme`; change a value once and the whole UI follows.

**Adding or replacing an image:** drop the original into `source-images/`, add a line
for it in `scripts/optimize-images.sh`, run the script (needs `cwebp` from
`brew install webp`), and record the output size in `src/data/images.ts`.

Still to add: project photos / CAD renders and additional projects (the Projects grid
keeps a reserved slot).

## Deployment & CI/CD

Pushes to `main` auto-deploy to Cloudflare Pages via GitHub Actions
(`.github/workflows/deploy.yml`). The workflow needs two repo secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | A Cloudflare API token with **Account > Cloudflare Pages > Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | The Cloudflare account id |

Manual deploy from your machine (after `wrangler login`):

```bash
npm run deploy     # builds, then wrangler pages deploy dist
```
