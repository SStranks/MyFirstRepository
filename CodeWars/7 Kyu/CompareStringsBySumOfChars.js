// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty
// Your method should return true, if the strings are equal and false if they are not equal.

// Examples:
// "AD", "BC"  -> equal
// "AD", "DD"  -> not equal
// "gf", "FG"  -> equal
// "zz1", ""   -> equal (both are considered empty)
// "ZzZz", "ffPFF" -> equal
// "kl", "lz"  -> not equal
// null, ""    -> equal


// My Solution
function compare(s1, s2) {
  const s1Sum = s1 !== null && /^[a-zA-Z]+$/.test(s1) ? s1.match(/[a-zA-Z]/g) : [];
  const s2Sum = s2 !== null && /^[a-zA-Z]+$/.test(s2) ? s2.match(/[a-zA-Z]/g) : [];
  return s1Sum.reduce((acc, cur) => acc + cur.toUpperCase().charCodeAt(0), 0) === s2Sum.reduce((acc, cur) => acc + cur.toUpperCase().charCodeAt(0), 0)
}

// Other Solutions
function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
    return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
           s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
  return true;
}