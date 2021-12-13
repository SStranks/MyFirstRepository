// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)


// My Solution
function sumCubes(n){
  let cube = 0;
  for (let i = 1; i <= n; i++) {
    cube += i ** 3
  }
  return cube
}

// Other Solutions
function sumCubes(n) {
  return (n * (n + 1) / 2) ** 2;
}

const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);