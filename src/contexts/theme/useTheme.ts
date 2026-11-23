import { use } from "react";

import { ThemeContext, type ThemeContextValue } from "./ThemeContext";

export const useTheme = (): ThemeContextValue => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve essere usato all'interno di <ThemeProvider>");
  }
  return context;
};
