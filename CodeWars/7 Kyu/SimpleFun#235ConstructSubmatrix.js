// Task
// Given a matrix, find its submatrix obtained by deleting the specified rows and columns.

// Input/Output
// [input] 2D integer array matrix

// 2-dimensional array of integers.

// 1 ≤ matrix.length ≤ 10,

// 1 ≤ matrix[0].length ≤ 10,

// 0 ≤ matrix[i][j] ≤ 9.

// [input] integer array rowsToDelete

// Array of indices (0-based) of rows to be deleted.

// 0 ≤ rowsToDelete.length ≤ 5,

// 0 ≤ rowsToDelete[i] < matrix.length.

// [input] integer array columnsToDelete

// Array of indices (0-based) of columns to be deleted.

// 0 ≤ columnsToDelete.length ≤ 5,

// 0 ≤ columnsToDelete[i] < matrix[0].length.

// [output] 2D integer array

// Example
// For

// matrix = [
// [1, 0, 0, 2],
// [0, 5, 0, 1],
// [0, 0, 3, 5]
// ]
// rowsToDelete = [1] and columnsToDelete = [0, 2]
// the output should be

//  [ [0, 2], [0, 5] ]

// My Solution
function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  return matrix.reduce((acc, cur, i) => {
    if (rowsToDelete.includes(i)) return acc;
    const newSet = cur.reduce((acc, cur, j) => {
      if (columnsToDelete.includes(j)) return acc;
      return acc.push(cur) && acc;
    }, []);
    return acc.push(newSet) && acc;
  }, []);
}
