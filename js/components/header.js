const Header = {
   init: async function (container) {
      //Renderizar el componente en el contenedor proporcionado
      await this.render(container);

      // configura eventos especificos
      this.setupEventListener();
   },

   render: async function (container) {
      container.innerHTML = `
         <nav class="nav">

            <div class="logo">
               <a href="#"><span>NicoCT04</span></a>
            </div>

            <div class="nav-links">
               <ul>
                  <li><a href="#about-section">Sobre Mí</a></li>
                  <li><a href="#projects-section">Proyectos</a></li>
                  <li><a href="#experience-section">Experiencia</a></li>
                  <li><a href="#contact-section">Contacto</a></li>
               </ul>
            </div>

            <div class="hamburger">  
               <span></span>
               <span></span>
               <span></span>
            </div>

         </nav>

         <div class="hero">
            <div class="hero-content">
               <h1>Hola soy <span>Nicolás Concuá</span></h1>
               <p>Desarrollador web de tercer a año que busca nuevas oportunidades y experiencias de programación</p>
               <div class= "hero-buttons">
                  <a href="#projects-section" class="btn btn-primary">Ver proyectos</a>
                  <a href="#contact-section" class="btn btn-secondary">Contactarme</a>
               </div>
            </div>
         </div>

         `;
   },

   setupEventListener: function(){
      //Obtener elementos del Dom
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');

      //Añadir evento de clic
      if (hamburger) {
         hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
         });
      }
   }
}

export default Header;