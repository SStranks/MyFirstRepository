// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0


// My Solution
function sumEvenNumbers(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++){
    if (input[i] % 2 === 0 && input[i] % 1 === 0) sum += input[i]
  }
  return sum
}

// Other Solutions
sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)