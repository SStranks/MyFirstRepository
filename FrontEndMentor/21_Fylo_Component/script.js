'use strict'

// Selections
const range = document.querySelector('.slider');
const track = document.querySelector('.track-inner');
const gbLeft1 = document.querySelector('#GBnum1');
const gbLeft2 = document.querySelector('#GBnum2');
const amount = document.querySelector('.amount');


// Update the left-hand colour of the slider track
const updateSlider = (value) => {
  track.style.width = `${value}%`;
  gbLeft1.textContent = gbLeft2.textContent = `${value * 10}`;
}

// Event Handlers
range.oninput = (e) => updateSlider(e.target.value);

// Initial State
updateSlider(50);