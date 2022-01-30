// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

// Matrix = array of n length whose elements are n length arrays of integers.

// 3x3 example:

// diagonals( [
//   [ 1, 2, 3 ],
//   [ 4, 5, 6 ],
//   [ 7, 8, 9 ]
// ] ); 

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7


// My Solution
function sum(matrix) {
  const diag1 = matrix.reduce((acc, cur, i) => acc + cur[i] , 0);
  const diag2 = matrix.reduce((acc, cur, i) => acc + cur[cur.length - i - 1], 0);
  return diag1 + diag2
}

// Other Solutions
const sum = matrix => matrix.reduce((sum, line, i) => sum + line[i] + line[matrix.length-i-1], 0)