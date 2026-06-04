import { profile, photo, resumeUrl } from '../../data/content'
import { Link } from '../Link/Link'
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
        <div className={styles.cardArt}>
          <picture>
            <source type="image/webp" srcSet={photo.webp} />
            <img
              className={styles.photo}
              src={photo.webp}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              decoding="async"
              loading="eager"
            />
          </picture>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <div className={styles.actions}>
            <Link view="primary" href="#contact">Get in touch</Link>
            <Link view="secondary" href={resumeUrl} download="Denys-Mogyliuk-CV.pdf">
              Download CV ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
