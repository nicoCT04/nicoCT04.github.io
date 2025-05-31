const Contact = {
    init: async function (container) { 
        await this.render(container);
        this.setupEventListeners();    
    },

    render: async function (container) {
        container.innerHTML = `
        <div class = "contact-container">
            <h2 class = "section-title"> Contactame </h2>

            <div class= "contact-content">
                <div class = "contact-text">
                    <p class = "intro-contact"> Sientete libre de contactarme para 
                    proyectos o un simple saludo amigable </p>
                </div>
            
            <div class = "contact-box-container">
                <h2>Hablemos</h2>
                <div class = "email-contact">
                    <i class = "email-icon"></i>
                    <div>
                        <h3>Email</h3>
                        <p>nicoconcua@gmail.com</p>
                    </div>
                </div>

                <div class = "linkedln-contact">
                    <i class = "linkedln-icon"></i>
                    <div>
                        <h3>Linkdedln</h3>
                        <p>www.linkedin.com/in/nicoconcua</p>
                    </div>
                </div>

                <div class = "github-contact">
                    <i class = "github-icon"></i>
                    <div>
                        <h3>Github Personal</h3>
                        <p><a href="https://github.com/nicoCT04" target="_blank">github.com/nicoCT04</a></p>
                        <h3>Github Academico</h3>
                        <p>https://github.com/nicoCT4</p>
                    </div>
                </div>

                <h2> Manda un mensaje </h2>
                <div class = "send-email">
                    <div>
                        <h3>Tu nombre</h3>
                        <h3>Email </h3>
                        <h3>Asunto </h3>
                        <h3>Tu mensaje</h3>
                    </div>
                    <div class="send-email-button">
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
    }
};

export default Contact;