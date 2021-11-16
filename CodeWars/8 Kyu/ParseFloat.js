// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// My Solution
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : Number(s);
}

