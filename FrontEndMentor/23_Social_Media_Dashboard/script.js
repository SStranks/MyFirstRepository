'use strict'

// Selectors
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const themeText = document.querySelectorAll('p');
const docBody = document.querySelector('body');

// Main: Switch Theme
function changeTheme() {
  if (toggleSwitch.checked == true) {
    // Change theme mode text
    textSwitch("Light");
    // Change Background
    docBody.classList.toggle('bk-light');
  } else {
    textSwitch("Dark");
    // Change Background
    docBody.classList.toggle('bk-light');
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