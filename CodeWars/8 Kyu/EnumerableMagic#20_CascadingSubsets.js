// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

// As you can see, the lists are cascading; ie, they overlap, but never out of order.

// My Solution
function eachCons(arr, n) {
  if (!arr.length) return [];
  const cascadeArr = [];

  for (let i = 0, j = n; j < arr.length + 1; i++, j++) {
    cascadeArr.push(arr.slice(i, j));
  }

  return cascadeArr;
}

// Other Solutions
function eachCons(array, n) {
  return Array.from({ length: array.length - n + 1 }, (_, i) => array.slice(i, i + n));
}
