// Return 1 when any odd bit of x equals 1; 0 otherwise.

// Assume that:

// x is an unsigned, 32-bit integer;
// the bits are zero-indexed (the least significant bit is position 0)
// Examples
//   2  -->  1 (true) because at least one odd bit is 1 (2 = 0b10)
//   5  -->  0 (false) because none of the odd bits are 1 (5 = 0b101)
// 170  -->  1 (true) because all of the odd bits are 1 (170 = 0b10101010)

// My Solution
function anyOdd(x) {
  const bit = x.toString(2);
  for (let i = bit.length - 2; i >= 0; i -= 2) {
    if (bit[i] === '1') return 1;
  }
  return 0;
}

// Other Solutions
// 2863311530 is 10101010101010101010101010101010 as binary (so every odd bit set) so n= x & 10101010101010101010101010101010 > 0 if x contains any "odd 1-bit", & = bitwise AND (=>int) !(n) is false if n > 0, so !!(n) is true if n>0, logical NOTs (=>bool) ~ means bitwise NOT (=>int), so ~x inverts every bit (true==1 and false==0), so for true => ~1=-2 (incl. first bit) and ~-2=1 (means ~~true==1) or ~0=-1 and ~-1=0 (means ~~false=0) That's it, not really diffcult;-)
var anyOdd = (x) => ~~!!(x & 2863311530);
