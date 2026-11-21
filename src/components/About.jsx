import Section from './Section.jsx'

export default function About() {
  return (
    <Section name="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Mí</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="assets/images/ProfilePic.jpeg" alt="Nicolás Concuá" />
            </div>
          </div>

          <div className="about-text">
            <p className="about-intro">
              Hola, soy <span className="highlight">Nicolás Concuá</span>, estudiante de quinto año de
              Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la
              Universidad del Valle de Guatemala.
            </p>

            <p>
              Me apasiona aplicar <span className="highlight">Deep Learning</span> y ciencia de datos a
              problemas reales: desde modelos que reconocen lengua de señas o juegan Atari, hasta bots
              con LLMs para la agroindustria guatemalteca. También desarrollo aplicaciones full stack
              con Python, FastAPI, React y PostgreSQL.
            </p>

            <p>
              Trabajé como Implementation Developer en <span className="highlight">SENTO AI</span>,
              construyendo integraciones y procesos ETL sobre APIs, SFTP y AWS, y actualmente soy
              Software Analyst Intern en <span className="highlight">Tigo</span>. Busco seguir creciendo
              en proyectos de inteligencia artificial, datos y software.
            </p>

            <div className="detail-item">
              <i className="icon location"></i>
              <div>
                <h3>Ubicación</h3>
                <p>Guatemala, Guatemala</p>
              </div>
            </div>

            <div className="detail-item">
              <i className="icon interests"></i>
              <div>
                <h3>Intereses</h3>
                <p>Inteligencia Artificial, Ciencia de Datos, Desarrollo Web, Seguridad Informática, Gimnasio, Fútbol, Softball</p>
              </div>
            </div>

            <div className="about-buttons">
              <a href="#contact-section" className="btn btn-primary">Contactame</a>
              <a href="assets/documents/CV-Nicolas-Concua.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">Descargar CV</a>
              <a href="assets/documents/CV-Nicolas-Concua-E.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">Descargar CV en Inglés</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
