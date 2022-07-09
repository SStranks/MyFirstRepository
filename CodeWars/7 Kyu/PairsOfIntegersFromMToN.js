// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

// The input m will always be smaller than or equal to n (e.g., m <= n)

// Example
// m = 2
// n = 4

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]

// My Solution
function generatePairs(m, n) {
  let arr = [];
  let a = m;
  let b = m;
  const length = ((n - m + 1) ** 2 + (n - m + 1)) / 2;
  for (let i = 0; i < length; i++) {
    arr.push([a, b]);
    b++;
    if (b > n) {
      a++;
      b = a;
    }
  }
  return arr;
}

// Other Solutions
function generatePairs(m, n) {
  let result = [];
  for (let i = m; i <= n; i++) for (let j = i; j <= n; j++) result.push([i, j]);
  return result;
}
