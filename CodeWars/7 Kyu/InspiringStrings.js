// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Example:

// 'red white blue' //returns string value of white

// 'red blue gold' //returns gold

// My Solution
function longestWord(stringOfWords) {
  return stringOfWords.split(' ').reduce((acc, cur) => (cur.length >= acc.length ? cur : acc));
}

// Other Solutions
let longestWord = (s) => s.split(' ').reduceRight((a, b) => (b.length > a.length ? b : a));
