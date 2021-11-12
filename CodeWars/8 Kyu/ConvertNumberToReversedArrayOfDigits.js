// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// My Solution
function digitize(n) {
  return (n + "").split("").reverse().map((el) => el * 1);
}

// Other Solution
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}