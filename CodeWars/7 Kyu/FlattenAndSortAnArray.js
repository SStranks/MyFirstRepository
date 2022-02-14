// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

// My Solution
'use strict';

function flattenAndSort(array) {
  let newArr = array
    .slice()
    .reduce((acc, cur) => acc.concat(cur), [])
    .sort((a, b) => a - b);
  return newArr;
}

// Other Solutions
('use strict');

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
