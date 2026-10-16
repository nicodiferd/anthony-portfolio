import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

/**
 * Build-time render of the whole page. scripts/prerender.mjs writes the result
 * into dist/index.html so crawlers and link previews see the content without
 * running JavaScript; main.tsx then hydrates it.
 */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
