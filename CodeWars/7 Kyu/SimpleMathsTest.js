// Create a function which checks a number for three different properties.

// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

// Examples
// numberProperty(7)  // ==> [true,  false, false]
// numberProperty(10) // ==> [false, true,  true]
// The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

// numberProperty(-7)  // ==> [false, false, false]
// numberProperty(-10) // ==> [false, true,  true]

// My Solution
function numberProperty(n) {
  function isPrime(n) {
    if (n < 1) return false;
    if (n === 1 || n === 2) return true;
    for (let i = Math.floor(n / 2); i > 1; i--) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const even = n % 2 === 0;
  const multiple = n % 10 === 0;
  const prime = isPrime(n);

  return [prime, even, multiple];
}

// Other SOlutions
function isPrime(n) {
  var num = n - 1;
  while (num > 2) {
    if (n % num == 0) {
      return false;
    }
    num--;
  }
  return n > 1;
}

function isMultiple(a, b) {
  return a % b == 0;
}

function numberProperty(n) {
  return [isPrime(n), isMultiple(n, 2), isMultiple(n, 10)];
}
