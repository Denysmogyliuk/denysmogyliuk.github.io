import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`

  return (
    <section className={styles.section} id={id} aria-labelledby={headingId} data-reveal>
      <h2 className={styles.title} id={headingId}>
        {title}
      </h2>
      {children}
    </section>
  )
}
