// ount how often sign changes in array.

// result
// number from 0 to ... . Empty array returns 0

// example
// const arr = [1, -3, -4, 0, 5];

// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */

// catchSignChange(arr) == 2;

// My Solution
const catchSignChange = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (Math.sign(arr[i]) === -1 && Math.sign(arr[i - 1]) !== -1) count++;
    if (Math.sign(arr[i]) !== -1 && Math.sign(arr[i - 1]) === -1) count++;
  }
  return count;
};

// Other Solutions
const catchSignChange = function (arr) {
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    if ((arr[i] < 0 && arr[i + 1] >= 0) || (arr[i] >= 0 && arr[i + 1] < 0)) {
      count++;
    }
  }
  return count;
};

function catchSignChange(arr) {
  return arr.slice(1).filter((e, i) => e < 0 !== arr[i] < 0).length;
}
