import { useState, type MouseEvent } from 'react'
import { useScrollBorder } from './useScrollBorder'

export function useHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useScrollBorder<HTMLElement>()

  function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    setMenuOpen(false)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return { menuOpen, setMenuOpen, headerRef, scrollToTop }
}
