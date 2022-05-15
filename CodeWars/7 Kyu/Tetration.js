// Your Task
// Complete the function that returns the number that is the yth tetration of x, where x is a positive integer, and y is a non-negative integer. The function should return a number (not a string that picks out the number).

// Note: the convention is that, as with exponentiation, the 0th tetration of any number is always 1

// Examples (inputs -> output)
// * 4, 0  -->     1  (due to the convention mentioned above)
// * 7, 1  -->     7  (7^1)
// * 5, 2  -->  3125  (5^5)
// * 2, 3  -->    16  (2^(2^2))

// My Solution
function tetration(x, y) {
  if (y === 0) return 1;
  let number = x;
  for (let i = 0; i < y - 1; i++) {
    number = Math.pow(x, number);
  }

  return number;
}

// Other Solutions
function tetration(x, y) {
  if (y == 0) return 1;
  return x ** tetration(x, y - 1);
}
