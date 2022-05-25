// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// My Solution
function solve(s) {
  return Number(s.match(/[0-9]+/g).sort((a, b) => b - a)[0]);
}

// Other Solutions
solve = (s) => Math.max(...s.match(/\d+|$/g));
