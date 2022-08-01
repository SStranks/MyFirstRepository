// Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

// Here's a keypad for visualization.

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?

// Write a function called decode(). Given an encoded string of exactly 10 digits, return the actual phone number in string form. Don't worry about input validation, parenthesis, or hyphens.

// My Solution
function decode(string) {
  const nums = { 0: '5', 1: '9', 2: '8', 3: '7', 4: '6', 5: '0', 6: '4', 7: '3', 8: '2', 9: '1' };
  return string.replace(/\d/g, (d) => nums[d]);
}

// Other Solutions
const decode = (s) => s.replace(/./g, (c) => '5987604321'[c]);
