// Get the next prime number!

// You will get a numbern (>= 0) and your task is to find the next prime number.

// Make sure to optimize your code: there will numbers tested up to about 10^12.

// Examples
// 5   =>  7
// 12  =>  13

// My Solution
function nextPrime(n) {
  function isPrime(n) {
    if (n < 2) return false;
    const j = n % 2 ? 1 : 2;
    const k = Math.sqrt(n);
    for (let i = 2; i <= k; i += j) {
      if (!(n % i)) return false;
    }
    return true;
  }

  do {
    n++;
  } while (!isPrime(n));
  return n;
}

// Other Solutions
const nextPrime = (n) => {
  if (n++ < 2) return 2;
  for (let i = 2; i <= n ** 0.5; i++) if (!(n % i)) return nextPrime(n);
  return n;
};
