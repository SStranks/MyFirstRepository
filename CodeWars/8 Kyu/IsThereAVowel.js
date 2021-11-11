// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// My Solution
function isVow(a){
  return  a.map(charCode => /[aeiou]/.test(String.fromCharCode(charCode)) ? String.fromCharCode(charCode) : charCode)}

// Other Solution
const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)