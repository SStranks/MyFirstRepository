// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// My Solution
function squares(x, n) {
  return Array.from({ length: n }, (el, i) => {
    return i === 0 ? x : Math.pow(x, Math.pow(2, i));
  });
}

// Other Solutions
function squares(x, n) {
  return Array.from({ length: n }, (v, k) => Math.pow(x, Math.pow(2, k)));
}
