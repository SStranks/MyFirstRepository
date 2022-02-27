export default function setupMovement() {
  const groundElems = document.querySelectorAll('[data-ground]');
  groundElems[0].style.setProperty('--left', 0);
  groundElems[1].style.setProperty('--left', 100);

  const skyElems = document.querySelectorAll('[data-sky]');
  skyElems[0].style.setProperty('--left', 0);
  skyElems[1].style.setProperty('--left', 100);
}
