const Projects = {
    init: async function (container) {
        await this.render(container);
        this.setupEventListeners();
    },

    render: async function (container) {
        container.innerHTML = `
            <div class="projects-container">
                <h2 class="section-title">Mis proyectos</h2>

                <div class="projects-content">
                    <p class="projects-intro">Aquí hay algunos de mis trabajos</p>

                    <div class="projects-grid">
                        <!-- Movil proyecto -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="assets/images/ProyectoMovil.png" alt="Visualizador de algoritmos">
                            </div>
                            <div class="project-details">
                                <div class="project-type mobile">Mobile</div>
                                <h3 class="project-title">Visualizador de Estructura de Algoritmos</h3>
                                <p class="project-description">Aplicación móvil para Android que permite visualizar de forma interactiva diferentes estructuras algorítmicas, 
                                facilitando el aprendizaje de conceptos complejos de programación.</p>
                                <div class="project-tech">
                                    <span class="tech-tag">Kotlin</span>
                                    <span class="tech-tag">Android Studio</span>
                                    <span class="tech-tag">Material Design</span>
                                </div>
                                <a href="https://github.com/AscencioSIUU/DataStructureVisualizer-" target="_blank" class="project-link">
                                    <img src="assets/images/Github-icon.png" alt="Github">
                                    <span>Ver repositorio</span>
                                </a>
                            </div>
                        </div>

                        <!-- Proyecto 2: Liga Tracker (Full Stack) -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="assets/images/FullStack.png" alt="Liga Tracker-vista completa">
                            </div>
                            <div class="project-details">
                                <div class="project-type fullstack">Full Stack</div>
                                <h3 class="project-title">Liga Tracker</h3>
                                <p class="project-description">Plataforma web para seguimiento de la
                                liga que permite a los usuarios ver marcadores con un api en formato json que se puede ver, 
                                estadísticas de partidos, administar y agregar datos.</p> 
                                <div class="project-tech">
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                    <span class="tech-tag">Golang</span>
                                    <span class="tech-tag">PostgresSQL</span>
                                </div>
                                <a href="https://github.com/nicoCT4/La-Liga-Tracker" target="_blank" class="project-link">
                                    <img src="assets/images/Github-icon.png" alt="Github">
                                    <span>Ver repositorio</span>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Proyecto 3: Juego de Memoria (Frontend) -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="assets/images/MemoriaFront.png" alt="Juego de Memoria">
                            </div>
                            <div class="project-details">
                                <div class="project-type frontend">Frontend</div>
                                <h3 class="project-title">Juego de Memoria</h3>
                                <p class="project-description">Juego interactivo de memoria desarrollado con tecnologías web modernas.</p>
                                <div class="project-tech">
                                    <span class="tech-tag">React</span>
                                    <span class="tech-tag">Babel</span>
                                    <span class="tech-tag">HTML</span>
                                    <span class="tech-tag">CSS</span>
                                </div>
                                <a href="https://github.com/nicoCT04/Kungfu-memory" target="_blank" class="project-link">
                                    <img src="assets/images/Github-icon.png" alt="Github">
                                    <span>Ver repositorio</span>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Proyecto 4: Nave con Rust -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="assets/images/space_ship1.png" alt="Juego de Memoria">
                            </div>
                            <div class="project-details">
                                <div class="project-type graphics">Graficas por computadora</div>
                                <h3 class="project-title">Nave hecha con Rust</h3>
                                <p class="project-description">Este proyecto es un renderizador de software para un modelo 3D de una nave espacial creado en Blender. Demuestra conceptos básicos de renderizado 3D, incluyendo la carga de modelos, la rasterización de triángulos y transformaciones básicas..</p>
                                <div class="project-tech">
                                    <span class="tech-tag">Rust</span>
                                </div>
                                <a href="https://github.com/nicoCT04/SpaceShip_Rust" target="_blank" class="project-link">
                                    <img src="assets/images/Github-icon.png" alt="Github">
                                    <span>Ver repositorio</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    setupEventListeners: function() {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.3
            });
            observer.observe(projectsSection);
        }
    }
};

export default Projects;