import useReveal from '../hooks/useReveal'

// Cada sección se renderiza como <section id="x-section" class="section">, igual que en la versión anterior
export default function Section({ name, children }) {
  const id = `${name}-section`
  useReveal(id)
  return (
    <section id={id} className="section">
      {children}
    </section>
  )
}
