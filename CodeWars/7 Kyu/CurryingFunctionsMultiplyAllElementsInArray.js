// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// You must not mutate the original array.


// My Solution
/* left blank for unlimited creativity :) */
function multiplyAll(arr){
  return function(int){
    return [...arr.map((el) => el * int)]
  }
}

// Other Solutions
multiplyAll = a => x => a.map(e => e * x);