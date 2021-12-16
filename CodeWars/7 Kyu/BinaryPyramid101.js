// Given two numbers m and n, such that 0 ≤ m ≤ n :

// convert all numbers from m to n (inclusive) to binary
// sum them as if they were in base 10
// convert the result to binary
// return as a string
// Example
// 1, 4  -->  1111010

// because:
//     1  // 1 in binary is 1
// +  10  // 2 in binary is 10
// +  11  // 3 in binary is 11
// + 100  // 4 in binary is 100
// -----
//   122  // 122 in binary is 1111010


// My Solution
function BinaryPyramid(m,n){
  let result = 0;
  for (let i = m; i <= n; i++){
    result += Number(i.toString(2))
  }
  return result.toString(2)
}

// Other Solutions
const BinaryPyramid = (m, n) => Array(n - m + 1)
  .fill(0)
  .map((_, i) => m + i)
  .reduce((s, n) => s + +n.toString(2), 0)
  .toString(2);