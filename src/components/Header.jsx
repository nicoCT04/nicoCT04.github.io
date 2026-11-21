import { useEffect, useRef } from 'react'

const links = [
  ['#about-section', 'Sobre Mí'],
  ['#projects-section', 'Proyectos'],
  ['#skills-section', 'Mis habilidades'],
  ['#experience-section', 'Experiencia'],
  ['#education-section', 'Educación'],
  ['#contact-section', 'Contacto'],
]

// Crea una estrella fugaz desde una esquina (misma lógica que la versión anterior)
function createSingleStar(parent, corner) {
  const star = document.createElement('div')
  star.className = 'shooting-star'

  let startX, startY, endX, endY
  switch (corner) {
    case 0: // Esquina superior izquierda
      startX = -100; startY = -100
      endX = window.innerWidth - 50; endY = window.innerHeight - 50
      break
    case 1: // Esquina superior derecha
      startX = window.innerWidth + 100; startY = -100
      endX = 50; endY = window.innerHeight - 50
      break
    case 2: // Esquina inferior izquierda
      startX = -100; startY = window.innerHeight + 100
      endX = window.innerWidth - 50; endY = 50
      break
    default: // Esquina inferior derecha
      startX = window.innerWidth + 100; startY = window.innerHeight + 100
      endX = 50; endY = 50
  }

  star.style.left = `${startX}px`
  star.style.top = `${startY}px`
  star.style.width = `${Math.random() * 100 + 150}px` // Entre 150px y 250px

  const travelX = endX - startX
  const travelY = endY - startY
  star.style.setProperty('--travel-distance-x', `${travelX}px`)
  star.style.setProperty('--travel-distance-y', `${travelY}px`)

  const angle = Math.atan2(travelY, travelX) * (180 / Math.PI)
  star.style.setProperty('--start-angle', `${angle + (Math.random() * 10 - 5)}deg`)
  star.style.setProperty('--curve-angle', `${Math.random() * 20 - 10}deg`)

  const duration = Math.random() * 1 + 3 // Entre 3 y 4 segundos
  star.style.animationDuration = `${duration}s`

  parent.appendChild(star)
  setTimeout(() => star.remove(), duration * 1000)
}

export default function Header({ menuOpen, onToggleMenu }) {
  const heroRef = useRef(null)

  // Estrellas fugaces: 3 por esquina, rotando de esquina cada 6 segundos
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const timers = []
    let corner = 0
    const fromCorner = () => {
      for (let i = 0; i < 3; i++) {
        const c = corner
        timers.push(setTimeout(() => createSingleStar(hero, c), i * 1000))
      }
      timers.push(
        setTimeout(() => {
          corner = (corner + 1) % 4
          fromCorner()
        }, 6000),
      )
    }
    fromCorner()
    return () => timers.forEach(clearTimeout)
  }, [])

  const active = menuOpen ? ' active' : ''

  return (
    <section id="header-section" className="section">
      <nav className="nav">
        <div className="logo">
          <a href="#"><span>NicoCT04</span></a>
        </div>

        <div className={`nav-links${active}`}>
          <ul>
            {links.map(([href, text]) => (
              <li key={href}><a href={href}>{text}</a></li>
            ))}
          </ul>
        </div>

        <div className={`hamburger${active}`} onClick={onToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1>Hola soy <span>Nicolás Concuá</span></h1>
          <p>
            Estudiante de quinto año de Ingeniería en Ciencias de la Computación, enfocado en
            Deep Learning, ciencia de datos y desarrollo de software
          </p>
          <div className="hero-buttons">
            <a href="#projects-section" className="btn btn-primary">Ver proyectos</a>
            <a href="#contact-section" className="btn btn-secondary">Contactarme</a>
          </div>
        </div>
      </div>
    </section>
  )
}
