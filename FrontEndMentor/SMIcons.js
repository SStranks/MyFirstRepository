//   Social Media Icons
//   ------------------
//   Fills single path social media icons:
//   Pass the social media icons container in;
//   Extracts the default fill;
//   Applys the respective company colour to the icon on 'mouseenter';
//   Applys the default colour back on 'mouseleave';

//   ! Ensure icons are single fill path SVGs
//   ! Ensure icons contain .svgClass for selection

//   version:   1.0                 
//   date:      21/09/2021          
//   author:    Simon Stranks       
//   website:   github.com/SStranks 



'use strict'

// Selectors
const iconsCol = document.querySelectorAll('.svgClass');


// Icons: SVG Colour Change when mouse enter/leave
// Order of Brands: Facebook, Twitter, Pinterest, Intagram, YouTube, LinkedIn, Reddit, WhatsApp, Tumblr, Behance, Flickr, 
// Skype, Vimeo, Blogger, Digg, G+
function iconColor(e) {
  if (e.type == "mouseenter") {
    if (e.target.children[0].classList.contains('iFB')) path[0][0].setAttribute("fill", "hsl(221, 44%, 41%)")
    else if (e.target.children[0].classList.contains('iTW')) path[1][0].setAttribute("fill", "hsl(197, 100%, 47%)")
    else if (e.target.children[0].classList.contains('iPI')) path[2][0].setAttribute("fill", "hsl(357, 70%, 46%)")
    else if (e.target.children[0].classList.contains('iIN')) path[3][0].setAttribute("fill", "hsl(207, 42%, 43%)")
    else if (e.target.children[0].classList.contains('iYT')) path[4][0].setAttribute("fill", "hsl(0, 100%, 50%)")
    else if (e.target.children[0].classList.contains('iLI')) path[5][0].setAttribute("fill", "hsl(210, 90%, 40%)")
    else if (e.target.children[0].classList.contains('iRE')) path[6][0].setAttribute("fill", "hsl(16, 100%, 50%)")
    else if (e.target.children[0].classList.contains('iWA')) path[7][0].setAttribute("fill", "hsl(129 62% 44%)")
    else if (e.target.children[0].classList.contains('iTU')) path[8][0].setAttribute("fill", "hsl(209, 36%, 32%)")
    else if (e.target.children[0].classList.contains('iBE')) path[9][0].setAttribute("fill", "hsl(226, 100%, 51%)")
    else if (e.target.children[0].classList.contains('iFL')) path[10][0].setAttribute("fill", "hsl(213, 100%, 43%)")
    else if (e.target.children[0].classList.contains('iSK')) path[11][0].setAttribute("fill", "hsl(196, 100%, 47%)")
    else if (e.target.children[0].classList.contains('iVI')) path[12][0].setAttribute("fill", "hsl(202, 77%, 73%)")
    else if (e.target.children[0].classList.contains('iBL')) path[13][0].setAttribute("fill", "hsl(17, 98%, 51%)")
    else if (e.target.children[0].classList.contains('iDI')) path[14][0].setAttribute("fill", "hsl(216, 100%, 44%)")
    else if (e.target.children[0].classList.contains('iGO')) path[15][0].setAttribute("fill", "hsl(6, 69%, 54%)");
  }

  if (e.type == "mouseleave") {
    if (e.target.children[0].classList.contains('iFB')) path[0][0].setAttribute("fill", pathFillDefault[0]);
    else if (e.target.children[0].classList.contains('iTW')) path[1][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iPI')) path[2][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iIN')) path[3][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iYT')) path[4][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iLI')) path[5][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iRE')) path[6][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iWA')) path[7][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iTU')) path[8][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iBE')) path[9][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iFL')) path[10][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iSK')) path[11][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iVI')) path[12][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iBL')) path[13][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iDI')) path[14][0].setAttribute("fill", pathFillDefault[0])
    else if (e.target.children[0].classList.contains('iDI')) path[15][0].setAttribute("fill", pathFillDefault[0]);
  }
}


// Icons: Use Parent Container of Icons - 3rd argument is event capture/delegation
icons.addEventListener('mouseenter', iconColor, true);
icons.addEventListener('mouseleave', iconColor, true);

// Load Handlers: Collect the SVGs and their main Path once page has loaded (necessary for external SVGs)
let path = [];
let pathFillDefault = [];
window.addEventListener("load", function() {
  for (let [i, el] of iconsCol.entries()) {
    let svg = el.contentDocument
    path[i] = svg.getElementsByTagName('path');
    pathFillDefault[i] = path[i][0].getAttribute("fill");
  }
});