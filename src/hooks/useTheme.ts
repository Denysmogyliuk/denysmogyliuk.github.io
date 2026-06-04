import { useEffect, useState } from 'react'

export type Theme = 'light' | 'auto' | 'dark'

const STORAGE_KEY = 'theme'

function readStored(): Theme {
  const v = localStorage.getItem(STORAGE_KEY)
  return v === 'light' || v === 'dark' || v === 'auto' ? v : 'auto'
}

/** Apply the theme to <html>: explicit themes set data-theme; auto removes it so
 *  the CSS prefers-color-scheme fallback takes over. */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  if (theme === 'auto') {
    root.removeAttribute('data-theme')
  } else {
    root.setAttribute('data-theme', theme)
  }
}

export function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(readStored)

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return [theme, setThemeState]
}
