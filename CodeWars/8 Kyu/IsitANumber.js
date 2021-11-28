// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")


// My Solution
function isDigit(s) {
  if (isNaN(parseFloat(s))) return false;
  return !isNaN(Number(s)) ? true : false;
}

// Other Solutions
function isDigit(s) {
  return s==parseFloat(s);
 }

function isDigit(s) {
  return parseFloat(s) === Number(s)
}