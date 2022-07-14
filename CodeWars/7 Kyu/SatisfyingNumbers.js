// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// Task:
// Write

// smallest(n)
// that will find the smallest positive number that is evenly divisible by all of the numbers from 1 to n (n <= 40).
// E.g

// smallest(5) == 60 // 1 to 5 can all divide evenly into 60
// smallest(10) == 2520

// My Solution
// Couldn't complete: https://www.geeksforgeeks.org/smallest-number-divisible-first-n-numbers/
function smallest(n) {
  function gcd(a, b) {
    return a % b !== 0 ? gcd(b, a % b) : b;
  }

  let ans = 1;
  for (let i = 1; i <= n; i++) ans = (ans * i) / gcd(ans, i);
  return ans;
}

// Other Solutions
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);
const smallest = (n) => [...Array(n)].reduce((pre, _, idx) => lcm(pre, ++idx), 1);
