import { useState } from 'react'
import Section from './Section.jsx'

export default function Contact() {
  const [enviando, setEnviando] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const emailjs = window.emailjs
    if (!emailjs) {
      alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.')
      return
    }
    // Inicializar EmailJS con la clave pública
    emailjs.init('5mFkliu7G_2UU8iwb')
    setEnviando(true)
    emailjs
      .sendForm('service_vbyh422', 'template_5m3tbyh', form)
      .then(() => {
        alert('¡Mensaje enviado correctamente!')
        form.reset()
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error)
        alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.')
      })
      .finally(() => setEnviando(false))
  }

  return (
    <Section name="contact">
      <div className="contact-container">
        <h2 className="section-title"> Contáctame </h2>

        <div className="contact-content">
          <div className="contact-text">
            <p className="intro-contact">Sientete libre de contactarme para proyectos o un simple saludo</p>
          </div>

          <div className="contact-info">
            <h2>Hablemos</h2>

            <div className="contact-item email-contact">
              <img src="assets/images/Gmail-icon.png" className="contact-icon" alt="Email" />
              <div>
                <h3>Email</h3>
                <p><a href="mailto:nicoconcua@gmail.com">nicoconcua@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item linkedin-contact">
              <img src="assets/images/linkedin.png" className="contact-icon" alt="Linkedin" />
              <div>
                <h3>Linkedin</h3>
                <p><a href="https://www.linkedin.com/in/nicoconcua" target="_blank" rel="noreferrer">linkedin.com/in/nicoconcua</a></p>
              </div>
            </div>

            <div className="contact-item github-contact">
              <img src="assets/images/Github-icon.png" className="contact-icon" alt="Github" />
              <div>
                <h3>Github PERSONAL</h3>
                <p><a href="https://github.com/nicoCT04" target="_blank" rel="noreferrer">github.com/nicoCT04</a></p>
                <h3>Github ACADÉMICO</h3>
                <p><a href="https://github.com/nicoCT4" target="_blank" rel="noreferrer">github.com/nicoCT4</a></p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Mándame un mensaje</h2>
              <form id="contact-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Tu nombre</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tu mensaje</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={enviando}>
                  {enviando ? 'Enviando...' : 'Enviar mensaje '}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
