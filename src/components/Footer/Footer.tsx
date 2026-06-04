import { profile, contacts } from '../../data/content'
import styles from './Footer.module.css'

const YEAR = '2026'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Social links">
        {contacts.map((c) => {
          const external = c.href.startsWith('http')
          return (
            <a
              key={c.label}
              href={c.href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {c.label}
            </a>
          )
        })}
      </nav>
      <p className={styles.credit}>
        © {YEAR} {profile.name}. Built with React &amp; Vite.
      </p>
    </footer>
  )
}
