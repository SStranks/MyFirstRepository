export default function setupGround() {
  const groundElems = document.querySelectorAll('[data-ground]');
  groundElems[0].style.setProperty('--left', 0);
  groundElems[1].style.setProperty('--left', 100);
}
