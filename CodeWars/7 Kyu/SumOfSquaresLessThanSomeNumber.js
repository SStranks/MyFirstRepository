// Write a function getNumberOfSquares (C, F#, Haskell) / get_number_of_squares (Python, Ruby) that will return how many integer (starting from 1, 2...) numbers raised to power of 2 and then summed up are less than some number given as a parameter.

// E.g 1: For n = 6 result should be 2 because 1^2 + 2^2 = 1 + 4 = 5 and 5 < 6 E.g 2: For n = 15 result should be 3 because 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14 and 14 < 15

// My Solution
function getNumberOfSquares(n) {
  let total = 0;
  for (let i = 0; total < n; i++) {
    const power = i ** 2;
    if (total + power >= n) return i - 1;
    total += power;
  }
}

// Other Solutions
const getNumberOfSquares = (n, m = 1) =>
  n > m ** 2 ? getNumberOfSquares(n - m ** 2, ++m) : --m;
