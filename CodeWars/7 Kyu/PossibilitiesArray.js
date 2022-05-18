// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3
// a includes [0,3] ,hence the function should return true

// My Solution
function isAllPossibilities(x) {
  if (!x.length) return false;
  const sortArr = x.sort((a, b) => a - b);
  if (sortArr[0] !== 0 || sortArr[sortArr.length - 1] !== sortArr.length - 1) return false;
  return sortArr.every((el, i, arr) => el === (arr[i - 1] + 1 || 0));
}

// Other Solutions
function isAllPossibilities(x) {
  return x.length > 0 ? x.every((a, i) => x.includes(i)) : false;
}
