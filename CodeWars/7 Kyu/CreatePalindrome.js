// Consider the string "adfa" and the following rules:

// a) each character MUST be changed either to the one before or the one after in alphabet. 
// b) "a" can only be changed to "b" and "z" to "y". 
// From our string, we get:

// "adfa" -> ["begb","beeb","bcgb","bceb"]

// Here is another example: 
// "bd" -> ["ae","ac","ce","cc"]

// --We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".
// You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.


// My Solution
function solve(s){
  for (let i = 0; i < s.length / 2; i++){
    const s1 = s[i];
    const s2 = s[s.length - 1 - i];
    if (s1 === s2) continue;
    if (s1 === "a" && s2 === "c") continue;
    if (s1 === "z" && s2 === "x") continue;
    if (s1.charCodeAt(0) + 1 === s2.charCodeAt(0) + 1 || s1.charCodeAt(0) + 1 === s2.charCodeAt(0) - 1) continue;
    if (s1.charCodeAt(0) - 1 === s2.charCodeAt(0) + 1 || s1.charCodeAt(0) - 1 === s2.charCodeAt(0) - 1) continue;
    return false
  }
  return true
}

// Other Solutions
function solve(s) {
  const middle = s.length / 2;

  for (let i = 0; i < middle; i++) {
    const first = s[i].charCodeAt()
    const last = s[s.length - (i + 1)].charCodeAt()
    const distance = Math.abs(last - first)
    if (distance > 2 || distance === 1) return false
  }
  return true
}

function solve([a, ...str]){
  if (!str[0]) return true
  const b = str.pop``
  if (a == b || (a.charCodeAt`` - b.charCodeAt``)**2 == 4) return solve(str)
  return false
}