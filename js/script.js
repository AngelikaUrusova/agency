const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.burger__menu');

burgerEl.addEventListener('click', function () {
  menuEl.classList.toggle('menu_show');
});


const nameBgEL = document.querySelector('.name__bg')
const photoEL = document.querySelector('.photo')
const personsName = document.querySelector('.persons__name')


photoEL.addEventListener('click', function () {
  nameBgEL.classList.toggle('active');
  personsName.classList.toggle('active');
});

