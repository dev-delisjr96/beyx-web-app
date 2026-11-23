// =============================================================================
// FONTS — self-hosted via Fontsource (nessuna richiesta a Google Fonts).
//
// Famiglie e pesi devono combaciare con `_fonts.scss`:
//   • Manrope       → display, h1–h6, kpi-lg      (600, 700)
//   • DM Sans       → body, UI, label, button…    (400, 600 + 700 per <strong>)
//   • IBM Plex Mono → technical-data / codice     (400, 500)
//
// `global.scss` usa `font-synthesis: none`: un peso non importato qui NON
// viene simulato dal browser. Se aggiungi un peso in _fonts.scss, importalo qui.
// Ogni file include i subset per unicode-range: il browser scarica solo
// quelli che servono (latin, latin-ext, …).
// =============================================================================

import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";

import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
