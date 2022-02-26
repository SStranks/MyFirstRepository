export default function updateGround(deltaTime) {
  const SPEED = 0.002;
  const groundElems = document.querySelectorAll('[data-ground]');

  groundElems.forEach((ground) => {
    const curLeftVal = parseFloat(
      getComputedStyle(ground).getPropertyValue('--left')
    );
    const increment = curLeftVal + deltaTime * SPEED * -1;
    ground.style.setProperty('--left', increment);
    if (curLeftVal <= -100) {
      ground.style.setProperty(
        '--left',
        parseFloat(getComputedStyle(ground).getPropertyValue('--left')) + 200
      );
    }
  });
}
