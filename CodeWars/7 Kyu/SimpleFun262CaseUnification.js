// Task
// Given an initial string s, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

// Input/Output
// [input] string s

// String of odd length consisting of English letters.

// 3 ≤ inputString.length ≤ 99.

// [output] a string

// The resulting string.

// Example
// For s = "Aba", the output should be "aba"

// For s = "ABa", the output should be "ABA"


// My Solution
function caseUnification(s) {
  let count = {upper: 0, lower: 0};
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 97) {
      count.upper = (count.upper + 1) || 1
    } else {
      count.lower = (count.lower + 1) || 1
    }
  }
  return count.upper > count.lower ? s.toUpperCase() : s.toLowerCase();
}

// Other Solutions
function caseUnification(s) {
  return s.split(/[a-z]/).length > s.split(/[A-Z]/).length ? s.toLowerCase() : s.toUpperCase()
}

