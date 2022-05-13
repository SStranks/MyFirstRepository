// A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

// You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

// Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

// Example:

//   Parity: 'even'
//   Bin: '0101010'
//   Result: 1
// Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

// My Solution
function checkParity(parity, bin) {
  const bits = bin.match(/[1]/g) || [];
  if (parity === 'even') return bits.length % 2 === 0 ? 0 : 1;
  if (parity === 'odd') return bits.length % 2 !== 0 ? 0 : 1;
}

// Other Solutions
const checkParity = (parity, bin) => +(parity === (bin.split('1').length % 2 ? 'odd' : 'even'));
