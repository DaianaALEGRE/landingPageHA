const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

// Efecto scroll hero y header
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    hero.classList.add('light-mode');
    header.classList.add('scrolled');
  } else {
    hero.classList.remove('light-mode');
    header.classList.remove('scrolled');
  }
});

// Movimiento del logo
const logo = document.querySelector('.logo');
const maxMove = window.innerHeight * 1; 

window.addEventListener('scroll', () => {
  let scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (scrollPercent > 1) scrollPercent = 1;  
  let newTop = 20 + scrollPercent * maxMove * 0.70;
  if(newTop > maxMove) newTop = maxMove;
  logo.style.top = `${newTop}px`;
});

// Galería
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryText = document.getElementById("gallery-text");

// Función para resetear textos móviles y palabras
function resetGalleryMobile() {
  galleryItems.forEach(item => {
    const mobileText = item.querySelector('.mobile-text');
    if(mobileText) mobileText.remove();

    const keyword = item.querySelector('.hover-keyword');
    if(keyword) keyword.style.display = "block";

    item.classList.remove("active");
  });
}

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const isMobile = window.innerWidth <= 652;

    if(isMobile){
      // móvil: mostrar texto debajo con slide
      resetGalleryMobile();

      item.classList.add("active");

      const mobileText = document.createElement('div');
      mobileText.classList.add('mobile-text');
      mobileText.textContent = item.dataset.info;
      item.appendChild(mobileText);

      // ocultar palabra sobre imagen del item clickeado
      const keyword = item.querySelector('.hover-keyword');
      if(keyword) keyword.style.display = "none";

    } else {
      // escritorio: mostrar en div general
      galleryItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      galleryText.textContent = item.dataset.info;
      galleryText.classList.remove("active");
      void galleryText.offsetWidth;
      galleryText.classList.add("active");
    }
  });
});

// Detecta cambios de tamaño de pantalla
window.addEventListener('resize', () => {
  if(window.innerWidth > 652){
    // pasar a escritorio: eliminar textos móviles y mostrar palabras
    resetGalleryMobile();
    galleryText.textContent = "";
  } else {
    // opcional: limpiar div general de escritorio
    galleryText.textContent = "";
  }
});