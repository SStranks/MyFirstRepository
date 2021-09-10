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

// Event Handlers
toggle.addEventListener('click', priceChange)