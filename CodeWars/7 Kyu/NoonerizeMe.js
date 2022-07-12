// Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

// You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

// [123, 456] = 423 - 156 = 267
// Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

// When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.

// My Solution
function noonerize(numbers) {
  if (numbers.some((el) => !Number.isInteger(el))) return 'invalid array';
  return numbers
    .map((el, i, arr) => arr[i ^ 1].toString()[0] + el.toString().slice(1))
    .reduce((a, b) => Math.abs(a - b));
}

// Other Solutions
const noonerize = (numbers) =>
  numbers.some(isNaN)
    ? `invalid array`
    : Math.abs(
        numbers
          .map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1))
          .reduce((pre, val) => pre - val)
      );

const noonerize = (numbers) => {
  let x, y;

  [x, y] = numbers.map(String);
  [x, y] = [y[0] + x.slice(1), x[0] + y.slice(1)].map(Number);

  return x && y ? Math.abs(x - y) : 'invalid array';
};
