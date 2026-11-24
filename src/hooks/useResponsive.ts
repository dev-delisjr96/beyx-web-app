import { useSyncExternalStore } from "react";

// Stessi breakpoint di styles/_fonts.scss
export const BREAKPOINTS = {
  tablet: 768,
  desktop: 1024,
} as const;

const TABLET_QUERY = `(min-width: ${BREAKPOINTS.tablet}px)`;
const DESKTOP_QUERY = `(min-width: ${BREAKPOINTS.desktop}px)`;

const subscribe = (onChange: () => void) => {
  const queries = [window.matchMedia(TABLET_QUERY), window.matchMedia(DESKTOP_QUERY)];
  queries.forEach((query) => query.addEventListener("change", onChange));
  return () => queries.forEach((query) => query.removeEventListener("change", onChange));
};

const getBreakpoint = () => {
  if (window.matchMedia(DESKTOP_QUERY).matches) return "desktop";
  if (window.matchMedia(TABLET_QUERY).matches) return "tablet";
  return "mobile";
};

export type Breakpoint = "mobile" | "tablet" | "desktop";

// Mobile-first: "mobile" anche lato server / prima del primo render.
const useResponsive = () => {
  const breakpoint = useSyncExternalStore<Breakpoint>(subscribe, getBreakpoint, () => "mobile");

  return {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
  };
};

export default useResponsive;
