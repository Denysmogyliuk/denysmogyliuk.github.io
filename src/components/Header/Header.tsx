import { profile } from '../../data/content'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { useHeader } from '../../hooks/useHeader'
import styles from './Header.module.css'

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { headerRef, scrollToTop } = useHeader()

  return (
    <header ref={headerRef} className={styles.header} id="top">
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
        {navLinks.map((link) => (
          <a key={link.href} className={styles.navLink} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <ThemeToggle />
        <MobileMenu links={navLinks} />
      </div>
    </header>
  )
}
