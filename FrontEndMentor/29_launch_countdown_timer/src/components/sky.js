export default function updateSky(deltaTime) {
  const SPEED = 0.0004;
  const groundElems = document.querySelectorAll('[data-sky]');

  groundElems.forEach((sky) => {
    const curLeftVal = parseFloat(
      getComputedStyle(sky).getPropertyValue('--left')
    );
    const increment = curLeftVal + deltaTime * SPEED * -1;
    sky.style.setProperty('--left', increment);
    if (curLeftVal <= -100) {
      sky.style.setProperty(
        '--left',
        parseFloat(getComputedStyle(sky).getPropertyValue('--left')) + 200
      );
    }
  });
}
