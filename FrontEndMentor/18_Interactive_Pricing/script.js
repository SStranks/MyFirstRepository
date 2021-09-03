'use strict'

// Selections
const range = document.querySelector('.slider');
const track = document.querySelector('.track-inner');
const pageViews = document.querySelector('.page-views');
const amount = document.querySelector('.amount');
const inputToggle = document.querySelector('input[type="checkbox"]');


// Update the left-hand colour of the slider track
const updateSlider = (value) => {
  track.style.width = `${value}%`;
  pageViews.textContent = `${value * 10}k pageviews`;
  // Updating the pricing
  updatePricing();
}

// Update pricing if toggle is switched
function updatePricing() {
  let value = range.value;
  // Check for toggle - discount 25%
  let discountMultiplier = 1;
  if (inputToggle.checked == true) {
    discountMultiplier = 0.75;
  }
  // Update pricing information
  if (value == 0) amount.textContent = `$${0 * discountMultiplier}` 
  else if (value > 0 && value < 5) amount.textContent = `$${8 * discountMultiplier}` 
  else if (value >= 5 && value < 10) amount.textContent = `$${12 * discountMultiplier}` 
  else if (value >= 10 && value < 50) amount.textContent = `$${16 * discountMultiplier}` 
  else if (value >= 50 && value < 100) amount.textContent = `$${24 * discountMultiplier}` 
  else if (value == 100) {
    amount.textContent = `$${36 * discountMultiplier}`;
    pageViews.textContent = `1m pageviews`;
  }
}


// Event Handlers
range.oninput = (e) => updateSlider(e.target.value);
inputToggle.addEventListener('click', updatePricing);

// Initial State
updateSlider(50);