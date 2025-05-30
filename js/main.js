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

    setupEventListener(){
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(){
        //logica
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

