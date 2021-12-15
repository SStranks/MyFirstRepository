// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

// My Solution
const divisions = (n, divisor) => {
  let count = 0;
  while (n >= divisor) {
    n = Math.floor(n / divisor);
    count++;
  }
  return count;
};

// Other Solutions
const divisions = (n, divisor) => {
  return Math.floor(Math.log(n)/Math.log(divisor))
};