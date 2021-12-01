// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

// Consider an Example :
// 10 , could be expressed as a sum of 1 + 2 + 3 + 4 .
// Task
// Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .

// My Solution
function consecutiveDucks(num) {
  return Math.log2(num) % 1 !== 0;
}