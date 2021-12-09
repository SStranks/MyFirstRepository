// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!


// My Solution
function solve(s) {
  return Math.max(...s.match(/[aeiou]+/g).map((el) => el.length));
}

// Other Solutions
const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);