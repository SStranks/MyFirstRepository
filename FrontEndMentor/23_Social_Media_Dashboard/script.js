'use strict'

// Selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const themeText = document.querySelectorAll('p');
const docBody = document.querySelector('body');
const cards = document.querySelectorAll('.c-1, .c-2');
const text = document.querySelectorAll('h1, h2, .mode, .num-follow, .num-overview');

// Main: Switch Theme
function changeTheme() {
  if (toggleSwitch.checked == true) {
    // Change theme mode text
    textSwitch("Light");
    // Change Background
    document.querySelector('.bk-1').classList.toggle('opacity');
    for (let card of cards) {
      card.classList.toggle('card-color');
      card.classList.toggle('card-hover');
    }
    for (let words of text) words.classList.toggle('number-color');
  } else {
    textSwitch("Dark");
    // Change Background
    document.querySelector('.bk-1').classList.toggle('opacity');
    for (let card of cards) {
      card.classList.toggle('card-color');
      card.classList.toggle('card-hover');
    }
    for (let words of text) words.classList.toggle('number-color');
  }
};

// Main: Switch Mode Text
function textSwitch(theme) {
  for (let element of themeText) {
    if (element.textContent.includes("Mode")) {
      element.textContent = `${theme} Mode`;
      break;
    }
  }
};

// Event Handlers
toggleSwitch.addEventListener('click', changeTheme)
// Page Load Events
window.addEventListener('load', () => (docBody.classList.remove('transition')));