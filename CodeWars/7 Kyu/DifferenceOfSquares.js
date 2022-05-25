// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640

// My Solution
function differenceOfSquares(n) {
  const arr = Array.from({ length: n }, (el, i) => i + 1);
  return (
    arr.reduce((acc, cur) => acc + cur, 0) ** 2 -
    arr.reduce((acc, cur) => acc + Math.pow(cur, 2), 0)
  );
}

// Other Solutions
function differenceOfSquares(x) {
  return Math.pow((x * (x + 1)) / 2, 2) - Math.round((x / 6) * (x + 1) * (2 * x + 1));
}
