// Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

// The upper limit for A and B is 216, int.MaxValue or similar.

// For example, you can change 31 to 14 by flipping the 4th and 0th bit:

//  31  0 0 0 1 1 1 1 1
//  14  0 0 0 0 1 1 1 0
// ---  ---------------
// bit  7 6 5 4 3 2 1 0
// Thus 31 and 14 should return 2.

// My Solution
function convertBits(a, b) {
  const bitStr = ((a ^ b) >>> 0).toString(2);
  return bitStr.split('1').length - 1;
}

// Other Solution
const convertBits = (a, b) => --(a ^ b).toString(2).split(1).length;

function convertBits(a, b) {
  var x = a ^ b,
    count = 0;
  do {
    count += x & 1;
  } while ((x >>= 1));
  return count;
}
