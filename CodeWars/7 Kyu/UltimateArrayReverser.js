// Task
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

// My Solution
const ultimateReverse = (s) => {
  const str = s.join('').split('');
  return s.map((el) => {
    let word = '';
    for (let i = 0; i < el.length; i++) {
      word += str.pop();
    }
    return word;
  });
};

// Other Solutions
function ultimateReverse(words) {
  let reversed = [...words.join('')].reverse();
  return words.map((word) => reversed.splice(0, word.length).join(''));
}
