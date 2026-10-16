import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

// Self-hosted fonts (offline-clean, no runtime network).
import '@fontsource-variable/archivo/standard.css' // wide industrial display (wght + wdth axes)
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import '@fontsource/ibm-plex-mono/600.css'

import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML arrives prerendered (scripts/prerender.mjs); dev starts empty.
if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
