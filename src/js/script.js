
// Hamburger on Mobile && nav on mobile
const hamburger = document.getElementById('hamburger');
const span2 = document.querySelector('#hamburger span:nth-child(2)')
let nav = document.querySelector('#nav');

hamburger.onclick = (evt) => {
   hamburger.classList.toggle('hamburger-active');
   nav.classList.toggle('hidden');
   nav.classList.forEach((val) => {
      if(val !== 'hidden') {
          nav.classList.add('block');
          span2.setAttribute('class', 'hamburger-line hamburger-active transition');
      } else{
          nav.classList.remove('block');
          span2.removeAttribute('class', 'hamburger-line hamburger-active transition')
      }
   });
}

// Nacbar Scroll

window.onscroll = () => {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   (window.pageYOffset > fixedNav) ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
}
