const Skills = {
    init: async function (container) {
        await this.render(container);
        this.setupEventListener();
    },

    render: async function (container) {
        container.innerHTML = `
        <div class="skills-container">
            <h2 class="section-title">Mis habilidades</h2>

            <div class="skills-content">
                <p class="skills-intro">Tecnologías con las que he estado trabajando</p>

                <div class="skills-grid">
                    <!--columna izquierda -->
                    <div class="skills-column">
                        <!-- Frontend -->
                        <div class="skill-category">
                            <h3 class="category-title">Frontend</h3>
                            <div class="skill-items">
                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/html-5Logo2.png" alt="HTML5">
                                    </div>
                                    <span>HTML</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/cssLogo.png" alt="CSS">
                                    </div>
                                    <span>CSS</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/JavaScript-logo.png" alt="JavaScript">
                                    </div>
                                    <span>JavaScript</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/ReactLogo2.png" alt="React">
                                    </div>
                                    <span>React</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/VueLogo2.png" alt="Vue.js">
                                    </div>
                                    <span>Vue.js</span>
                                </div>
                            </div>
                        </div>
                        
                        <!--Backend -->
                        <div class="skill-category">
                            <h3 class="category-title">Backend</h3>
                            <div class="skill-items">
                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/PythonLogo.png" alt="Python">
                                    </div>
                                    <span>Python</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/JavaCLogo2.png" alt="JavaC">
                                    </div>
                                    <span>JavaC</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/NetLogo.png" alt=".Net">
                                    </div>
                                    <span>.Net</span>
                                </div>
                            </div>
                        </div>

                        <!--Otras -->
                        <div class="skill-category">
                            <h3 class="category-title">Otras</h3>
                            <div class="skill-items">
                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/KotlinLogo2.png" alt="Kotlin">
                                    </div>
                                    <span>Kotlin</span>
                                </div>

                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/AndroidStudioLogo.png" alt="AndroiddStudio">
                                    </div>
                                    <span>Android Studio</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Columna Derecha -->
                    <div class="skills-column">
                        <!-- Bases de datos -->
                        <div class="skill-category">
                            <h3 class="category-title">Base de Datos</h3>
                            <div class="skill-items">
                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/PostgresLogo.png" alt="PostgreSQL">
                                    </div>
                                    <span>PostgreSQL</span>
                                </div>
                            </div>
                        </div>

                        <!-- control de versiones -->
                        <div class="skill-category">
                            <h3 class="category-title">Control de versiones</h3>
                            <div class="skill-items">
                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/GitLogo.png" alt="Git">
                                    </div>
                                    <span>Git</span>
                                </div>
                            </div>
                        </div>

                        <!-- Diseño -->
                        <div class="skill-category">
                            <h3 class="category-title">Diseño</h3>
                            <div class="skill-items">
                                <div class="skill-box">
                                    <div class="skill-icon">
                                        <img src="assets/images/Figma-logo.png" alt="Figma">
                                    </div>
                                    <span>Figma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    setupEventListener: function() {
        const skillSection = document.getElementById("skills-section");
        if (skillSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        entry.target.classList.add("visible");
                    }
                });
            }, {
                threshold: 0.3
            });
            observer.observe(skillSection)
        }
    }
};

export default Skills;