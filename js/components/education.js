const Education = {
    init: async function(container) {
        await this.render(container);
        this.setupEventListeners();
    },

    render: async function(container) {
        container.innerHTML = `
        <div class="education-container">
            <h2 class="section-title">Educación</h2>
            
            <div class="education-content">
                <div class="education-timeline">
                    <!-- Colegio - Lado izquierdo -->
                    <div class="education-item left">
                        <div class="education-card">
                            <div class="education-date">2007 - 2022</div>
                            <h3>Bachillerato en Ciencias y Letras</h3>
                            <h4>Colegio Americano del Sur</h4>
                            <p>Realicé toda mi formación académica en esta institución, desde pre-primaria hasta graduarme del bachillerato.</p>
                        </div>

                        <div class="education-icon graduation-icon">
                        <img src="../assets/images/sombreroGrad2.png" alt="Graduación">
                        </div>

                    </div>
                    
                    <!-- Universidad - Lado derecho -->
                    <div class="education-item right">
                        <div class="education-card">
                            <div class="education-date">2023 - Presente</div>
                            <h3>Ingeniería en Ciencias de la Computación</h3>
                            <h4>Universidad del Valle de Guatemala</h4>
                            <p>Actualmente cursando el septimo semestre. Enfocado en desarrollo web y aplicaciones.</p>
                        </div>

                        <div class= "education-icon code-icon">
                            <img src = "../assets/images/simbolo-codigo.png" alt ="Código">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        `;
    },
    
    setupEventListeners: function() {
        const educationSection = document.getElementById('education-section');
        if (educationSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.3
            });
            observer.observe(educationSection);
        }
    }
};

export default Education;