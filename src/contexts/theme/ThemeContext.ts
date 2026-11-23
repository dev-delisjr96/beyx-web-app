import { createContext } from "react";

export type Theme = "dark" | "light";

export const THEMES: readonly Theme[] = ["dark", "light"];
export const DEFAULT_THEME: Theme = "dark";
export const THEME_STORAGE_KEY = "beyx-theme";

export interface ThemeContextValue {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const isTheme = (value: unknown): value is Theme =>
  typeof value === "string" && (THEMES as readonly string[]).includes(value);
