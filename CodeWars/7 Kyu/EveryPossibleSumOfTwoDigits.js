// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

// My Solution
function digits(num) {
  return num
    .toString()
    .split('')
    .reduce((acc, cur, i, arr) => {
      if (i === arr.length - 1) return acc;
      for (let j = i; j < arr.length - 1; j++) {
        acc.push(Number(cur) + Number(arr[j + 1]));
      }
      return acc;
    }, []);
}

// Other Solutions
function digits(num) {
  let res = [];
  String(num)
    .split('')
    .forEach((d, i, arr) => {
      for (let j = i + 1; j < arr.length; j++) res.push(Number(d) + Number(arr[j]));
    });
  return res;
}
