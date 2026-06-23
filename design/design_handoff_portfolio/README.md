# Handoff: Anthony Di Ferdinando — Portfolio Site

## Overview
A single-page personal portfolio for Anthony Di Ferdinando, a mechanical engineer
(avionics displays, hydraulic systems, military-grade electronics). The site is a
recruiter-facing surface: hero intro, about, experience timeline, projects, skills,
education, and a contact band. This is the **foundation/scaffold** — real headshot,
project photos, and additional projects are still to be supplied.

## About the Design Files
The file in this bundle (`Anthony Portfolio.dc.html`) is a **design reference created
in HTML** — a prototype that shows the intended look, copy, and layout. It is **not
production code to copy directly**. (It uses a small in-house "Design Component"
runtime via `support.js`; do not port that runtime.)

Your task: **recreate this design in the target codebase's environment** using its
established patterns. If there is no existing app yet, the cleanest fit is a static
site — plain HTML/CSS, **Astro**, or **Next.js** — since the page is content-driven
with no real interactivity beyond anchor-scroll and hover states. Lift the exact
tokens, type, spacing, copy, and structure below.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, and copy. Recreate
pixel-faithfully. The only placeholders are image slots (headshot, project images),
which are intentionally empty pending real assets.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#f4f2ec` | Page background (warm paper) |
| `--bg-white` | `#ffffff` | Alternating section bands (About, Projects) |
| `--bg-sunken` | `#ebe8df` / `#f1efe8` / `#faf9f4` | Image-slot & ghost-card fills |
| `--ink` | `#1b1d22` | Primary text, also the dark contact band background |
| `--ink-strong` | `#14151a` | Hero H1 |
| `--ink-2` | `#45474d` | Body emphasis / company names |
| `--ink-3` | `#54565c` | Body copy |
| `--ink-faint` | `#8a8c91` | Mono labels, captions |
| `--ink-faintest` | `#9a9c9f` | Fig./placeholder micro-labels |
| `--line` | `rgba(20,22,26,0.14)` | Section dividers |
| `--line-soft` | `rgba(20,22,26,0.12)` | Row dividers inside sections |
| `--accent` | `#c0451f` | Rust accent: eyebrows, links, ticks, primary buttons. **Tweakable** — single source variable. |
| On dark band | `#f4f2ec` text, `rgba(244,242,236,0.66/0.5/0.4/0.3/0.16)` for secondary/borders |

The accent is the one themable value; everything reads `var(--accent, #c0451f)`.

### Typography
Google Fonts: `Archivo` (400/500/600/700), `Newsreader` (ital + roman, opsz 18–72,
400/500), `Space Mono` (400/700).
- **Display / headings** → `Newsreader`, serif, weight 500, letter-spacing −0.015em.
  Hero H1 60px/1.0 (second line italic). Section H2 (contact) 42px. Sub-headings 21–25px.
- **Body / UI** → `Archivo`. Body 15–17px, line-height 1.6–1.7. Buttons/nav 14px, weight 600.
- **Labels / data / dates** → `Space Mono`. 10–13px, uppercase, letter-spacing 0.02–0.08em.
  Used for section markers (`01 / ABOUT`), dates, tags, stat captions, `FIG. 01`.

### Spacing & shape
- Content container: `max-width: 1180px; margin: 0 auto; padding: 0 44px`.
- Section vertical padding: `64px` top/bottom (`72–80px` for hero/contact).
- Two-column meta layout (Experience, Skills, Education): `grid-template-columns: 220px 1fr; gap: 36px`.
- **Squared corners** throughout (border-radius 0–1px). No large radii, no drop shadows.
- Dividers are 1px hairlines in `--line` / `--line-soft`; Education has a 2px `#1b1d22` top rule.
- Bullet marker: a 5px × 1px horizontal `--accent` tick (not a dot), offset `top:9px`.

## Screens / Views
Single scrolling page. Sticky top nav. Sections in order:

1. **Nav** (sticky, `#f4f2ec`, 1px bottom border). Left wordmark `DI FERDINANDO / M.E.`
   in Space Mono. Right: About, Experience, Projects, Skills (text links, `#54565c` →
   `#1b1d22` on hover) + Contact (outlined button, inverts to dark fill on hover).
2. **Hero** — grid `1.5fr 1fr`, items end-aligned. Left: mono eyebrow, serif H1
   (Anthony / *Di Ferdinando*), 17px intro, two buttons (filled accent "View Projects",
   outlined "Get in Touch"). Right: **headshot placeholder** — 4:5 box, 1px border,
   `FIG. 01` corner tag, person icon, "Headshot / Professional photo to be added".
3. **About** (white band) — `0.7fr 1.8fr` grid. Mono `01 / ABOUT` label, a 25px serif
   lead line, a 16px paragraph, then a 3-stat row above a hairline: `04` engineering
   roles · `720p → 1080p` Apache display upgrade · `20%` system cost reduction.
4. **Experience** — `02 / EXPERIENCE`. Four hairline-divided rows, each `220px 1fr`:
   left = accent mono date + gray location; right = serif role, bold company, bullet list.
5. **Projects** (white band) — `03 / PROJECTS` + right-aligned note. 2-col grid of cards
   (1px border, no radius): 16:10 image placeholder w/ icon, mono org, serif title, 14px
   desc, mono outlined tags. Third cell is a dashed **"More projects coming"** ghost card.
6. **Skills** — `04 / SKILLS`. Four hairline rows `220px 1fr`: bold mono category +
   comma-separated tools line. Below a 2px rule, **Education** row (ASU, B.S.E. Mechanical
   Engineering Systems, 2019–2023, 3.4 GPA / Dean's List / Barrett Honors).
7. **Contact** (dark `#1b1d22` band) — `05 / CONTACT` accent label, 42px serif headline
   "Open to new mechanical and systems engineering roles.", subtext, three contact buttons
   (mailto / tel / LinkedIn). Footer row: `ANTHONY DI FERDINANDO / 2026` · `Newport Beach, CA`.

## Interactions & Behavior
- Nav links are in-page anchors; `html { scroll-behavior: smooth }`.
- Hover states only (no JS interactivity): text links darken; outlined Contact button
  inverts to dark fill; filled buttons drop to `opacity: 0.9`; outlined buttons darken border.
- Fully static otherwise. Responsive work (collapsing the `220px 1fr` and `1.5fr 1fr`
  grids to single column under ~820px) is **not yet built** — add it in implementation.

## Content / Copy
All copy is final and lives in the data arrays at the bottom of the HTML file's logic
class (`jobs`, `projects`, `skills`) plus the static hero/about/contact markup. Pull
exact strings from there. Em dashes are intentionally avoided in prose.

## Assets
None bundled. Image areas are **placeholders**: a headshot (4:5) and one image per
project (16:10). Replace with real photos/CAD renders when available. Icons are inline
SVG (person, image) — swap for your icon set or keep as inline SVG.

## Files
- `Anthony Portfolio.dc.html` — the full design reference (markup + content data).
