// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


// My Solution
function solve(s){
  const upper = s.match(/[A-Z]/g) || [];
  const lower = s.match(/[a-z]/g) || []; 
  const nums = s.match(/[0-9]/g) || [];
  const specialChars = s.match(/[^A-Z0-9]/gi) || [];
  
  return [upper.length, lower.length, nums.length, specialChars.length]
}

// Other Solution
const solve = (str) => (
  [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
);

