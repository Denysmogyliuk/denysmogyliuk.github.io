import { profile } from '../../data/content'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header} id="top">
      <a className={styles.wordmark} href="#top" aria-label={`${profile.name} — home`}>
        <img className={styles.mark} src="/logo.webp" alt="" width="36" height="36" />
        <span className={styles.name}>{profile.name}</span>
      </a>
      <ThemeToggle />
    </header>
  )
}
