// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}

// My Solution
function count(array) {
  return array.reduce((acc, cur) => {
    return { ...acc, [cur]: acc[cur] + 1 || 1 };
  }, {});
}

// Other Solutions
function count(array) {
  return array.reduce(function (stack, value) {
    return stack[value] ? stack[value]++ : (stack[value] = 1), stack;
  }, {});
}
