import { type ReactNode, useMemo, useSyncExternalStore } from "react";

import {
  type Breakpoint,
  BREAKPOINT_ORDER,
  BreakpointContext,
  type BreakpointContextValue,
  BREAKPOINTS,
} from "./BreakpointContext";

// Una media query per ogni soglia (tranne mobile, che parte da 0).
// matchMedia notifica solo quando si attraversa una soglia, non a ogni resize.
const queries = BREAKPOINT_ORDER.filter((bp) => BREAKPOINTS[bp] > 0).map(
  (bp) => ({
    breakpoint: bp,
    mql: window.matchMedia(`(min-width: ${BREAKPOINTS[bp]}px)`),
  }),
);

const getSnapshot = (): Breakpoint => {
  let current: Breakpoint = "mobile";
  for (const { breakpoint, mql } of queries) {
    if (mql.matches) current = breakpoint;
  }
  return current;
};

const subscribe = (onChange: () => void) => {
  queries.forEach(({ mql }) => mql.addEventListener("change", onChange));
  return () =>
    queries.forEach(({ mql }) => mql.removeEventListener("change", onChange));
};

// Fallback per eventuale SSR / prerender.
const getServerSnapshot = (): Breakpoint => "desktop";

interface BreakpointProviderProps {
  children: ReactNode;
}

export const BreakpointProvider = ({ children }: BreakpointProviderProps) => {
  const breakpoint = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const value = useMemo<BreakpointContextValue>(() => {
    const index = BREAKPOINT_ORDER.indexOf(breakpoint);
    return {
      breakpoint,
      isMobile: breakpoint === "mobile",
      isTablet: breakpoint === "tablet",
      isDesktop: breakpoint === "desktop",
      isLarge: breakpoint === "large",
      isAtLeast: (bp) => index >= BREAKPOINT_ORDER.indexOf(bp),
      isBelow: (bp) => index < BREAKPOINT_ORDER.indexOf(bp),
    };
  }, [breakpoint]);

  return <BreakpointContext value={value}>{children}</BreakpointContext>;
};
