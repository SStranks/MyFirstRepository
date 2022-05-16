// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution
function getCount(str) {
  const matches = str.match(/[aeiou]/g) || [];
  return matches.length;
}

// Other Solutions
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
