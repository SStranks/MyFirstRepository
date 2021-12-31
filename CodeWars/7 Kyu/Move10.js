// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.


// My Solution
function moveTen(s){
  return s.split("").map((el) => String.fromCharCode((el.charCodeAt(0) - 87) % 26 + 97)).join("")
}