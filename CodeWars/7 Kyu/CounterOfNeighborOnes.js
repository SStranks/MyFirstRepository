// Task
// Tranform of input array of zeros and ones to array in which counts number of continuous ones. If there is none, return an empty array

// Example
// [1, 1, 1, 0, 1] -> [3,1]
// [1, 1, 1, 1, 1] -> [5]
// [0, 0, 0, 0, 0] -> []


// My Solution
function onesCounter(input) {
  const arr = input.join("").match(/[1]+/g) || [];
  return arr.map((el) => el.length)
}

// Other Solutions
const onesCounter = inp => inp.join('').split('0').map(e => e.length).filter(e => e);

