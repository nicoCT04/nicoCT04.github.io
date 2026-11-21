import Section from './Section.jsx'
import { trabajos } from '../data/experience.js'

export default function Experience() {
  return (
    <Section name="experience">
      <div className="experience-container">
        <h2 className="section-title">Experiencia</h2>

        <div className="experience-content">
          <p className="experience-intro">
            Experiencia en integraciones de datos, automatización y desarrollo de software, ahora como
            Software Analyst Intern en Tigo.
          </p>

          <div className="experience-jobs">
            {trabajos.map((t) => (
              <div className="job-card" key={t.empresa}>
                <div className="job-date">{t.fechas}</div>
                <h3>{t.puesto}</h3>
                <h4>{t.empresa}</h4>
                {t.puntos.length > 0 && (
                  <ul className="job-points">
                    {t.puntos.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {t.tech && (
                  <div className="project-tech">
                    {t.tech.map((x) => (
                      <span className="tech-tag" key={x}>{x}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="experience-gif">
            <img src="assets/images/dogG.gif" alt="Perro en llamas" className="decorative-gif" />
          </div>
          <div className="experience-buttons">
            <a href="#projects-section" className="btn btn-primary">Ver mis proyectos</a>
            <a href="#skills-section" className="btn btn-secondary">Conoce mis habilidades</a>
          </div>
        </div>
      </div>
    </Section>
  )
}
