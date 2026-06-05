import { useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to an element.
 * Sets --border-opacity CSS variable (0→1) based on scroll progress
 * from 0 to `maxScroll` pixels.
 */
export function useScrollBorder<T extends HTMLElement>(maxScroll = 100) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / maxScroll, 1)
      ref.current?.style.setProperty('--border-opacity', String(progress))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [maxScroll])

  return ref
}
