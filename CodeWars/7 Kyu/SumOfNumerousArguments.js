// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

// Example
// findSum(1,2,3,4); // returns 10
// findSum(1,-2);    // returns -1
// findSum();        // returns 0
// Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

// My Solution
function findSum(...args) {
  if (!args.length) return 0;
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    if (Math.sign(args[i]) === -1) return -1;
    result += args[i];
  }
  return result;
}

// Other Solutions
function findSum(...nums) {
  return nums.reduce((a, b) => (a < 0 || b < 0 ? -1 : a + b), 0);
}
