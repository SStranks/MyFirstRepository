// It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

// Digits can be a number, a string, or undefined. In case of undefined return an empty string ''.

// To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.


// My Solution
function sum(digits) {
  if (digits === undefined) return ""
  const arr = digits.toString().split("")
  const str = arr.join(" + ")
  const total = arr.reduce((acc, cur) => acc + Number(cur), 0)
  return `${str} = ${total}`
}