// Write a function that doubles every second integer in a list, starting from the left.

// Example:

// doubleEveryOther([1,2,3,4]) => [ 1, 4, 3, 8 ]


// My Solution
function doubleEveryOther(a){
  return a.map((el, i) => i % 2 !== 0 ? el * 2 : el)
}