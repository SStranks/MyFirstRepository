// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


// My Solution
function hasUniqueChars(str){
  return /^(?:([\x00-\x7F])(?!.*\1))*$/.test(str)
}

// Other Solutions
let hasUniqueChars = (str) => new Set(str).size === str.length;

function hasUniqueChars(str) {
  return !/(.).*\1/.test(str);
}