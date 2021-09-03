'use strict'


// Selections
const range = document.querySelector('.slider')
const track = document.querySelector('.track-inner')


// Update the left-hand colour of the slider track
const updateSlider = (value) => {
  track.style.width = `${value}%`
}


// Event Handlers
range.oninput = (e) =>
  updateSlider(e.target.value)


// Initial State
updateSlider(50) // Init valu