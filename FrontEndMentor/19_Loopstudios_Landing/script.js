'use strict'

// Selectors
const btnMobMenu = document.getElementById('btn-menu');
const navMenu = document.querySelector('header');
const body = document.querySelector('body');
const title = document.querySelector('.title');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a.hv-1');


// Main
function mobileMenu() {
  btnMobMenu.classList.toggle('btn-close');
  navMenu.classList.toggle('modal');
  title.classList.toggle('hidden');
  body.classList.toggle('modal-open');
  nav.classList.toggle('show');
  // Disable Link Animation - x-axis position is incorrect for column left-align setup;
  for (let link of links) {
    link.classList.toggle('hv-1');
  }
}


// Event Handlers
btnMobMenu.addEventListener('click', mobileMenu);