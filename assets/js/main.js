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
