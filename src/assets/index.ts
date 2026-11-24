// Registro asset UI (esportati da Figma "BeyX-UI").
// Le immagini delle trottole/parti sono dati: arrivano via props (`imgUrl`).

import beyxLogo from "./icons/beyx-logo.svg";
import bookmarkOutline from "./icons/bookmark-outline.svg";
import caretDown from "./icons/caret-down.svg";
import caretForward from "./icons/caret-forward.svg";
import chevronForward from "./icons/chevron-forward.svg";
import filter from "./icons/filter.svg";
import funnelOutline from "./icons/funnel-outline.svg";
import gridOutline from "./icons/grid-outline.svg";
import personCircleOutline from "./icons/person-circle-outline.svg";
import prebuilds from "./icons/prebuilds.svg";
import randomizer from "./icons/randomizer.svg";
import searchOutline from "./icons/search-outline.svg";
import assistBlade from "./parts/assist-blade.png";
import bit from "./parts/bit.png";
import blade from "./parts/blade.png";
import lockChip from "./parts/lock-chip.png";
import mainBlade from "./parts/main-blade.png";
import metalBlade from "./parts/metal-blade.png";
import overBlade from "./parts/over-blade.png";
import ratchet from "./parts/ratchet.png";
import atk from "./stats/atk.png";
import burstRes from "./stats/burst-res.png";
import dash from "./stats/dash.png";
import def from "./stats/def.png";
import stm from "./stats/stm.png";
import weight from "./stats/weight.png";

export const LOGO = beyxLogo;

// Icone monocromatiche: vengono usate come maschera e prendono `currentColor`.
export const ICONS = {
  bookmark: bookmarkOutline,
  caretDown,
  caretForward,
  chevronForward,
  filter,
  funnel: funnelOutline,
  grid: gridOutline,
  person: personCircleOutline,
  prebuilds,
  randomizer,
  search: searchOutline,
} as const;

export type IconName = keyof typeof ICONS;

export const STAT_ICONS = {
  atk,
  def,
  stm,
  weight,
  dash,
  burstRes,
} as const;

export type StatType = keyof typeof STAT_ICONS;

export const PART_ICONS = {
  blade,
  ratchet,
  bit,
  lockChip,
  mainBlade,
  assistBlade,
  metalBlade,
  overBlade,
} as const;

export type PartType = keyof typeof PART_ICONS;

// Badge del tipo di gioco (angolo in alto a destra delle card).
// `bal` non ha ancora un asset: il badge mostra un placeholder.
export const PLAY_TYPE_ICONS: Record<"atk" | "def" | "stm" | "bal", string | undefined> = {
  atk,
  def,
  stm,
  bal: undefined,
};

export type PlayType = keyof typeof PLAY_TYPE_ICONS;
