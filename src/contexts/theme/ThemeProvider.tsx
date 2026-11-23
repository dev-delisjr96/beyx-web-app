import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";

import {
  DEFAULT_THEME,
  isTheme,
  type Theme,
  ThemeContext,
  type ThemeContextValue,
  THEME_STORAGE_KEY,
} from "./ThemeContext";

const readStoredTheme = (): Theme | null => {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : null;
  } catch {
    return null;
  }
};

const writeStoredTheme = (theme: Theme) => {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // storage non disponibile (private mode, policy): il tema resta solo in memoria
  }
};

interface ThemeProviderProps {
  children: ReactNode;
  /** Tema iniziale se l'utente non ne ha ancora scelto uno. Default: "dark". */
  defaultTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(
    () => readStoredTheme() ?? defaultTheme,
  );

  // Applica il tema al <html>: usato da `[data-theme="light"]` in _colors.scss
  // e da `color-scheme` per scrollbar / controlli nativi.
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  }, [theme]);

  // Sincronizza più tab aperte.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY && isTheme(event.newValue)) {
        setThemeState(event.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    writeStoredTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      writeStoredTheme(next);
      return next;
    });
  }, []);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, isDark: theme === "dark", setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
