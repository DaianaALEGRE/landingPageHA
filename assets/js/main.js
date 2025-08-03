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
  // Calculamos cuánto scrolleo en porcentaje (entre 0 y 1)
  let scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  if (scrollPercent > 1) scrollPercent = 1;  // no pase de 1

  // Calculamos la nueva posición top, desde 20px hasta maxMove
  let newTop = 20 + scrollPercent * maxMove * 0.70;

  // Limitamos el movimiento para que no pase la ventana
  if(newTop > maxMove) newTop = maxMove;

  // Actualizamos posición
  logo.style.top = `${newTop}px`;
});