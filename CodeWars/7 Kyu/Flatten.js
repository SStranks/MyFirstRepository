// Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

// My Solution
var flatten = function (array) {
  return array.reduce((acc, cur) => acc.concat(cur), []);
};

// Other Solutions
var flatten = function (lol) {
  return [].concat.apply([], lol);
};
