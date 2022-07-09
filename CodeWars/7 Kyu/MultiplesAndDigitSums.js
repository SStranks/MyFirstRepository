// In this exercise, you will create a function that takes an integer, i. With it you must do the following:

// Find all of its multiples up to and including 100,

// Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),

// And finally, get the total sum of each new digit sum.

// Note: If the digit sum of a number is more than 9 (eg. 99 -> 9 + 9 = 18) then you do NOT have to break it down further until it reaches one digit.

// Example (if i is 25):

// Multiples of 25 up to 100 --> [25, 50, 75, 100]

// Digit sum of each multiple --> [7, 5, 12, 1]

// Sum of each new digit sum --> 25

// My Solution
function procedure(n) {
  return Array.from({ length: Math.floor(100 / n) }, (_, i) => n * (i + 1)).reduce((acc, cur) => {
    const val = cur
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);
    return acc + val;
  }, 0);
}

// Other Solutions
function procedure(n) {
  let out = 0,
    max = 100;

  while (max >= n) {
    if (Number.isInteger(max / n)) {
      const multiple = (n * max) / n;
      out += [...String(multiple)].reduce((acc, el) => acc + +el, 0);
    }
    max -= 1;
  }
  return out;
}
