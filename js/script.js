const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.burger__menu');

burgerEl.addEventListener('click', function () {
  menuEl.classList.toggle('menu_show');
});