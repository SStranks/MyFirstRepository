// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// My Solution
var summation = function (num) {
  if (num === 1) return num;
  return num + summation(num - 1);
}

// Other Solutions
function summation(num) {
  return num * (num + 1) / 2
}