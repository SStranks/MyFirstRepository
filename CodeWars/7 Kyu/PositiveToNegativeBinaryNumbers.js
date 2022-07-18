// Given an array of ones and zero(e)s that represents a positive binary number, convert the number to two's complement value.

// Two's complement is the way most computers represent positive or negative integers. The most significant bit is 1 if the number is negative, and 0 otherwise.

// Examples:

// [1,1,1,1] = -1

// [1,0,0,0] = -8

// [1,1,0,1] = -3

// To get the two's complement negative notation of an integer, you take the number in binary.

// You then flip the bits, and add one (with carry) to the result.

// For example:

// [0,0,1,0] = 2 in base 10

// [1,1,0,1] <- Flip the bits

// Add 1 (with carry):

// [1,1,1,0] = -2

// The output array must have the same length as the input array.

// My Solution
function positiveToNegative(b) {
  const arr = b.slice();
  let bool = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      if (!bool) {
        bool = true;
        continue;
      }
      arr[i] = arr[i] ^ 1;
      continue;
    }
    if (bool) arr[i] = arr[i] ^ 1;
  }

  return arr;
}

// Other Solutions
function positiveToNegative(a) {
  a = a.map((x) => 1 - x);
  for (let i = a.length - 1; i >= 0; i--) {
    a[i] = 1 - a[i];
    if (a[i]) break;
  }
  return a;
}
