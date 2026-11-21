import { useEffect } from 'react'

// Igual que antes: agrega la clase "visible" a la sección cuando entra en pantalla
export default function useReveal(id) {
  useEffect(() => {
    const section = document.getElementById(id)
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [id])
}
