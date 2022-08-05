// Given an array of numbers, return a string made up of four parts:

// a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

// the same as above, post sorting the array into ascending order,

// the same as above, post sorting the array into descending order,

// the same as above, post converting the array into ASCII characters and sorting alphabetically.

// The four parts should form a single string, each part separated by a hyphen (-).

// Example format of solution: "asdf-tyui-ujng-wedg"

// Examples
// [111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
// [66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
// [99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"

// My Solution
function sortTransform(a) {
  function word(arr) {
    return `${String.fromCharCode(arr[0])}${String.fromCharCode(arr[1])}${String.fromCharCode(
      arr[arr.length - 2]
    )}${String.fromCharCode(arr[arr.length - 1])}`;
  }

  const word1 = word(a);
  const word2 = word(a.sort((a, b) => a - b));
  const word3 = word(a.sort((a, b) => b - a));
  let word4 = a.map((el) => String.fromCharCode(el)).sort();
  word4 = `${word4[0]}${word4[1]}${word4[word4.length - 2]}${word4[word4.length - 1]}`;

  return `${word1}-${word2}-${word3}-${word4}`;
}
