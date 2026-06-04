import type { ReactNode } from 'react'
import styles from './Link.module.css'

type LinkView = 'text' | 'primary' | 'secondary'

type LinkProps = {
  href: string
  children: ReactNode
  view?: LinkView
  /** Download attribute — true, or a suggested filename. */
  download?: string | boolean
  /** Accent-colored emphasis variant (only applies to view="text"). */
  emphasis?: boolean
  className?: string
}

/** Reusable link. Auto-handles external (http) targets. */
export function Link({ href, children, view = 'text', download, emphasis, className }: LinkProps) {
  const external = /^https?:/.test(href)
  const classes = [
    styles.link,
    styles[view],
    view === 'text' && emphasis && styles.emphasis,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      className={classes}
      href={href}
      {...(download != null ? { download } : {})}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
