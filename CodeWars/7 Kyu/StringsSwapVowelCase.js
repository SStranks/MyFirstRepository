// Challenge:

// Given a string, return a copy of the string with the vowels' case swapped.

// For this kata, assume that vowels are in the set "aeouiAEOUI".

// Example: Given a string "C is alive!", your function should return "C Is AlIvE!"

// Addendum: Your solution is only required to work for the ASCII character set.

// Please make sure you only swap cases for the vowels.


// My Solution
function swapVowelCase(str) {
  return str.replace(/([AEIOUaeiou])/g, function(m){
    return m === m.toLowerCase() ? m.toUpperCase() : m.toLowerCase()
  })
}

// Other Solutions
function swapVowelCase(str) {
  return str.replace(/[aeiou]/ig, x => /[AEIOU]/.test(x) ? x.toLowerCase() : x.toUpperCase())
}