// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).


// My Solution
var arrayLeaders = numbers => {
  return numbers.filter((el, i, arr) => el > arr.slice(i + 1).reduce((acc, cur) => acc + cur, 0))
}