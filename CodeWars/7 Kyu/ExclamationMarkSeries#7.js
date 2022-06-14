// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// My Solution
function remove(string) {
  return string
    .split(' ')
    .filter((el) => (el.match(/!/g) || []).length !== 1)
    .join(' ');
}

// Other Solutions
function remove(s) {
  return s
    .split(' ')
    .filter((i) => i.split('!').length != 2)
    .join(' ');
}
