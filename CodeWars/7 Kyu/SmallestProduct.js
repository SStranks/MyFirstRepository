// Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

// Example
// input = [
//   [1, 5],
//   [2],
//   [-1, -3]
// ]

// result = 2


// My Solution
function smallestProduct(arr){
  return Math.min(...arr.map((el) => el.reduce((acc, cur) => acc * cur, 1)))
}