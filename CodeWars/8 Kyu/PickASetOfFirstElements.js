// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];


// My Solution
function first(arr, n) {
  let retArr = [];
  if (n === undefined) n = 1;
  for (let i = 0; i < n; i++) {
    retArr.push(arr[i]);
    if (arr.length === i + 1) break;
  }
  return retArr;
}

// Other Solution
function first(arr, n=1) {
  return arr.slice(0,n);
}