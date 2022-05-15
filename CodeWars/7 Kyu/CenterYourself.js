// Task
// Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

// center(strng, width, fill=' ')
// If the left and right padding cannot be of equal length make the padding on the left side one character longer.

// If strng is longer than width return strng unchanged.

// Examples
// center('a', 3)  # returns " a "
// center('abc', 10, '_')  # returns "____abc___"
// center('abcdefg', 2)  # returns "abcdefg"

// My Solution
function center(strng, width, fill = ' ') {
  return strng
    .padStart(Math.round((width - strng.length) / 2) + strng.length, fill)
    .padEnd(width, fill);
}
