// isMatching checks if a string can be created by combining and rearranging the letters of two other strings (not case sensitive).

// !Spaces will be ignored but special characters and numbers won't match the string and return false.

// For example:
// isMatching("email box", "b aIl", "Mo x e") return true
// but
// isMatching("bouh", "0b", "uh") return false

// You need to be able to use all the caracters from the two strings so:
// isMatching("kata", "kt", "aaa") return false


// My Solution
function isMatching(string, str1, str2){
  let strFind = (str1 + str2).replace(/\s/g, "").toLowerCase().split("").sort((a, b) => a < b ? 1 : -1).join("");
  let origStr = string.replace(/\s/g, "").toLowerCase().split("").sort((a, b) => a < b ? 1 : -1).join("");
  return strFind === origStr
}

