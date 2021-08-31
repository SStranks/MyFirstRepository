'use strict'

// Selectors
// const btn_product = document.getElementById('product');
// const btn_company = document.getElementById('company');
// const btn_connect = document.getElementById('connect');
// const sub_1 = document.querySelector('.sub-1');
// const sub_2 = document.querySelector('.sub-2');
// const sub_3 = document.querySelector('.sub-3');
const mob_menu = document.getElementById('mob-menu');
const menu = document.querySelector('.menu-nav');
const windowResize = window.matchMedia("(max-width: 375px)");


// Mobile Menu Toggle
function menuActivate() {
  mob_menu.classList.toggle('exit');
  menu.classList.toggle('hidden');
}

// Window Resize Event
function mobileLayout(x) {
  if (x.matches) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
};

// Event Handler
mob_menu.addEventListener('click', menuActivate);
windowResize.addEventListener('change', mobileLayout);
mobileLayout(windowResize);



