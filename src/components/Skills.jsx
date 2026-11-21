import Section from './Section.jsx'
import { columnas } from '../data/skills.js'

export default function Skills() {
  return (
    <Section name="skills">
      <div className="skills-container">
        <h2 className="section-title">Mis habilidades</h2>

        <div className="skills-content">
          <p className="skills-intro">Tecnologías con las que he estado trabajando</p>

          <div className="skills-grid">
            {columnas.map((columna, i) => (
              <div className="skills-column" key={i}>
                {columna.map((cat) => (
                  <div className="skill-category" key={cat.titulo}>
                    <h3 className="category-title">{cat.titulo}</h3>
                    <div className="skill-items">
                      {cat.items.map(([nombre, icono]) => (
                        <div className="skill-box" key={nombre}>
                          <div className="skill-icon">
                            <img src={icono} alt={nombre} />
                          </div>
                          <span>{nombre}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
