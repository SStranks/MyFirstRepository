// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.


// My Solution
function twoSort(s) {
  return (s.sort((a, b) => {if (a > b) {return 1} if (a < b) {return -1}})).slice(0, 1).join("").split("").join("***");
}

// Other Solutions
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}
