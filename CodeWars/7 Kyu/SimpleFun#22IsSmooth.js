// Task
// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;

// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.

// Example
// For arr = [7, 2, 2, 5, 10, 7], the output should be true

// The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.

// For arr = [-5, -5, 10], the output should be false

// The first and middle elements are equal to -5, but the last element equals 10. Thus, arr is not smooth and the output is false.

// Input/Output
// [input] integer array arr

// The given array.

// Constraints: 2 ≤ arr.length ≤ 103, -103 ≤ arr[i] ≤ 103.

// [output] a boolean value

// true if arr is smooth, false otherwise.

// My Solution
function isSmooth(arr) {
  if (arr[0] !== arr[arr.length - 1]) return false;
  const middle =
    arr.length % 2 === 0
      ? arr[arr.length / 2] + arr[arr.length / 2 - 1]
      : arr[(arr.length / 2) | 0];
  return middle === arr[0];
}
