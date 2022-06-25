// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
// Examples
// "09:10:01" -> "09:10:01"
// "11:70:10" -> "12:10:10"
// "19:99:99" -> "20:40:39"
// "24:01:01" -> "00:01:01"
// If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

// My Solution
function timeCorrect(timestring) {
  if (timestring === '') return '';
  if (!/\d\d:\d\d:\d\d/.test(timestring)) return null;

  let remainder = false;
  const values = timestring
    .split(':')
    .reverse()
    .map((el, i, arr) => {
      let time = Number(el);
      let result = time;

      if (i === 0 && time > 59) {
        remainder = true;
        result = time % 60;
      } else if (i === 1) {
        if (remainder) {
          result = (time + 1) % 60;
          remainder = time + 1 > 59 ? true : false;
        } else if (time > 59) {
          remainder = true;
          result = time % 60;
        }
      } else if (i === 2 && (remainder || time > 23)) {
        if (remainder) {
          result = (time + 1) % 24;
        } else {
          result = time % 24;
        }
      } else {
        result = time;
      }

      return result.toString().padStart(2, '0');
    });

  return values.reverse().join(':');
}

// Other Solutions
function timeCorrect(str) {
  const date = new Date();
  if (str == '') return str;
  if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
  date.setUTCHours(...str.split(':'));
  return date.toLocaleTimeString('en', { hour12: false });
}
