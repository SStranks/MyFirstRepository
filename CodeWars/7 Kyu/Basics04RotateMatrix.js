// Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

// There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

// One easy example:

// Input: {{-1, 4, 5},
//         { 2, 3, 4}}

// Output: {{ 5, 4},
//          { 4, 3},
//          {-1, 2}}

// My Solution
var rotateMatrix = (arr) => {
  const x = arr.length;
  const y = arr[0].length;
  return Array.from({ length: y }, (_, i) =>
    Array.from({ length: x }, (_, j) => arr[j][y - 1 - i])
  );
};
