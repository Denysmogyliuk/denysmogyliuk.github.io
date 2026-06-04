import { profile } from '../../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.text}>
        <p className={styles.greeting}>{profile.greeting}</p>
        <h1 className={styles.name} id="hero-heading">{profile.name}</h1>
        <p className={styles.tagline}>{profile.tagline}</p>
        <p className={styles.intro}>{profile.intro}</p>
        <a className={styles.cta} href="#contact">Get in touch</a>
      </div>

      {/* Designer element — replaces the reference's portrait block */}
      <div className={styles.figure} aria-hidden="true">
        <div className={styles.panel}>
          <div className={styles.grid} />
          <div className={styles.glow} />
          <span className={styles.monogram}>DM</span>
          <span className={styles.badge}>
            <span className={styles.dot} />
            Available for work
          </span>
        </div>
      </div>
    </section>
  )
}
