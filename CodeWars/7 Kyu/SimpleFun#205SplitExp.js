// Task
// You are given a decimal number n as a string. Transform it into an array of numbers (given as strings again), such that each number has only one nonzero digit and their sum equals n.

// Each number in the output array should be written without any leading and trailing zeros.

// Input/Output
// [input] string n
// A non-negative number.

// 1 ≤ n.length ≤ 30.

// [output] a string array
// Elements in the array should be sorted in descending order.

// Example
// For n = "7970521.5544" the output should be:

// ["7000000",
// "900000",
// "70000",
// "500",
// "20",
// "1",
// ".5",
// ".05",
// ".004",
// ".0004"]
// For n = "7496314", the output should be:

// ["7000000",
// "400000",
// "90000",
// "6000",
// "300",
// "10",
// "4"]
// For n = "0", the output should be []

// My Solution
function splitExp(n) {
  return n.split('.').reduce((acc, cur, i) => {
    if (!i) {
      for (let j = 0; j < cur.length; j++) {
        if (cur[j] === '0') continue;
        acc.push(cur[j] + '0'.repeat(cur.length - 1 - j));
      }
    } else {
      for (let k = 0; k < cur.length; k++) {
        if (cur[k] === '0') continue;
        acc.push('.' + '0'.repeat(k) + cur[k]);
      }
    }
    return acc;
  }, []);
}

// Other Solutions
function splitExp(num) {
  let [N, n] = num.split`.`;
  N = [...N].map((i, ind) => i + '0'.repeat(N.length - ind - 1));
  n = [...(n || [])].map((i, ind) => '.' + '0'.repeat(ind) + i);
  return [...N, ...n].filter((i) => /[^0.]/.test(i));
}
