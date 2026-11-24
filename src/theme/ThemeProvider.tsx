import { type ReactNode, useEffect, useState } from "react";

import { type Theme, ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
};

// Imposta `data-theme` su <html>: tutti i componenti leggono i colori dalle
// CSS custom properties di styles/global.scss, quindi cambiano tema da soli.
const ThemeProvider = ({ children, defaultTheme = "dark" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
