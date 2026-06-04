import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { PageScribbles } from './components/PageScribbles/PageScribbles'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      {/* Page-wide background scribbles (sprite), behind all content */}
      <PageScribbles />
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <Header />
      {/* Hero is full-bleed (full viewport width) */}
      <Hero />
      <main id="main" className={styles.container}>
        <Projects />
        <Experience />
        <Skills />
      </main>
      {/* Contact is full-bleed and doubles as the footer */}
      <Contact />
    </>
  )
}
