// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

// My Solution
function withoutLast(arr) {
  // Fix it
  // arr.pop(); // removes the last element
  return arr.slice(0, -1);
}
