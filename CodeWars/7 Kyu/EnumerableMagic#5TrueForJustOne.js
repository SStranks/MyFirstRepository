// Task
// Create a function called one that accepts two params:

// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

// Example
// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

// My Solution
function one(arr, fun) {
  let count = 0;
  arr.forEach((el) => {
    if (fun(el)) count++;
  });
  return count === 1;
}

// Other Solutions
function one(arr, fun) {
  return arr.filter(fun).length === 1;
}
