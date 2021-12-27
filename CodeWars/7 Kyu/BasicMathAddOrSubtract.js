// In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

// Note: the input will not be empty.

// Examples
// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"


// My Solution
function calculate(str){
  return eval(str.replace(/(plus)/g, " + ").replace(/(minus)/g, " - ")).toString()
}

// Other Solutions
function calculate(str) {
  let result = '';
  result = str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((a,c) => +a + +c)  
  return result + '';
}