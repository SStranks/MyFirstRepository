'use strict'

// Elements
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('ul')
const windowResize = window.matchMedia("(max-width: 375px)");

// Toggle Menu
function toggleMenu() {
  navMenu.classList.toggle('hidden');
};

// Window Resize Event
function mobileLayout(x) {
  if (x.matches) {
    navMenu.classList.add('hidden');
    menuButton.classList.remove('hidden');
  } else {
    navMenu.classList.remove('hidden');
    menuButton.classList.add('hidden');
  }
};

// Event Handler
menuButton.addEventListener('click', toggleMenu);
windowResize.addEventListener('change', mobileLayout);
mobileLayout(windowResize);