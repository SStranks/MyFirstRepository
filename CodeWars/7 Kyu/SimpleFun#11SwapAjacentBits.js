// Task
// You're given an arbitrary 32-bit integer n. Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.

// Example
// For n = 13, the output should be 14

// 1310 = 11012 ~> 11102 = 1410

// For n = 74, the output should be 133

// 7410 = 010010102 ~> 100001012 = 13310

// Note
// the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.

// Input/Output
// [input] integer n
//  0 ≤ n < 2^30.

// [output] an integer

// My Solution
function swapAdjacentBits(n) {
  const num = n.toString(2).padStart(32, '0');
  let retStr = '';
  for (let i = 0; i < num.length; i += 2) {
    retStr += num[i + 1];
    retStr += num[i];
  }
  return parseInt(retStr, 2);
}

// Other Solutions
const swapAdjacentBits = (n) =>
  parseInt(
    n
      .toString(2)
      .padStart(32, `0`)
      .replace(/(.)(.)/g, `$2$1`),
    2
  );
