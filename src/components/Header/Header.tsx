import type { MouseEvent } from 'react'
import { profile } from '../../data/content'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

const NAV = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  // Always scroll to top — a plain href="#top" does nothing on repeat clicks
  // once the hash is already set.
  function scrollToTop(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }

  return (
    <header className={styles.header} id="top">
      <a
        className={styles.wordmark}
        href="#top"
        onClick={scrollToTop}
        aria-label={`${profile.name} — home`}
      >
        <img className={styles.mark} src="/logo.webp" alt="" width="36" height="36" />
        <span className={styles.name}>{profile.name}</span>
      </a>

      <nav className={styles.nav} aria-label="Primary">
        {NAV.map((item) => (
          <a key={item.href} className={styles.navLink} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  )
}
