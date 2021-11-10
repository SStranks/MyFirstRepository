// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Other Solutions
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}