// Given a number return the closest number to it that is divisible by 10.

// Example input:

// 22
// 25
// 37
// Expected output:

// 20
// 30
// 40

// My Solution
const closestMultiple10 = (num) => {
  return Math.floor(num / 10) * 10 + Math.round((num / 10) % 1) * 10;
};

// Other Solutions
function closestMultiple10(num) {
  Math.round(num / 10) * 10;
}
