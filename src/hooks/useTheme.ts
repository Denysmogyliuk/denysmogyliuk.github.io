import { useEffect, useRef, useState } from "react";

export type Theme = "light" | "auto" | "dark";

const STORAGE_KEY = "theme";

function readStoredTheme(): Theme {
  if (typeof localStorage === "undefined") return "auto";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" || stored === "auto"
    ? stored
    : "auto";
}

export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "auto") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
}

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>("auto");
  const synced = useRef(false);

  useEffect(() => {
    if (!synced.current) {
      synced.current = true;
      const stored = readStoredTheme();
      if (stored !== theme) setTheme(stored);
      return;
    }
    applyTheme(theme);
    if (typeof localStorage !== "undefined")
      localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return [theme, setTheme];
}
