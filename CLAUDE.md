# CLAUDE.md

One-page, recruiter-facing portfolio for Anthony DiFerdinando (mechanical engineer), built and maintained by Nicolo DiFerdinando. Live at https://anthony.diferdinando.com. Public repo: nicodiferd/anthony-portfolio.

## Approvals

- **Anthony approves every visible word**: `src/data/resume.ts`, the prose inside `src/components/sections/*`, alt text, and the meta description / JSON-LD in `index.html` (they reuse on-page copy verbatim). Do not reword, shorten or "fix" his copy, not even punctuation; list suggestions for him instead.
- Technical changes (SEO plumbing, performance, accessibility attributes, build, docs) need no copy sign-off as long as no visible wording changes.
- Under Nicolo's name this site carries at most a builder credit. Any public claim follows `/Users/nicolodiferdinando/Developer/personal/nico-hub/rules/public-claims.md` (truth rule, banned claims, style).
- Do not add more of Anthony's personal data anywhere (for example email or phone in JSON-LD) without his OK.

## Style

- No em-dashes (U+2014) in anything Nicolo or an agent writes: code comments, docs, commit messages, new copy. Use commas, colons or parentheses. Anthony's own copy keeps his punctuation; flag it, do not edit it.
- The surname is "DiFerdinando" (one word), matching the site.

## Stack

React 19 + Vite 8 + TypeScript 6 SPA, Tailwind v4 via `@tailwindcss/vite`, self-hosted fonts (`@fontsource`, imported in `src/main.tsx`), `clsx` + `tailwind-merge` (`src/lib/cn.ts`), oxlint. Node version in `.nvmrc`.

```bash
npm ci
npm run dev       # http://localhost:5173 (client render, no prerender)
npm run build     # tsc -b, vite build, SSR build, prerender into dist/index.html
npm run preview   # serve dist
npm run lint      # oxlint (one known warning: buttonClasses export in Button.tsx)
```

## Where things live

- Content: `src/data/resume.ts` (single source; every section reads from it).
- Design tokens: `src/index.css` under `@theme`. Base-layer rules there give every link a `:focus-visible` outline and offset section anchors below the sticky header; components that draw their own ring keep it.
- Images: originals in `source-images/` (kept in git, never deployed). `scripts/optimize-images.sh` (cwebp, sips, python3) writes the WebP files, `og-image.jpg`, the PNG favicons and the slimmed `AD1.svg` into `public/`. When an image changes, rerun the script and update its pixel size in `src/data/images.ts` (components pass it as width/height). Add a new on-page image the same way; never put an unoptimized original in `public/`.
- SEO: `index.html` (title, description, canonical, Open Graph, Twitter card, Person JSON-LD), `public/robots.txt`, `public/sitemap.xml` (bump `lastmod` when content changes). When `resume.ts` changes the summary, job or school, update the matching meta and JSON-LD.
- Prerender: `src/entry-server.tsx` + `scripts/prerender.mjs` put the rendered page into `dist/index.html`; `src/main.tsx` hydrates it. Render output must be deterministic (no `Date.now()`, `Math.random()` or `window` reads during render) or hydration will warn.
- Headers: `public/_headers` (immutable cache for `/assets/*`, `noindex` on the pages.dev hosts). `public/_redirects` is the SPA fallback.

## Deploy

- Push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, `npm run build`, then `wrangler pages deploy dist --project-name=anthony-portfolio --branch=main` to Cloudflare Pages. Repo secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- Pages URL https://anthony-portfolio-cd5.pages.dev (noindex); custom domain anthony.diferdinando.com on the diferdinando.com Cloudflare zone.
- Work on a branch; merges to `main` (which deploy) belong to the coordinator per the nico-hub charter. Verify with `npm run build`, `npm run lint`, curl against a local server of `dist/`. No Playwright.
