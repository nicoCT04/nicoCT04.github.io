import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import { scrollToHash } from './scroll'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Quitar el indicador de carga
    document.getElementById('loading')?.remove()

    // Navegar al hash si la página se abrió con uno
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 500)
    }

    // Scroll suave para todos los enlaces internos (#...)
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      e.preventDefault()
      const targetId = anchor.getAttribute('href')
      window.history.pushState({}, '', targetId !== '#' ? targetId : '/')
      setMenuOpen(false)
      scrollToHash(targetId)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((o) => !o)} />
      <main id="main-content">
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
