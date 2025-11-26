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
                  <li><a href="#skills-section">Mis habilidades</a></li>
                  <li><a href="#experience-section">Experiencia</a></li>
                  <li><a href="#education-section">Educación</a></li>
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
               <p>Desarrollador web de cuarto año que busca nuevas oportunidades y experiencias de programación</p>
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
      this.createShootingStars();

      //Añadir evento de clic
      if (hamburger) {
         hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
         });
      }
   },

   createShootingStars: function() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      
      // Variable para llevar control de la esquina actual
      let currentCorner = 0;
      
      // Función para crear estrellas desde una esquina específica
      const createStarsFromCorner = (corner) => {
         // Crear 3 estrellas desde la misma esquina
         for (let i = 0; i < 3; i++) {
            setTimeout(() => {
               this.createSingleStar(hero, corner);
            }, i * 1000); // Una estrella cada segundo
         }
         
         // Cambiar a la siguiente esquina después de un tiempo
         setTimeout(() => {
            currentCorner = (currentCorner + 1) % 4; // Rotar entre las 4 esquinas
            createStarsFromCorner(currentCorner);
         }, 6000); // Cambiar de esquina cada 6 segundos
      }
      
      // Iniciar el ciclo desde la primera esquina
      createStarsFromCorner(currentCorner);
   },

   createSingleStar: function(parent, corner) {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Posición inicial según la esquina
      let startX, startY, endX, endY;
      
      switch(corner) {
         case 0: // Esquina superior izquierda
               startX = -100;
               startY = -100;
               endX = window.innerWidth - 50; // Termina visible dentro del lado derecho
               endY = window.innerHeight - 50; // Termina visible dentro del borde inferior
               break;
         case 1: // Esquina superior derecha
               startX = window.innerWidth + 100;
               startY = -100;
               endX = 50; // Termina visible dentro del lado izquierdo
               endY = window.innerHeight - 50; // Termina visible dentro del borde inferior
               break;
         case 2: // Esquina inferior izquierda
               startX = -100;
               startY = window.innerHeight + 100;
               endX = window.innerWidth - 50; // Termina visible dentro del lado derecho
               endY = 50; // Termina visible dentro del borde superior
               break;
         case 3: // Esquina inferior derecha
               startX = window.innerWidth + 100;
               startY = window.innerHeight + 100;
               endX = 50; // Termina visible dentro del lado izquierdo
               endY = 50; // Termina visible dentro del borde superior
               break;
      }
      
      // Establecer posición inicial
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      
      // Hacer la estrella más larga pero con ancho aleatorio
      const width = Math.random() * 100 + 150; // Entre 150px y 250px
      star.style.width = `${width}px`;
      
      // Calcular distancias de viaje
      const travelX = endX - startX;
      const travelY = endY - startY;
      star.style.setProperty('--travel-distance-x', `${travelX}px`);
      star.style.setProperty('--travel-distance-y', `${travelY}px`);
      
      // Ángulo inicial basado en la dirección de viaje
      const angle = Math.atan2(travelY, travelX) * (180 / Math.PI);
      const startAngle = angle + (Math.random() * 10 - 5); // Pequeña variación aleatoria
      const curveAngle = (Math.random() * 20 - 10); // Entre -10 y 10 grados
      
      star.style.setProperty('--start-angle', `${startAngle}deg`);
      star.style.setProperty('--curve-angle', `${curveAngle}deg`);
      
      // Duración aleatoria pero consistente
      const duration = Math.random() * 1 + 3; // Entre 3 y 4 segundos
      star.style.animationDuration = `${duration}s`;
      
      // Añadir al DOM
      parent.appendChild(star);
      
      // Eliminar después de la animación
      setTimeout(() => {
         if (parent.contains(star)) {
               parent.removeChild(star);
         }
      }, duration * 1000);
   }
}

export default Header;