export default function updateTime(currentCounter) {
  const newCounter = [
    { period: 'days', time: currentCounter[0].time },
    { period: 'hours', time: currentCounter[1].time },
    { period: 'minutes', time: currentCounter[2].time },
    { period: 'seconds', time: currentCounter[3].time },
  ];

  function checkSingleDigit(digit) {
    return digit < 10 ? `0${digit}` : digit.toString();
  }

  const getDays = () => {
    let newDay = newCounter[0].time - 1;
    if (newDay < 0) {
      newCounter[0].time = '00';
      newCounter[1].time = '00';
      newCounter[2].time = '00';
      newCounter[3].time = '00';
      return;
    }
    newDay = checkSingleDigit(newDay);
    newCounter[0].time = newDay;
  };

  const getHours = () => {
    let newHour = newCounter[1].time - 1;
    if (newHour < 0) {
      newHour = 23;
      getDays();
    }
    newHour = checkSingleDigit(newHour);
    newCounter[1].time = newHour;
  };

  const getMinutes = () => {
    let newMinute = newCounter[2].time - 1;
    if (newMinute < 0) {
      newMinute = 59;
      getHours();
    }
    newMinute = checkSingleDigit(newMinute);
    newCounter[2].time = newMinute;
  };

  const getSeconds = () => {
    let newSecond = newCounter[3].time - 1;
    if (newSecond < 0) {
      newSecond = 59;
      getMinutes();
    }
    newSecond = checkSingleDigit(newSecond);
    newCounter[3].time = newSecond;
  };

  getSeconds();

  return newCounter;
}
