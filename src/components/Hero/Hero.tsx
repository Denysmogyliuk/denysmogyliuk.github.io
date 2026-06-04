import { profile } from '../../data/content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <p className={styles.role}>{profile.role}</p>
      <h1 className={styles.name} id="hero-heading">{profile.name}</h1>
      <p className={styles.intro}>{profile.intro}</p>
      <a className={styles.cta} href="#contact">Get in touch</a>
    </section>
  )
}
