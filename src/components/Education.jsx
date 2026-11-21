import Section from './Section.jsx'

export default function Education() {
  return (
    <Section name="education">
      <div className="education-container">
        <h2 className="section-title">Educación</h2>

        <div className="education-content">
          <div className="education-timeline">
            {/* Colegio - Lado izquierdo */}
            <div className="education-item left">
              <div className="education-card">
                <div className="education-date">2007 - 2022</div>
                <h3>Bachillerato en Ciencias y Letras</h3>
                <h4>Colegio Americano del Sur</h4>
                <p>Realicé toda mi formación académica en esta institución, desde pre-primaria hasta graduarme del bachillerato.</p>
              </div>
              <div className="education-icon graduation-icon">
                <img src="assets/images/sombreroGrad2.png" alt="Graduación" />
              </div>
            </div>

            {/* Universidad - Lado derecho */}
            <div className="education-item right">
              <div className="education-card">
                <div className="education-date">2023 - Presente</div>
                <h3>Ingeniería en Ciencias de la Computación</h3>
                <h4>Universidad del Valle de Guatemala</h4>
                <p>Actualmente en quinto año. Enfocado en inteligencia artificial, ciencia de datos y desarrollo de aplicaciones.</p>
              </div>
              <div className="education-icon code-icon">
                <img src="assets/images/simbolo-codigo.png" alt="Código" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
