// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

// Examples
// "Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
// "Hello, World!"  ==> 91
// "Forty4Three"    ==> 113


// My Solution
function hexHash(code){
  const str = code.split("").map((el) => el.charCodeAt(0).toString(16)).join("");
  let val = 0;
  for (let i = 0; i < str.length; i++){
    if (!Number.isNaN(Number(str[i]))) val += Number(str[i])
  }
  return val
}

// Other Solutions
const hexHash = (str) => str.length === 0 ? 0 : str.replace( /./g, x => (x.codePointAt()).toString(16)).match(/\d/g).reduce((a, b) => +a + +b, 0);

const hexHash = string => (string.replace(/./g, c => c.charCodeAt(0).toString(16)).match(/\d/g) || []).reduce((a, b) => a + parseInt(b), 0);