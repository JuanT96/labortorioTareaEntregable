  function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}
// Detectar clics fuera del menú para cerrarlo
document.addEventListener('click', function(event) {
  const nav = document.getElementById('mobileNav');
  const toggle = document.querySelector('.menu-toggle');

  if (!nav.contains(event.target) && !toggle.contains(event.target)) {
    nav.classList.remove('open');
  }
});

// Mostrar fondo del header al hacer scroll
window.addEventListener('scroll', function () {
  const header = document.getElementById('mainHeader');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
  const nav = document.getElementById('mobileNav');
  const toggle = document.querySelector('.menu-toggle');

  const isClickInsideMenu = nav.contains(event.target);
  const isClickOnToggle = toggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    nav.classList.remove('open');
  }
});