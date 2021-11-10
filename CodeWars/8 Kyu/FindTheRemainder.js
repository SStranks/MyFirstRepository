// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.
// Division by zero should return NaN.
// Arguments will both be integers: positive, negative, or neutral (0)

// My Solution
function remainder(a, b){
  return (a > b) ? (a % b) : (b % a);
}
