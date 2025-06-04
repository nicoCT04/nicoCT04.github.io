const Contact = {
    init: async function (container) { 
        await this.render(container);
        this.setupEventListeners();    
    },

    render: async function (container) {
        container.innerHTML = `
        <div class = "contact-container">
            <h2 class = "section-title"> Contáctame </h2>

            <div class= "contact-content">
                <div class = "contact-text">
                    <p class = "intro-contact"> Sientete libre de contactarme para 
                    proyectos o un simple saludo </p>
                </div>
            
            <div class = "contact-info">
                <h2>Hablemos</h2>

                <div class = "contact-item email-contact">
                    <img src="assets/images/Gmail-icon.png" class="contact-icon" alt="Email">
                    <div>
                        <h3>Email</h3>
                        <p><a href="mailto:nicoconcua@gmail.com">nicoconcua@gmail.com</a></p>
                    </div>
                </div>

                <div class = "contact-item linkedin-contact">
                    <img src="assets/images/linkedin.png" class="contact-icon" alt="Linkedin">
                    <div>
                        <h3>Linkdedin</h3>
                        <p><a href="www.linkedin.com/in/nicoconcua" target="_blank">linkedin.com/in/nicoconcua</a></p>
                    </div>
                </div>

                <div class = "contact-item github-contact">
                    <img src="assets/images/Github-icon.png" class="contact-icon" alt="Github">
                    <div>
                        <h3>Github PERSONAL</h3>
                        <p><a href="https://github.com/nicoCT04" target="_blank">github.com/nicoCT04</a></p>
                        <h3>Github ACADEMÍCO</h3>
                        <p><a href="https://github.com/nicoCT4" target ="_blank">github.com/nicoCT4</a></p>
                    </div>
                </div>

                <div class = "contact-form">
                    <h2>Mándame un mensaje</h2>
                    <form id = "contact-form">
                        <div class = "form-group">
                            <label for ="name">Tu nombre</label>
                            <input type="text" id="name" name = "name" required>
                        </div>

                        <div class = "form-group">
                            <label for ="email">Email</label>
                            <input type="email" id="email" name = "email" required>
                        </div>

                        <div class = "form-group">
                            <label for ="subject">Asunto</label>
                            <input type="text" id="subject" name = "subject" required>
                        </div>

                        <div class = "form-group">
                            <label for ="message">Tu mensaje</label>
                            <textarea id = "message" name = "message" rows= "5" required></textarea>
                        </div>

                        <button type = "submit" class="btn btn-primary">Enviar mensaje </button>
                    </form>
                </div>
            </div>
        </div>
        `;
    },

    setupEventListeners: function() {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            const observer = new IntersectionObserver ((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.3
            });
            observer.observe(contactSection)
        }

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            // Inicializar EmailJS con tu clave pública
            emailjs.init("5mFkliu7G_2UU8iwb");
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Mostrar indicador de carga
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
                
                // Enviar email usando EmailJS
                emailjs.sendForm('service_vbyh422', 'template_5m3tbyh', contactForm)
                    .then(() => {
                        alert('¡Mensaje enviado correctamente!');
                        contactForm.reset();
                    })
                    .catch((error) => {
                        console.error('Error al enviar el mensaje:', error);
                        alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.');
                    })
                    .finally(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                    });
            });
        }
        }
};

export default Contact;