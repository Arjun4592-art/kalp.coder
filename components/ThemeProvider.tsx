'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type Theme = 'light' | 'dark'

type ThemeContextValue = {
  theme: Theme
  isAuto: boolean
  toggle: () => void
  useAutoTime: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = 'kalpcoder-theme'

/** Day = 6:00–18:00 in the visitor's own local time (their device clock,
 *  which reflects their country/timezone automatically). */
function themeFromLocalHour(): Theme {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18 ? 'light' : 'dark'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [isAuto, setIsAuto] = useState(true)

  useEffect(() => {
    // A blocking inline script (see app/layout.tsx) already set data-theme
    // before hydration to avoid a flash — this effect runs once on mount to
    // sync React state from those external sources (DOM attribute /
    // sessionStorage), which can't be read during server render.
    const current = document.documentElement.getAttribute('data-theme')
    const stored = window.sessionStorage.getItem(STORAGE_KEY)

    /* eslint-disable react-hooks/set-state-in-effect --
       One-time sync from browser storage/DOM into React state on mount.
       This value cannot be known during server render, so it can't be
       computed during render — reading it in a mount effect is correct. */
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      setIsAuto(false)
    } else if (current === 'light' || current === 'dark') {
      setTheme(current)
      setIsAuto(true)
    } else {
      const auto = themeFromLocalHour()
      setTheme(auto)
      applyTheme(auto)
    }
    /* eslint-enable react-hooks/set-state-in-effect */

    // Re-check every few minutes in case the session crosses sunrise/sunset.
    const interval = window.setInterval(
      () => {
        setTheme((prev) => {
          const next = themeFromLocalHour()
          if (next !== prev) applyTheme(next)
          return next
        })
      },
      5 * 60 * 1000,
    )
    return () => window.clearInterval(interval)
  }, [])

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      window.sessionStorage.setItem(STORAGE_KEY, next)
      setIsAuto(false)
      return next
    })
  }, [])

  const useAutoTime = useCallback(() => {
    window.sessionStorage.removeItem(STORAGE_KEY)
    const auto = themeFromLocalHour()
    setTheme(auto)
    applyTheme(auto)
    setIsAuto(true)
  }, [])

  const value = useMemo(
    () => ({ theme, isAuto, toggle, useAutoTime }),
    [theme, isAuto, toggle, useAutoTime],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
