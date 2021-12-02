// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)


// My Solution
function getDivisorsCnt(n){
  let divisors = 0;
  divisors = n > 1 ? 2 : 1;
  for (let i = 2; i < Math.ceil(n / 1); i++) {
    divisors += n % i === 0 ? 1 : 0;
  }
  return divisors;
}

// Other Solutions
