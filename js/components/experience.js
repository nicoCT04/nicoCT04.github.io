const Experience = {
    init: async function (container) {
        await this.render(container)
        this.setupEventListeners();
    },

    render: async function (container) {
        container.innerHTML = `
        <div class="experience-container">
            <h2 class="section-title">Experiencia</h2>
            
            <div class="experience-content">
                <p class="experience-intro">Actualmente estoy en búsqueda de mi primera experiencia laboral formal en el campo del desarrollo de software.</p>
                
                <div class="experience-info">
                    <div class="experience-text">
                        <p>Durante mi formación académica, me he enfocado en desarrollar habilidades como programador <span class="highlight">Full Stack</span>, trabajando con diversas tecnologías y metodologías de desarrollo.</p>
                        
                        <p>He participado en <span class="highlight">múltiples proyectos grupales</span> que me han permitido simular entornos laborales reales, desarrollando habilidades de:</p>
                        
                        <ul class="experience-points">
                            <li>Trabajo en equipo y comunicación efectiva</li>
                            <li>Gestión de proyectos con metodologías ágiles</li>
                            <li>Control de versiones con Git y GitHub</li>
                            <li>Resolución de problemas complejos</li>
                        </ul>
                        
                        <p>Estoy preparado para aplicar estos conocimientos y aptitudes en un entorno profesional real.</p>
                    </div>
                </div>
                
                <div class = "experience-gif">
                    <img src = "../assets/images/dogG.gif" alt ="Perro en llamas" class = "decorative-gif">
                </div>
                <div class="experience-buttons">
                    <a href="#projects-section" class="btn btn-primary">Ver mis proyectos</a>
                    <a href="#skills-section" class="btn btn-secondary">Conocer mis habilidades</a>
                </div>
            </div>
        </div>
        `;
    },

    setupEventListeners: function() {
        const experienceSection = document.getElementById("experience-section");
        if (experienceSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            }, {
                threshold: 0.3
            });
            observer.observe(experienceSection)
        }
    }


};

export default Experience;