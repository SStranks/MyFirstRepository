// Your job is to implement a function which returns the last D digits of an integer N as a list.

// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Examples:
// N = 1
// D = 1
// result = [1]

// N = 1234
// D = 2
// result = [3, 4]

// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]


// My Solution
function lastDigit(n, d) {
  const l = n.toString().length;
  return n.toString().split("").filter((_, i) => i >= l - d).map((el) => Number(el));
}

// Other Solutions
function lastDigit(n, d) {
  const nums = String(n).split('').map(Number);
  const len = nums.length;
  let index = 0;
  return nums.filter(el => index++ >= len - d);
}

function lastDigit(n, d) {
  const arr = [...n+[]].map(Number)
  return arr.slice( d > arr.length ? 0 : arr.length - d, )
}