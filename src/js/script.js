
// Hamburger on Mobile && nav on mobile
const hamburger = document.getElementById('hamburger');
let nav = document.querySelector('#nav');

hamburger.onclick = (evt) => {
   hamburger.classList.toggle('hamburger-active');
   nav.classList.toggle('hidden');
   nav.classList.forEach((val) => {
      (val !== 'hidden') ? nav.classList.add('block') : nav.classList.remove('block');
   });
}

// Nacbar Scroll

window.onscroll = () => {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   (window.pageYOffset > fixedNav) ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
}