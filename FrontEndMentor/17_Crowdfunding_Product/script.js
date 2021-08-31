'use strict'

// Selectors
const btn_bookmark = document.querySelector('.bookmark');
let btl_bookmark_icon;
let circle;
let path;

// Toggle Bookmark
function bookmark() {
  btn_bookmark.classList.toggle('bookmarked');
  if (btn_bookmark.classList.contains('bookmarked')) {
    circle[0].setAttribute("fill", "hsl(176, 72%, 28%)"); 
    path[0].setAttribute("fill", "#FFFFFF");
  } else {
    circle[0].setAttribute("fill", "#2F2F2F"); 
    path[0].setAttribute("fill", "#B1B1B1"); 
  }
}

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