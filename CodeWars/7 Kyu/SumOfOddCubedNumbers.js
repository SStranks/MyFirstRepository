// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// My Solution
function cubeOdd(arr) {
  return arr.reduce((acc, cur, i) => {
    if (acc === undefined || typeof cur !== 'number') return undefined;
    return Math.pow(cur, 3) % 2 !== 0 ? acc + Math.pow(cur, 3) : acc;
  }, 0);
}

// Other Solution
let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0) : undefined;
};
