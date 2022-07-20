// We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

// For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

// Examples:
// doubleton(120) === 121
// doubleton(1234) === 1311
// doubleton(10) === 12

// My Solution
function doubleton(num) {
  do {
    num++;
  } while (new Set(num.toString()).size !== 2);
  return num;
}

// Other Solutions
const isDoubleton = (n) => new Set(String(n)).size === 2;
const doubleton = (n) => (isDoubleton(n + 1) ? n + 1 : doubleton(n + 1));

const doubleton = (num) => (new Set(String(++num).split('')).size === 2 ? num : doubleton(num));
