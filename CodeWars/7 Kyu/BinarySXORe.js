// Objective
// Given a number n we will define it's sXORe to be 0 XOR 1 XOR 2 ... XOR n where XOR is the bitwise XOR operator.

// Write a function that takes n and returns it's sXORe.

// Examples
// n	sXORe n
// 0	0
// 1	1
// 50	51
// 1000000	1000000

// My Solution
function sxore(n) {
  if (n % 4 === 0) return n;
  const diff = n - Math.floor(n / 4) * 4;
  return diff === 1 ? 1 : diff === 2 ? n + 1 : 0;
}

// Other Solutions
const sxore = (n) => [n, 1, n + 1, 0][n % 4];

const sxore = function (n) {
  switch (n % 4) {
    case 0:
      return n;
    case 1:
      return 1;
    case 2:
      return n + 1;
    default:
      return 0;
  }
};
