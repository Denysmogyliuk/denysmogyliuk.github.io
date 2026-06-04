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
