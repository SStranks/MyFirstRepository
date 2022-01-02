// In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

// For example:

// solve("our code") = "edo cruo"
// -- Normal reversal without spaces is "edocruo". 
// -- However, there is a space at index 3, so the string becomes "edo cruo"

// solve("your code rocks") = "skco redo cruoy". 
// solve("codewars") = "srawedoc"
// More examples in the test cases. All input will be lower case letters and in some cases spaces.


// My Solution
function solve(str){
  const revStr = str.replace(/\s/g, "").split("")
  return str.split("").map((el) => el !== " " ? revStr.pop() : " ").join("")
}

// Other Solutions
function solve(str) {
  let arr = [...str].filter(x => x != ' ')
  return str.replace(/\S/g, _ => arr.pop())
}