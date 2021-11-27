// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// examples:

// uniTotal("a") == 97 uniTotal("aaa") == 291


// My Solution
function uniTotal(str) {
  if (str.length === 0) return 0;
  return str.split("").map((el) => el.charCodeAt(0)).reduce((acc, cur) => acc + cur, 0);
}

// Other Solutions
const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);