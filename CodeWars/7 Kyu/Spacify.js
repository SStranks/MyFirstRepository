// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

// My Solution
function spacify(str) {
  return str.replace(/(.)/g, `$1 `).trimEnd();
}

// Other Solutions
function spacify(str) {
  return str.split('').join(' ');
}
