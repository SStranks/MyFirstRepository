// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.

// For example if today is 30 November 2015 then

// ageInDays(2015, 11, 1) returns "You are 29 days old"
// The birthday is expected to be in the past.

// My Solution
function ageInDays(year, month, day) {
  const date1 = new Date(`${year}-${month}-${day}`);
  const date2 = new Date();
  const diff = date1.getTime() - date2.getTime();
  const days = Math.abs(Math.ceil(diff / (1000 * 3600 * 24)));
  return `You are ${days} days old`;
}

// Other Solutions
const ageInDays = (y, m, d) =>
  'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';

const ageInDays = (year, mon, day) =>
  `You are ${((new Date() - new Date(year, --mon, day)) / 8.64e7) ^ 0} days old`;
