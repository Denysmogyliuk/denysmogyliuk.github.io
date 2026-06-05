import IconMenuSvg from './IconMenu.svg?react'
import IconCloseSvg from './IconClose.svg?react'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import styles from './MobileMenu.module.css'

type NavLink = { href: string; label: string }

type MobileMenuProps = {
  links: NavLink[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const { isOpen, toggleMenu, closeMenu, menuRef } = useMobileMenu()

  return (
    <div ref={menuRef} className={`${styles.root} ${isOpen ? styles.isOpen : ''}`}>
      <button
        type="button"
        className={styles.menuButton}
        aria-label="Menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <IconMenuSvg className={styles.iconMenu} aria-hidden="true" />
        <IconCloseSvg className={styles.iconClose} aria-hidden="true" />
      </button>

      {isOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile">
          {links.map((link) => (
            <a key={link.href} className={styles.mobileNavLink} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  )
}
