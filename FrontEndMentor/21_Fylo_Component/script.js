'use strict'

// Selections
const range = document.querySelector('.slider');
const track = document.querySelector('.track-inner');
const gbLeft1 = document.querySelector('#GBnum1');
const gbLeft2 = document.querySelector('#GBnum2');
const amount = document.querySelector('.amount');
const slideContainer = document.querySelector('.slidercontainer');


// Update the left-hand colour of the slider track
const updateSlider = (value) => {
  // 4px gap between the scroll outer and inner track, at each end
  let maxWidth = slideContainer.scrollWidth - 8;
  track.style.width = (value === 0) ? 0 : `${((maxWidth / 100) * value)}px`;
  // track.style.width = `${value}%`;
  gbLeft1.textContent = gbLeft2.textContent = `${value * 10}`;
}

// Event Handlers
range.oninput = (e) => updateSlider(e.target.value);

// Initial State
updateSlider(50);