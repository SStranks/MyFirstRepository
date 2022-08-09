// Task
// You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.

// Input/Output
// [input] 2D integer array matrix
// A non-empty rectangular matrix.

// 1 ≤ matrix.length ≤ 10

// 1 ≤ matrix[0].length ≤ 10

// [output] an integer
// The smallest non-negative integer that is not present in matrix.

// Example
// For

//   matrix = [  [0, 2],  [5, 1]] the result should be 3

// 0,1,2,(3)...5

// My Solution
function smallestInteger(matrix) {
  const seq = matrix.reduce((acc, cur) => acc.concat(...cur), []).sort((a, b) => a - b);
  for (let i = 0, j = 0; i < seq.length; i++) {
    if (seq[i] < 0) continue;
    if (seq[i] !== j) return j;
    if (seq[i] === seq[i + 1]) continue;
    j++;
  }
  return seq[seq.length - 1] >= 0 ? seq[seq.length - 1] + 1 : 0;
}

// Other Solutions
function smallestInteger(matrix) {
  var num = 0;
  while (matrix.some((x) => x.indexOf(num) >= 0)) {
    num++;
  }
  return num;
}
