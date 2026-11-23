import { createContext } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop" | "large";

/**
 * Larghezza minima (px) da cui parte ogni breakpoint, mobile-first.
 * tablet e desktop combaciano con $breakpoint-tablet-min / $breakpoint-desktop-min
 * in src/styles/_fonts.scss: se li cambi lì, aggiornali anche qui.
 */
export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  large: 1440,
} as const satisfies Record<Breakpoint, number>;

/** Ordine crescente, usato per i confronti isAtLeast / isBelow. */
export const BREAKPOINT_ORDER: readonly Breakpoint[] = [
  "mobile",
  "tablet",
  "desktop",
  "large",
];

export interface BreakpointContextValue {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
  /** true se lo schermo è >= al breakpoint indicato (es. isAtLeast("tablet")). */
  isAtLeast: (breakpoint: Breakpoint) => boolean;
  /** true se lo schermo è < al breakpoint indicato (es. isBelow("desktop")). */
  isBelow: (breakpoint: Breakpoint) => boolean;
}

export const BreakpointContext = createContext<BreakpointContextValue | null>(
  null,
);
