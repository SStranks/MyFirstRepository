// Given an array of integers.

// Return a number that is the sum of

// The product of all the non-negative numbers
// The sum of all the negative numbers
// Edge cases
// If there are no non-negative numbers, assume the product of them to be 1.
// Similarly, if there are no negative numbers, assume the sum of them to be 0.
// If the array is null, result should be 0.
// For example:
// mathEngine([1, 2, 3, -4, -5]) // should return -3


// My Solution
function mathEngine(arr) {
  if (arr === null) return 0
  let positives = 1;
  let negatives = 0;
  for (let i = 0; i < arr.length; i++){
    Math.sign(arr[i]) === -1 ? negatives += arr[i] : positives *= arr[i]
  }
  return positives + negatives
}

// Other Solutions
const mathEngine = (array) => array === null ? 0 : array.filter(el => el < 0).reduce((a, b)=> a + b, 0) + array.filter(el => el > -1).reduce((a, b)=> a * b, 1)

