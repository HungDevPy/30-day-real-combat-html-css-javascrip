const menuMobile = document.querySelector('.menu-mobile');
const bgMenu=document.querySelector('.bg-menu');
const menuBox = document.querySelector('.menu-mobile-box');
const hamburgerIcon = document.querySelector('.active');
const closeIcon = document.querySelector('.no-active');

menuMobile.addEventListener('click', () => {
  // Toggle the 'show' class to control visibility
  menuMobile.classList.toggle('show');
  menuBox.classList.toggle('show');
  bgMenu.classList.toggle('show-menu');
});
