// Be Concise IV - Index of an element in an array
// Task
// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.


// My Solution
function find(a, e) {
  let b = a.indexOf(e);
  return b !== -1 ? b : "Not found";
}

// Other Solution
const find = (a, x) => (x = a.indexOf(x)) < 0 ? 'Not found' : x