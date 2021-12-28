// Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

// Example: 'man' should return [ '01101101', '01100001', '01101110' ]


// My Solution
function wordToBin(str){
  return str.split("").map((el) => el.charCodeAt(0).toString(2).padStart(8, 0))
}

// Other Solutions
const wordToBin = (x) => [...x].map(el=> el.codePointAt().toString(2).padStart(8,'0'))