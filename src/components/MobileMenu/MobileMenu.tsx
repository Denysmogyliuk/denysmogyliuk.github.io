import { useRef } from 'react'
import IconMenuSvg from './IconMenu.svg?react'
import IconCloseSvg from './IconClose.svg?react'
import styles from './MobileMenu.module.css'

type NavLink = { href: string; label: string }

type MobileMenuProps = {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  function closeMenu() {
    detailsRef.current?.removeAttribute('open')
  }

  return (
    <details ref={detailsRef} className={styles.mobileDetails}>
      <summary className={styles.menuButton} aria-label="Menu">
          <IconMenuSvg className={styles.iconMenu} aria-hidden="true" />
            <IconCloseSvg className={styles.iconClose} aria-hidden="true" />
      </summary>

      <nav className={styles.mobileNav} aria-label="Mobile">
        {links.map((link) => (
          <a key={link.href} className={styles.mobileNavLink} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
        ))}
      </nav>
    </details>
  )
}
