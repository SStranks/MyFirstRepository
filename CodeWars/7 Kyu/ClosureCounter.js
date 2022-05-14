// Closure Counter
// Define the function counter that returns a function that returns an increasing value.
// The first value should be 1.
// You're going to have to use closures.
// Example:
// const newCounter = counter();
// newCounter() // 1
// newCounter() // 2

// My Solution
function counter() {
  let a = 1;
  return function () {
    return a++;
  };
}
