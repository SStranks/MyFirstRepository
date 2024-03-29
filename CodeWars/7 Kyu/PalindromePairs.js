// Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

// Examples:

// ["bat", "tab", "cat"] # [[0, 1], [1, 0]]
// ["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
// ["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
// Non-string inputs should be converted to strings.

// Return an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be returned in the order they appear in the original list.


// My Solution
const palindromePairs = words => {
  let palArr = []
  words.map((el) => String(el)).forEach(function(el, i, arr){
    for (let j = 0; j < arr.length; j++){
      if (i === j) continue;
      const forward = el + arr[j]
      const backward = forward.split("").reverse().join("")
      if (forward === backward) palArr.push([i, j])
    }
  })
  return palArr
}