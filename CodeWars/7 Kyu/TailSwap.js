// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]


// My Solution
function tailSwap(arr) {
  const swap = arr.map((el) => el.split(":")[1])
  return arr.map((el, i) => el.replace(/(?<=:).+$/, swap[i ^= 1]))
}

// Other Solutions
function tailSwap(arr) {
  let newArr = arr
  .map(string => string.split(':'))
  return [newArr[0][0]+':'+newArr[1][1], newArr[1][0]+':'+newArr[0][1]];
}

tailSwap = a => (a+"").replace(/(.+:)(.+),(.+:)(.+)/,"$1$4,$3$2").split(",");