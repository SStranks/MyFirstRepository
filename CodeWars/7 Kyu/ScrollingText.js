// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// My Solution
function scrollingText(text) {
  let rotations = [];
  for (let i = 0; i < text.length; i++) {
    let word = text.substring(i) + text.substring(0, i);
    word = word.toUpperCase();
    rotations.push(word);
  }
  return rotations;
}
