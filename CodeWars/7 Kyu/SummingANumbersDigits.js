// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// My Solution
function sumDigits(number) {
  return Math.abs(number).toString().split("").reduce((acc, cur) => acc + Number(cur), 0)
}

// Other Solutions
function sumDigits(number) {
  var i = 0;
  var sum = 0;
  number = Math.abs(number)
  while(number != 0)
  {
      sum += number % 10
      number = Math.floor(number/10)
  }
  return sum
}