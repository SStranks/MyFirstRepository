// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'


// My Solution
function addLetters(...letters) {
  const char = letters.map((el) => el.charCodeAt(0) - 96).reduce((acc, cur) => acc + cur, 0) % 26;
  return char ? String.fromCharCode(char + 96) : "z"
}

// Other Solutions
function addLetters(...letters) {
  return String.fromCharCode((letters.reduce((a,b) => a + b.charCodeAt(0) - 96, 0) + 25) % 26 + 97);
}