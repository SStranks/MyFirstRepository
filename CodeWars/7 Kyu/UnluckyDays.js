// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// My Solution
function unluckyDays(year) {
  let count = 0;
  const date = new Date(year, 0, 13);
  for (let i = 0; i < 12; i++) {
    date.setMonth(i);
    if (date.getDay() === 5) count++;
  }
  return count;
}
