
// Hamburger on Mobile && nav on mobile
const hamburger = document.getElementById('hamburger');
let nav = document.querySelector('#nav');

hamburger.onclick = (evt) => {
   hamburger.classList.toggle('hamburger-active');
   if(nav.classList[0] === 'hidden'){
      nav.classList.remove('hidden');
      nav.classList.add('block');
   }else {
      nav.classList.remove(nav.classList[0]);
      nav.classList.add('hidden');
   }
}

// Nacbar Scroll

window.onscroll = () => {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   (window.pageYOffset > fixedNav) ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
}