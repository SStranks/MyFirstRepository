function isDivideBy(number, a, b) {
  // TASK: Is 'number' divisible by both 'a' and 'b'?
  // Test for divisibility using the modulo operator; is the remainder equal to 0?
  return ((number % a) === 0 && (number % b) === 0) ? true : false;
}