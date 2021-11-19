// Write a function that rearranges an integer into its largest possible value.

// Example (Input --> Output)

// 123456 --> 654321
// 105 --> 510
// 12 --> 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.


// My Solution
function superSize(num){
  return num.toString().split("").map((el) => el * 1).sort((a, b) => b - a).join("") * 1;
}