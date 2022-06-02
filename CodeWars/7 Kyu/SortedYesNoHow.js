// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// My Solution
function isSortedAndHow(array) {
  let order;
  array[0] < array[1] ? (order = true) : (order = false);
  for (let i = 1; i < array.length - 1; i++) {
    if (order && !(array[i] <= array[i + 1])) return 'no';
    if (!order && !(array[i] >= array[i + 1])) return 'no';
  }
  return order ? 'yes, ascending' : 'yes, descending';
}
