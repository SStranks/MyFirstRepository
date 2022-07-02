// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// My Solution
function findSum(n) {
  function sum(n) {
    return (n * (n + 1)) / 2;
  }

  return 3 * sum(Math.floor(n / 3)) + 5 * sum(Math.floor(n / 5)) - 15 * sum(Math.floor(n / 15));
}
