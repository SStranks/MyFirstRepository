// Write a function that returns a vector (list in Python) with each element representing one bit of a 32bit unsigned/signed integer in such a way that if printed it would appear as the binary representation of the integer (Least Significant Bit on the right).

// e.g. 1 = 00000000000000000000000000000001

// Assign either a 1 or a 0 to the vector element depending on whether the bit at the corresponding position is a 1 or 0.

// For example:

// showBits(1);
// would return the following:

// vector<int> bits = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1};
// -1 on the other hand would contain all 1s:

// showBits(-1);
// vector<int> bits = {1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1};
// The function takes one argument (n) which is the integer to be converted to binary.

// My Solution
function showBits(n) {
  return (n >>> 0)
    .toString(2)
    .padStart(32, 0)
    .split('')
    .map((el) => Number(el));
}
