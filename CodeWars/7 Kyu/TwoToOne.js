// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


// My Solution
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort(function(a, b) {
    if (a > b) return 1
    if (a < b) return -1
  }).join("")
}

// Other Solutions
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}