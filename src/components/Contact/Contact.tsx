import { contacts, credits } from '../../data/content'
import styles from './Contact.module.css'

const email = contacts.find((c) => c.label === 'Email')
const links = contacts.filter((c) => c.label !== 'Email')

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
      <p className={styles.lead} id="contact-heading">
        Open to interesting frontend challenges. Let’s talk.
      </p>

      <div className={styles.columns}>
        <div className={`${styles.col} ${styles.left}`}>
          <h2 className={styles.colTitle}>Links</h2>
          <ul className={styles.list}>
            {links.map((c) => (
              <li key={c.label}>
                <a className={styles.link} href={c.href} target="_blank" rel="noopener noreferrer">
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.col} ${styles.center}`}>
          <h2 className={styles.colTitle}>Email</h2>
          {email && (
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href={email.href}>{email.value}</a>
              </li>
            </ul>
          )}
        </div>

        <div className={`${styles.col} ${styles.right}`}>
          <h2 className={styles.colTitle}>Credits</h2>
          <ul className={styles.list}>
            {credits.map((c) => (
              <li key={c.text}>
                {c.href ? (
                  <a className={styles.link} href={c.href} target="_blank" rel="noopener noreferrer">
                    {c.text}
                  </a>
                ) : (
                  <span className={styles.muted}>{c.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
