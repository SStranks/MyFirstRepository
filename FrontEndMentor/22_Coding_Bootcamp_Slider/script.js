'use strict'

// Selectors
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const infoPanel = document.querySelector('.info');
const image = document.querySelectorAll('.profile');


// Cycle information and imagery
function cycle(e) {
  // Check: Valid user input. If button is disabled, return.
  if (!(e.key == "ArrowLeft" || e.key == "ArrowRight" || e.type == "click")) return;
  if (e.key == "ArrowLeft" && btnPrev.classList.contains('btnToggle')) return;
  if (e.key == "ArrowRight" && btnNext.classList.contains('btnToggle')) return;
  // Toggle the hidden class on all content elements
  for (let child of infoPanel.children) {
    child.classList.toggle('hidden');
  };
  for (let child of image)  {
    child.classList.toggle('hidden');
  };
  // Switch the button accessibility
  btnPrev.classList.toggle('btnToggle');
  btnNext.classList.toggle('btnToggle');
};

// Event Handlers
btnPrev.addEventListener('click', cycle);
btnNext.addEventListener('click', cycle);
document.addEventListener('keydown', cycle);
