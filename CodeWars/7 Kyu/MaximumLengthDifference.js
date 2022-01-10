// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


// My Solution
function mxdiflg(a1, a2) {
  if (!a1.length || !a2.length) return -1
  const arr1 = a1.map((el) => el.length).sort((a, b) => a - b);
  const arr2 = a2.map((el) => el.length).sort((a, b) => a - b);
  const min1 = arr1[0];
  const min2 = arr2[0];
  const max1 = arr1[arr1.length - 1];
  const max2 = arr2[arr2.length - 1];
  
  return Math.max(Math.abs(min1 - min2), Math.abs(min1 - max2), Math.abs(min2 - max1), Math.abs(max1 - max2));
}

// Other Solutions
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}