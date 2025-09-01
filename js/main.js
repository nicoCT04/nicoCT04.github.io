// Importamos los componentes
import Header from './components/header.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Experience from './components/experience.js';
import Contact from './components/contact.js';
import Education from './components/education.js';

//Clase principal de la app

class App {
    constructor() {
        this.appElements = document.getElementById('app')
        this.components = {
            header : Header,
            about : About,
            projects : Projects,
            skills : Skills,
            experience : Experience,
            contact : Contact,
            education : Education
        }
    }

    async init() {
        try{
            //Elinar el indicador 
            const loadingElement = document.getElementById('loading')
            if (loadingElement){
                loadingElement.remove()
            }

            //Renderiazar componentes en orden
            await this.renderComponent('header')

            //Creamos contenedor principal
            const mainContent = document.createElement('main')
            mainContent.id = 'main-content'
            this.appElements.appendChild(mainContent)

            // Renderizar el resto de componentes
            await this.renderComponent('about', mainContent);
            await this.renderComponent('projects', mainContent);
            await this.renderComponent('skills', mainContent);
            await this.renderComponent('experience', mainContent);
            await this.renderComponent('education', mainContent)
            await this.renderComponent('contact', mainContent);


            //Funcionalidad adicional
            this.setupEventListener();

            //Manejar la navegacion
            if (window.location.hash) {
                const targetElement = document.querySelector(window.location.hash);
                if (targetElement){
                    setTimeout(() => {
                        const offset = 70;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                        this.smoothScrollTo(targetPosition);
                    },500)
                }
            }
        }catch (error) {
            console.error('Error incicializando la app', error)
            this.renderErrorMessage();
        }
    }

    async renderComponent (componentName, parent = this.appElements) {
        try{
            const component = this.components[componentName];
            if (!component || typeof component.init !== 'function'){
                throw new Error (`El componente ${componentName} no existe o no tiene un metodo render`);
            }

            //Crear seccion para el componente
            const section = document.createElement('section');
            section.id = `${componentName}-section`;
            section.className = 'section'
            parent.appendChild(section);

            //Render comp
            await component.init(section)

        }catch (error){
            console.error(`Error renderizando el componente ${componentName}:`, error);
        }
    }

    setupEventListener() {
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Agregar scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = anchor.getAttribute('href');
                
                // Actualizar la URL con el hash correcto
                if (targetId !== '#') {
                    window.history.pushState({}, '', targetId);
                } else {
                    window.history.pushState({}, '', '/');
                }

                // Si es solo # scroll al inicio 
                if (targetId === '#'){
                    this.smoothScrollTo(0);
                    return;
                }

                const targetElement = document.querySelector(targetId);
                if (!targetElement) {
                    console.error(`No se encontró el elemento con ID ${targetId}`);
                    return;
                }

                // Añadir un offset para la barra de navegación
                const offset = 70; // Ajusta según la altura de tu barra
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                // Si hay menú hamburguesa abierto, cerrarlo
                const hamburger = document.querySelector('.hamburger');
                const navLinks = document.querySelector('.nav-links');
                if (hamburger && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
                
                this.smoothScrollTo(targetPosition);
            });
        });
    }

    //Funcion para manejar el scroll suave
    smoothScrollTo(targetPosition){
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;

        //Duracion segun la distancia
        const baseDuration = 2000;
        const distance_factor = Math.abs(distance) / 1000;
        const duration = Math.min(baseDuration + (distance_factor*500), 3500)

        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            //Funcion de suavizado 
            const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * ease(progress));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation)
    }

    handleScroll() {
    }

    renderErrorMessage(){
        this.appElement.innerHTML = `
                    <div class="error-message">
                <h2>¡Ups! Algo salió mal</h2>
                <p>No pudimos cargar el contenido. Por favor, intenta recargar la página.</p>
                <button onclick="location.reload()">Recargar</button>
            </div>
        `;
    }

}

//Iniciar la app
document.addEventListener('DOMContentLoaded', () => {
    const app = new App ();
    app.init()
});

