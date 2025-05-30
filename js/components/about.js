const About = {
   init: async function(container) {
      await this.render(container);
      this.setupEventListeners();
   },

   render: async function (container) {
      container.innerHTML = `
         <div class="about-container">
            <h2 class="section-title">Sobre Mí</h2>

            <div class="about-content">
               <div class="about-image">
                  <div class="image-container">
                     <img src="assets/images/ProfilePic.jpeg" alt="Nicolás Concuá">
                  </div>
               </div>

               <div class="about-text">
                  <p class="about-intro"> Hola, soy <span class="highlight">Nicolás Concuá</span>, estudiante de tercer año de 
                  Ingeniería en Ciencias de la Computación y Tecnologia de la Información
                  en la Universidad del Valle de Guatemala.</p>
                  
                  <p>Actualmente estoy aprendiendo a ser un programador Full Stack utilizando Postgres como sistema de base de datos y 
                  para front end usando tanto Vue.js como JavaScript</p>
                  
                  <p>Mi objetivo en estos momentos es encontrar trabajo de tiempo completo o parcial en el área de programación, 
                  busco poder seguir aprendiendo más lenguajes y poder empezar a tener experiencia laboral.</p>
                  
                  <div class="detail-item">
                     <i class="icon location"></i>
                     <div>
                        <h3>Ubicación</h3>
                        <p>Guatemala, Guatemala</p>
                     </div>
                  </div>

                  <div class="detail-item">
                     <i class="icon interests"></i>
                     <div>
                        <h3>Intereses</h3>
                        <p>Desarrollo Web, Seguridad Informatica, Gimnasio, Futbol, Softball</p>
                     </div>
                  </div>
                  
                  <!-- Botones movidos dentro de about-text -->
                  <div class="about-buttons">
                     <a href="#contact-section" class="btn btn-primary">Contactame</a>
                     <a href="assets/documents/CSV Nicolás Concuá.pdf" target="_blank" class="btn btn-secondary">Descargar CV</a>
                  </div>
               </div>
            </div>
         </div>
      `;
   },

   setupEventListeners: function() {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
         const observer = new IntersectionObserver((entries) => {
               entries.forEach(entry => {
                  if (entry.isIntersecting) {
                     entry.target.classList.add('visible');
                  }
               });
         }, {
               threshold: 0.3
         });
         observer.observe(aboutSection);
      }
   }
};

export default About;