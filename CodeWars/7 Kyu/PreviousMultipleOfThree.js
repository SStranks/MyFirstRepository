// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and return null/nil/None/-1 if no such number exists.

// Examples
// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9


// My Solution
const prevMultOfThree = n => {
  const strLen = n.toString().length;
  for (let i = 0; i < strLen; i++) {
    if (n % 3 === 0) return n;
    n = Math.floor(n / 10);
  }
  return null;
}