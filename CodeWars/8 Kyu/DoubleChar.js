// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// My Solution
function doubleChar(str) {
  let newStr = [];
  [...str].forEach((el) => {
    newStr.push(el);
    newStr.push(el);
  })
  return newStr.join("");
}

// Others Solution
const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}