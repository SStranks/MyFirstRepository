'use strict'

// Selectors
const toggle = document.querySelector('input[type=checkbox]');
const prices = document.querySelectorAll('.price');

// Main
function priceChange() {
  for (let price of prices) {
    price.classList.toggle('hidden');
  }
};

// Arrow Keys
function arrowKeys(e) {
  if (!(e.key == "ArrowLeft" || e.key == "ArrowRight")) return;
  if (e.key == "ArrowLeft" && toggle.checked == true) {
    toggle.checked = false;
    priceChange();
  }
  if (e.key == "ArrowRight" && toggle.checked == false) {
    toggle.checked = true;
    priceChange();
  }
};

// Event Handlers
toggle.addEventListener('click', priceChange);
document.addEventListener('keydown', arrowKeys);