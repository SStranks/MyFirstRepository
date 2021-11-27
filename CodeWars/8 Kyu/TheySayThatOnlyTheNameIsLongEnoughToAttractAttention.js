// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples
// isOpposite("ab","AB") should return true;
// isOpposite("aB","Ab") should return true;
// isOpposite("aBcd","AbCD") should return true;
// isOpposite("AB","Ab") should return false;
// isOpposite("","") should return false;


// My Solution
function isOpposite(s1,s2) {
  if (s1 === "" && s2 === "") return false;
  if (s1.toLowerCase() === s2.toLowerCase()) {
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) return false;
    } 
  } else { return false }
  return true;
}

// Other Solutions
function isOpposite(s1,s2){
  return s1.split('')
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';
  
}