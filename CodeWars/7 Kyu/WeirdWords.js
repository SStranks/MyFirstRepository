// In this kata you will have to change every letter in a given string to the next letter in the alphabet. You will write a function nextLetter (Javascript) / next_letter (Python, Ruby) to do this. The function will take a single parameter s (string).

// Examples:

// "Hello" --> "Ifmmp"

// "What is your name?" --> "Xibu jt zpvs obnf?"

// "zoo" --> "app"

// "zzZAaa" --> "aaABbb"
// Note: spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized.


// My Solution
function nextLetter(str) {
  return str.replace(/[a-zA-z]/g, function(el){
    if (el === el.toLowerCase()) return String.fromCharCode((el.charCodeAt(0) - 96) % 26 + 97);
    return String.fromCharCode((el.charCodeAt(0) - 64) % 26 + 65)
  })
}

// Other Solutions
function nextLetter(str) {
  return str.replace(/[a-zA-Z]/g, function(c){
        switch (c) {
           case 'z': return 'a';
           case 'Z': return 'A';
           default:  return String.fromCharCode(c.charCodeAt(0) +1);
         } 
     });
 }

function nextLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";
  return str.split('').map(c => alphabet.includes(c) ? alphabet[alphabet.indexOf(c)+1] : c).join('');
}