// The concept of "smooth number" is applied to all those numbers whose prime factors are lesser than or equal to 7: 60 is a smooth number (2 * 2 * 3 * 5), 111 is not (3 * 37).

// More specifically, smooth numbers are classified by their highest prime factor and your are tasked with writing a isSmooth/is_smooth function that returns a string with this classification as it follows:

// 2-smooth numbers should be all defined as a "power of 2", as they are merely that;
// 3-smooth numbers are to return a result of "3-smooth";
// 5-smooth numbers will be labelled as "Hamming number"s (incidentally, you might appreciate this nice kata on them);
// 7-smooth numbers are classified as "humble number"s;
// for all the other numbers, just return non-smooth.
// Examples:

// isSmooth(16) === "power of 2"
// isSmooth(36) === "3-smooth"
// isSmooth(60) === "Hamming number"
// isSmooth(98) === "humble number"
// isSmooth(111) === "non-smooth"
// The provided input n is always going to be a positive number > 1.

// My Solution
function isSmooth(n) {
  const dict = { 2: 'power of 2', 3: '3-smooth', 5: 'Hamming number', 7: 'humble number' };
  const primes = [];
  let divisor = 2;
  while (n >= 2) {
    if (n % divisor == 0) {
      primes.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return dict[primes[primes.length - 1]] || 'non-smooth';
}

// Other Solutions
function isSmooth(n) {
  var primes = { 2: 'power of 2', 3: '3-smooth', 5: 'Hamming number', 7: 'humble number' };

  for (var key in primes) while (n % key == 0) if ((n /= key) == 1) return primes[key];

  return 'non-smooth';
}
