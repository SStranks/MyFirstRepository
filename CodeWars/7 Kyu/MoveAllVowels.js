// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"


// My Solution
function moveVowel(input){
  const vowels = input.match(/[aeiou]/gi) || []
  return input.replace(/[aeiou]/gi, "") + vowels.join("")
}

// Other Solutions
const moveVowel = ( $ ) => $.replace(/[aeiou]/g, '') + $.replace(/[^aeiou]/g, '')

function moveVowel(s) {
  return (k='',s=s.replace(/[aeuoi]/g,m=>(k+=m,'')),s+k)
}