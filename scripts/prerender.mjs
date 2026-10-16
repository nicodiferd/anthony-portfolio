// Runs after `vite build` and `vite build --ssr` (see the build script in
// package.json): renders the app to HTML and writes it into dist/index.html.
import { readFile, rm, writeFile } from "node:fs/promises";

const ssrDir = new URL("../dist-ssr/", import.meta.url);
const indexFile = new URL("../dist/index.html", import.meta.url);
const marker = '<div id="root"></div>';

const { render } = await import(new URL("entry-server.js", ssrDir).href);
const html = await readFile(indexFile, "utf8");
if (!html.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`);
}

// React 19 opens the render with <link rel="preload"> hints for eager images
// (the hero headshot and tiles). They belong in <head>, outside the hydrated root.
const rendered = render();
const hints = rendered.match(/^(?:<link rel="preload"[^>]*\/>)*/)[0];
const body = rendered.slice(hints.length);
// Function replacers, so a "$" in the copy is never read as a replace pattern.
const out = html
  .replace("</head>", () => `${hints}\n  </head>`)
  .replace(marker, () => `<div id="root">${body}</div>`);
await writeFile(indexFile, out);
await rm(ssrDir, { recursive: true, force: true });
console.log("prerender: wrote dist/index.html");
