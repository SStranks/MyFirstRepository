// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// My Solution
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
