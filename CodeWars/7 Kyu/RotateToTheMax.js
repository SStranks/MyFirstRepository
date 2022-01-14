// Task
// Given a number, return the maximum value by rearranging its digits.

// Examples:

// (123) => 321 (786) => 876 ("001") => 100 (999) => 999 (10543) => 54310

// ^Note the number may be given as a string


// My Solution
const rotateToMax = n => {
  return Number(n.toString().split("").sort((b, a) => a - b).join(""))
}

// Other Solutions
const rotateToMax = ( number ) => parseInt([ ...number + [] ].sort((a, b)=> b - a).join(''));