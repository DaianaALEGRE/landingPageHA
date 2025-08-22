const hero = document.querySelector('.hero');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    hero.classList.add('light-mode');
    header.classList.add('scrolled');
  } else {
    hero.classList.remove('light-mode');
    header.classList.remove('scrolled');
  }
});
const logo = document.querySelector('.logo');
const maxMove = window.innerHeight * 1; // hasta dónde se mueve el logo (80% de alto ventana)

window.addEventListener('scroll', () => {
  // scrolleo en porcentaje (entre 0 y 1)
  let scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (scrollPercent > 1) scrollPercent = 1;  // no pase de 1

  let newTop = 20 + scrollPercent * maxMove * 0.70;

  // para que no pase la ventana
  if(newTop > maxMove) newTop = maxMove;

  // Actualizamos posición
  logo.style.top = `${newTop}px`;
});
const galleryItems = document.querySelectorAll(".gallery-item");
const galleryText = document.getElementById("gallery-text");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    // quitar active de todos los items
    galleryItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // actualizar texto
    galleryText.textContent = item.dataset.info;

    // reiniciar animación
    galleryText.classList.remove("active");
    void galleryText.offsetWidth;
    galleryText.classList.add("active");
  });
});
