// Problem
// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

// Examples
// 9  -->  "25-16"
// 5  -->  "9-4"
// 7  -->  "16-9"


// My Solution
const findSquares = num => {
  return `${Math.pow(Math.ceil(num / 2), 2)}-${Math.pow(Math.floor(num / 2), 2)}`
};

// Other Solutions
function findSquares(n) {
  const i = (n - 1) / 2;
  return ((i + 1) ** 2)+ '-' + (i ** 2);
}