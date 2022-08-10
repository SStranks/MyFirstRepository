// Task
// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc.
// iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc.
// iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

// Example
// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

// Input/Output
// [input] integer array arr

// Constraints: 21 ≤ arr.length ≤ 25, -9 ≤ arr[i] ≤ 99.

// [output] an integer

// My Solution
function arrayConversion(arr) {
  let newArr = arr.slice();
  let tempArr = [];
  let bool = true;
  while (newArr.length !== 1) {
    for (let i = 0; i < newArr.length; i += 2) {
      if (bool) {
        tempArr.push(newArr[i] + newArr[i + 1]);
      } else {
        tempArr.push(newArr[i] * newArr[i + 1]);
      }
    }
    newArr = tempArr;
    tempArr = [];
    bool = !bool;
  }
  return newArr[0];
}

// Other Solutions
const arrayConversion = (arr, flag = false) =>
  arr.length > 1
    ? arrayConversion(
        arr.reduce(
          (pre, val, idx) => (
            idx % 2 && pre.push(flag ? arr[idx - 1] * arr[idx] : arr[idx - 1] + arr[idx]), pre
          ),
          []
        ),
        !flag
      )
    : arr[0];
