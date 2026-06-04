import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <a className={styles.skipLink} href="#main">Skip to content</a>
      <Header />
      <main id="main" className={styles.container}>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
