// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

// My Solution
function digitize(n) {
  return Array.from(n.toString(), (el) => Number(el));
}

// Other Solutions
function digitize(n) {
  return String(n).split('').map(Number);
}
