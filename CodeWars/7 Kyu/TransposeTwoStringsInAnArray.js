// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return

// H W
// e o
// l r
// l l
// o d
// A few things to note:

// There should be one space in between the two characters
// You don't have to modify the case (i.e. no need to change to upper or lower)
// If one string is longer than the other, there should be a space where the character would be

// My Solution
function transposeTwoStrings(array) {
  const len = Math.max(array[0].length, array[1].length);
  let str = '';
  for (let i = 0; i < len; i++) {
    str += `${array[0][i] || ' '} ${array[1][i] || ' '}`;
    if (i !== len - 1) str += '\n';
  }
  return str;
}
