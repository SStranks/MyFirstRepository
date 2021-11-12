// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.

// My Solution
function invert(array) {
  return array.map((el) => -el);
}

// Other Solution
function invert(array) {
  return array.map(i => 0 - i);
}