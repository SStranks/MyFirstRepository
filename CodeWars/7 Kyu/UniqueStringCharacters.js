// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.


// My Solution
function solve(a,b){
  const regA = new RegExp (`[^${a}]`, "g");
  const regB = new RegExp (`[^${b}]`, "g");
  const match1 = a.match(regB) || [];
  const match2 = b.match(regA) || [];
  return match1.join("") + match2.join("")
};

// Other Solutions
function solve(a,b) {
  let setA = new Set(a);
  let setB = new Set(b);
  return [...(a+b)].filter(c => setA.has(c) ^ setB.has(c)).join("");
};