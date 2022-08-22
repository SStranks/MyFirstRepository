// Task
// Write a function which accepts a sequence of unique integers ( 0 <= x < 32 ) as an argument and returns a 32-bit integer such that the integer, in its binary representation, has 1 at only those indices, numbered from right to left, which are in the sequence.

// Examples
// [0, 1]  ->  3
// [1, 2, 0, 4]  ->   23

// Because 23 in binary is

// 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 1 1
//                                           . . . . . 5 4 3 2 1 0  <-  indices
//                                                       ^   ^ ^ ^
//                                                       these bits are 1
//           due to the corresponding indices being in the given sequence
// FAQ
// The function name contains sort because this simulates radix sort.

// My Solution
function sortByBit(array) {
  let bin = Array.from({ length: 32 }, (_, v) => 0);
  array.forEach((el) => (bin[31 - el] = 1));
  return parseInt(bin.join(''), 2);
}

// Other Solutions
const sortByBit = (arr) => arr.reduce((acc, el) => acc + Math.pow(2, el), 0);

function sortByBit(array) {
  return array.reduce(function (n, i) {
    return n | (1 << i);
  }, 0);
}
