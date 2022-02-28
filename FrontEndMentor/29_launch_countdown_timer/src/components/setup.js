export default function setupMovement() {
  // Initial Ground CSS Style
  const groundElems = document.querySelectorAll('[data-ground]');
  groundElems[0].style.setProperty('--left', 0);
  groundElems[1].style.setProperty('--left', 100);
  // Initial Sky CSS Style
  const skyElems = document.querySelectorAll('[data-sky]');
  skyElems[0].style.setProperty('--left', 0);
  skyElems[1].style.setProperty('--left', 100);
}
