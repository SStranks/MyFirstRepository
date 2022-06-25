// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// For example:
// x = 11
// d = 1
// ->
// Numbers: 1, 10, 11
// Return: [3, 22, 110]

// If there are no numbers, which include the digit, return [0,0,0].

// My Solution
function numbersWithDigitInside(x, d) {
  let numbers = [];
  const regexp = new RegExp(d.toString());
  for (let i = 1; i <= x; i++) {
    if (regexp.test(i.toString())) numbers.push(i);
  }
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  const product = numbers.length && numbers.reduce((acc, cur) => acc * cur, 1);
  return [numbers.length, sum, product];
}
