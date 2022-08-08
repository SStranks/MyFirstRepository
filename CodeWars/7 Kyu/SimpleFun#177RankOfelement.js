// Task
// Given an array arr, find the rank of the element at the ith position.

// The rank of the arr[i] is a value equal to the number of elements less than or equal to arr[i] standing before arr[i], plus the number of elements less than arr[i] standing after arr[i].

// Example
// For arr = [2,1,2,1,2], i = 2, the result should be 3.

// There are 2 elements less than or equal to arr[2] standing before arr[2]:

// arr[0] <= arr[2]

// arr[1] <= arr[2]

// There is only 1 element less than arr[2] standing after arr[2]:

// arr[3] < arr[2]

// So the result is 2 + 1 = 3.

// Input/Output
// [input] integer array arr
// An array of integers.

// 3 <= arr.length <= 50.

// [input] integer i
// Index of the element whose rank is to be found.

// [output] an integer
// Rank of the element at the ith position.

// My Solution
function rankOfElement(arr, i) {
  let rank = 0;
  const el = arr[i];
  for (let j = 0; j < arr.length; j++) {
    if (j < i && arr[j] <= el) rank++;
    if (j > i && arr[j] < el) rank++;
  }
  return rank;
}

// Other Solutions
const rankOfElement = (arr, i) =>
  arr.reduce((pre, val, idx) => pre + (val < arr[i] + (idx < i)), 0);
