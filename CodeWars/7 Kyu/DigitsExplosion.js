// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

// My Solution
function explode(s) {
  return [...s].map((el) => el.repeat(Number(el))).join('');
}

// Other Solutions
const explode = (s) => s.replace(/\d/g, (d) => d.repeat(d));
