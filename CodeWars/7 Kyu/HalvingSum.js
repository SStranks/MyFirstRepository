// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47


// My Solution
function halvingSum(n) {
  let total = n, i = 1;
  while (Math.floor(n / (2 ** i)) > 0) {
    total += Math.floor(n / (2 ** i));
    i++;
  }
  return total;
}

// Other Solutions
function halvingSum(n) {
  if(n === 1) return n;
  return n + halvingSum(Math.floor(n/2));
}

function halvingSum(n) {
  var sum = 0;
  while(n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}