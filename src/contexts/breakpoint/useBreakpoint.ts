import { use } from "react";

import {
  BreakpointContext,
  type BreakpointContextValue,
} from "./BreakpointContext";

export const useBreakpoint = (): BreakpointContextValue => {
  const context = use(BreakpointContext);
  if (!context) {
    throw new Error(
      "useBreakpoint deve essere usato all'interno di <BreakpointProvider>",
    );
  }
  return context;
};
