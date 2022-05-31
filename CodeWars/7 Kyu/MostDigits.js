// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My Solution
function findLongest(array) {
  let result = [array[0], array[0].toString().length];
  for (let i = 1; i < array.length; i++) {
    array[i].toString().length > result[1]
      ? (result = [array[i], array[i].toString().length])
      : null;
  }
  return result[0];
}

// Other Solutions
function findLongest(array) {
  return array.reduce((res, curr) => (String(res).length < String(curr).length ? curr : res));
}

const findLongest = (l) => l.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
