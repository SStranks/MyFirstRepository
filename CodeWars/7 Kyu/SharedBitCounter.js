// Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.

// Examples
//  7  =  0111 in binary
// 10  =  1010
// 15  =  1111
// 7 and 10 share only a single 1-bit (at index 2) --> false
// 7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
// 10 and 15 share 2 1-bits (at indexes 0 and 2) --> true
// Hint: you can do this with just string manipulation, but binary operators will make your life much easier.

// My Solution
function sharedBits(a, b) {
  return [...(a & b).toString(2)].filter((el) => el === '1').length >= 2;
}

// Other Solutions
// It evaluates as (a & b) & ((a & b) - 1).
// Let c = a & b, so you have c & c-1. That clears the top bit, if any, from c. If c == 0, a and b had no set bits in common. Otherwise, if c & c-1 == 0, a and b had exactly one set bit in common. In all other cases, they had at least two set bits in common, and the function should return true.
// You can use c & c-1 iteratively to zero out all set bits from c. That's a faster way to count them than to count set bits over all of them.
sharedBits = (a, b) => !!(a & b & ((a & b) - 1));

function sharedBits(a, b) {
  return (a & b).toString(2).replace(/0/g, '').length > 1;
}
