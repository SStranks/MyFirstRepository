// In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

// Examples:
// solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
// solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
// solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)

// My Solution
// Could not solve - Solution:
// https://stackoverflow.com/questions/63191064/find-the-maximum-product-that-can-be-formed-by-taking-any-one-element-from-each
function solve(arr) {
  return arr
    .map((a) => [Math.min(...a), Math.max(...a)])
    .reduce(
      (acc, current) => {
        const candidates = [
          acc[0] * current[0],
          acc[0] * current[1],
          acc[1] * current[0],
          acc[1] * current[1],
        ];
        return [Math.min(...candidates), Math.max(...candidates)];
      },
      [1, 1]
    )[1];
}
