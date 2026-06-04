import { profile } from '../../data/content'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header} id="top">
      <a className={styles.wordmark} href="#top" aria-label={`${profile.name} — home`}>
        <span className={styles.mark} aria-hidden="true">DM</span>
        <span className={styles.name}>{profile.name}</span>
      </a>
      <ThemeToggle />
    </header>
  )
}
