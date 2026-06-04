import { contacts } from '../../data/content'
import section from '../../styles/section.module.css'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section className={section.section} id="contact" aria-labelledby="contact-heading">
      <h2 className={section.title} id="contact-heading">Contact</h2>
      <p className={styles.lead}>
        Open to interesting frontend challenges. The fastest way to reach me:
      </p>
      <ul className={styles.list}>
        {contacts.map((c) => {
          const external = c.href.startsWith('http')
          return (
            <li key={c.label}>
              <a
                className={styles.link}
                href={c.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className={styles.label}>{c.label}</span>
                <span className={styles.value}>{c.value}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
