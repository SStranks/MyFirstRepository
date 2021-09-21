//   Social Media Icons
//   ------------------
//   Pass the social media icons container in;
//   Extracts the default fill;
//   Applys the respective company colour to the icon on 'mouseenter';
//   Applys the default colour back on 'mouseleave';

//   version:   1.0                 
//   date:      21/09/2021          
//   author:    Simon Stranks       
//   website:   github.com/SStranks 

'use strict'

// Selectors
const icons = document.querySelector('.icons');
const iconsCol = document.querySelectorAll('.svgClass');
const btnMob = document.querySelector('.mob-menu');
const menu = document.querySelector('.menu');
const screen = document.querySelector('.modal-screen');


// Icons: SVG Colour Change on :hover
function iconColor(e) {
  if (e.type == "mouseenter") {
  if (e.target.children[0].classList.contains('iFB')) path[0][0].setAttribute("fill", "hsl(221, 44%, 41%)");
  if (e.target.children[0].classList.contains('iTW')) path[1][0].setAttribute("fill", "hsl(197, 100%, 47%)");
  if (e.target.children[0].classList.contains('iPI')) path[2][0].setAttribute("fill", "hsl(357, 70%, 46%)");
  if (e.target.children[0].classList.contains('iIN')) path[3][0].setAttribute("fill", "hsl(207, 42%, 43%)");
  }

  if (e.type == "mouseleave") {
    if (e.target.children[0].classList.contains('iFB')) path[0][0].setAttribute("fill", pathFillDefault[0]);
    if (e.target.children[0].classList.contains('iTW')) path[1][0].setAttribute("fill", pathFillDefault[0]);
    if (e.target.children[0].classList.contains('iPI')) path[2][0].setAttribute("fill", pathFillDefault[0]);
    if (e.target.children[0].classList.contains('iIN')) path[3][0].setAttribute("fill", pathFillDefault[0]);
  }
}

// Toggle Mobile Menu
function showMenu() {
  btnMob.classList.toggle('mob-close');
  screen.classList.toggle('modal');
  menu.classList.toggle('show');
};


// Event Handlers
btnMob.addEventListener('click', showMenu);

// Icons
icons.addEventListener('mouseenter', iconColor, true);
icons.addEventListener('mouseleave', iconColor, true)
// Load Handlers
let path = [];
let pathFillDefault = [];
window.addEventListener("load", function() {
  for (let [i, el] of iconsCol.entries()) {
    let svg = el.contentDocument
    path[i] = svg.getElementsByTagName('path');
    pathFillDefault[i] = path[i][0].getAttribute("fill");
  }
});