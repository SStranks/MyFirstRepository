// Note: This kata is inspired by Convert a Number to a String!. Try that one too.
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// My Solution
const stringToNumber = function(str){
  return Number(str);
}

// Other Solutions
var stringToNumber = function(str){
  return parseInt(str);
}