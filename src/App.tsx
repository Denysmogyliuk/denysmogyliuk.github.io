import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { PageScribbles } from './components/PageScribbles/PageScribbles'
import styles from './App.module.css'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealHashTarget = () => {
      const id = window.location.hash.slice(1)
      if (id) document.getElementById(id)?.classList.add('is-visible')
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )
    elements.forEach((el) => observer.observe(el))

    // Reveal anchor targets immediately so navigation never lands on hidden content.
    revealHashTarget()
    window.addEventListener('hashchange', revealHashTarget)

    // SPA deep-link: the target element only exists after React mounts, so the
    // browser's initial hash scroll is a no-op — perform it ourselves.
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1))
      if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'auto' }))
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', revealHashTarget)
    }
  }, [])

  return (
    <>
      <PageScribbles />
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <Header />
      <Hero />
      <main id="main" className={styles.container}>
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </>
  )
}
