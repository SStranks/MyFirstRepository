'use strict'

// Selectors
const btn_bookmark = document.querySelector('.bookmark');
const radioBtn  = document.querySelectorAll('input[name="radio-btn-1"]')
const modalPledges = document.querySelectorAll('.modalPledge');
// const enterPledge = document.querySelectorAll('.enterPledge');
let btl_bookmark_icon;
let circle;
let path;



// Main: Toggle Bookmark
function bookmark() {
  btn_bookmark.classList.toggle('bookmarked');
  if (btn_bookmark.classList.contains('bookmarked')) {
    circle[0].setAttribute("fill", "hsl(176, 72%, 28%)"); 
    path[0].setAttribute("fill", "#FFFFFF");
    btn_bookmark.textContent = 'Bookmarked';
  } else {
    circle[0].setAttribute("fill", "#2F2F2F"); 
    path[0].setAttribute("fill", "#B1B1B1"); 
    btn_bookmark.textContent = 'Bookmark';
  }
}

// Model: Toggle Pledge Boxs - Radio Button
let currentPledge
let targetPledge
let elementChildren
function radioSelect (e) {
  // Selecting already selected pledge radio button
  if (e.target.value == currentPledge) return;

  // Reset any existing moralPledge border styles
  if (currentPledge) {
    currentPledge.style.border = "1px solid hsla(var(--Dark-gray), 0.2)";
    // Hide the pledge section of the modalPledge
    elementChildren = currentPledge.children;
    for (let element of elementChildren) {
      if (element.classList.contains('enterPledge')) {
        element.classList.add('hidden');
      }
    }
  }

  // Find radio button value, extract number; Loop moralPledge array and apply style
  targetPledge = (e.target.value).slice(-1);
  modalPledges[targetPledge - 1].style.border = "1px solid hsla(var(--Moderate-cyan))";
  currentPledge = modalPledges[targetPledge - 1];
  // Show the pledge section of the modalPledge
  elementChildren = currentPledge.children;
  for (let element of elementChildren) {
      if (element.classList.contains('enterPledge')) {
        element.classList.remove('hidden');
      }
    }
};


// Event Handlers
btn_bookmark.addEventListener('click', bookmark);
window.addEventListener("load", function() {
  btl_bookmark_icon = document.querySelector('.svgClass').contentDocument;
  circle = btl_bookmark_icon.getElementsByTagName('circle')
  path = btl_bookmark_icon.getElementsByTagName('path');
  // Alternative: Using ID (but requires editing of the SVG file to include IDs on elements)
  // circle = btl_bookmark_icon.getElementById('circle');
  // path = btl_bookmark_icon.getElementById('path');
});
radioBtn.forEach(radio => radio.addEventListener('change', radioSelect));