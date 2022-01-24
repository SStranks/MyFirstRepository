// The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

// onesComplement(1001) = 0110
// onesComplement(1001) = 0110
// For any given binary number,formatted as a string, return the Ones' Complement of that number.


// My Solution
function onesComplement(n) {
  return n.toString().split("").map((el) => el ^ 1).join("")
};

// Other Solutions
function onesComplement(n) {
  return [...n].map( b => b^1 ).join``
};