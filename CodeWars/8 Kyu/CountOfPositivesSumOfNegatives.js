// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My Solution
function countPositivesSumNegatives(input) {
  let arr = []
  if (input === null || !input.length) return arr;
  arr = [0,0];
  input.map((el) => Math.sign(el) === 1 ? arr[0] += 1 : arr[1] += el)
  return arr
}

// Other Solutions
function countPositivesSumNegatives(input) {
  return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}