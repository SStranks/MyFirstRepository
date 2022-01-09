// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


// My Solution
function removeDuplicateWords (s) {
  return [...new Set(s.split(" "))].join(" ")
}

// Other Solutions
const removeDuplicateWords = s => {
  let arr = s.split(" ");
  let sFiltered = [];
  
  for (let str of arr) if (!sFiltered.includes(str)) sFiltered.push(str)
  
  return sFiltered.join(" ")
}