// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

// My Solution
function product(values) {
  return values && values.length ? values.reduce((acc, cur) => acc * cur, 1) : null;
}
