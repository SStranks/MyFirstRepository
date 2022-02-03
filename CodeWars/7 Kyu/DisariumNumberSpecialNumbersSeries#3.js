// Definition
// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

// Input >> Output Examples
// disariumNumber(89) ==> return "Disarium !!"
// Explanation:
// Since , 81 + 92 = 89 , thus output is "Disarium !!"


// My Solution
function disariumNumber(n){
  return n.toString().split("").reduce((acc, cur, i) => acc + cur ** (i + 1), 0) === n ? "Disarium !!" : "Not !!"
}

// Other Solutions
