// In this example you need to implement a function that sort a list of integers based on it's binary representation.

// The rules are simple:

// sort the list based on the amount of 1's in the binary representation of each number.
// if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
// if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)
// Examples:

// Input: [1,15,5,7,3]

// ( in binary strings is: ["1", "1111", "101", "111", "11"])
// Output: [15, 7, 3, 5, 1]

// (and after sortByBinaryOnes is: ["1111", "111", "11", "101", "1"])


// My Solution
function sortByBinaryOnes(list){
  return list.sort(function(a, b){
    if (a.toString(2).split("0").join("").length < b.toString(2).split("0").join("").length) return 1
    if (a.toString(2).split("0").join("").length > b.toString(2).split("0").join("").length) return -1
    if (a.toString(2).length > b.toString(2).length) return 1
    if (a.toString(2).length < b.toString(2).length) return -1
    return a > b ? 1 : -1
  })
}

// Other Solutions
const sortByBinaryOnes = list => list.sort((a, b) => b.toString(2).replace(/0/g, ``).length - a.toString(2).replace(/0/g, ``).length || a - b);

const getOnes = num => num.toString(2).replace(/0/g, '').length
const sort = (a, b) => getOnes(b) - getOnes(a) || a - b
const sortByBinaryOnes = list => list.sort(sort)