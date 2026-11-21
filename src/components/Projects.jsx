import { useState } from 'react'
import Section from './Section.jsx'
import { proyectos, DESTACADOS } from '../data/projects.js'

function ProjectCard({ p }) {
  return (
    <div className="project-card">
      <div className={`project-image${p.imagen ? '' : ' placeholder'}`}>
        {p.imagen ? (
          <img src={p.imagen} alt={p.titulo} loading="lazy" />
        ) : (
          <div className="project-placeholder">
            <span>🔒</span>
            <p>{p.titulo}</p>
          </div>
        )}
      </div>
      <div className="project-details">
        <div className={`project-type ${p.tipo}`}>{p.etiqueta}</div>
        <h3 className="project-title">{p.titulo}</h3>
        <p className="project-description">{p.descripcion}</p>
        {p.equipo && <p className="project-team">👥 {p.equipo}</p>}
        <div className="project-tech">
          {p.tech.map((t) => (
            <span className="tech-tag" key={t}>{t}</span>
          ))}
        </div>
        {p.privado ? (
          <span className="project-link private">
            <span>🔒 Repositorio privado</span>
          </span>
        ) : (
          <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">
            <img src="assets/images/Github-icon.png" alt="Github" />
            <span>Ver repositorio</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [verTodos, setVerTodos] = useState(false)
  const visibles = verTodos ? proyectos : proyectos.slice(0, DESTACADOS)

  return (
    <Section name="projects">
      <div className="projects-container">
        <h2 className="section-title">Mis proyectos</h2>

        <div className="projects-content">
          <p className="projects-intro">
            Deep Learning, ciencia de datos e IA aplicada a problemas reales
          </p>

          <div className="projects-grid">
            {visibles.map((p) => (
              <ProjectCard p={p} key={p.titulo} />
            ))}
          </div>

          {proyectos.length > DESTACADOS && (
            <div className="projects-more">
              <button className="btn btn-secondary" onClick={() => setVerTodos((v) => !v)}>
                {verTodos ? 'Ver menos' : `Ver más proyectos (${proyectos.length - DESTACADOS})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
