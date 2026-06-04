import { profile } from '../../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* faint background scribble */}
      <span className={styles.scribbleBg} aria-hidden="true" />

      <div className={styles.head}>
        <p className={styles.greeting}>{profile.greeting}</p>
        <h1 className={styles.name} id="hero-heading">
          <span>Denys</span>
          <span>Mogyliuk</span>
        </h1>
      </div>

      {/* accent card (replaces the reference's portrait block) */}
      <div className={styles.card}>
        <div className={styles.cardArt} aria-hidden="true">
          <span className={styles.scribbleArt} />
        </div>
        <div className={styles.cardBody}>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <a className={styles.cta} href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
