// Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

// The function should reject any arguments that are not integers, and sum the remaining integers.

// sum(1, 2, 3)   // -> 6
// sum(1, "2", 3) // -> 4

// My Solution
function sum() {
  return [...arguments].reduce((acc, cur) => (Number.isInteger(cur) ? acc + cur : acc), 0);
}

// Other Solutions
const sum = (...args) => args.reduce((p, c) => (c === ~~c ? p + c : p), 0);
