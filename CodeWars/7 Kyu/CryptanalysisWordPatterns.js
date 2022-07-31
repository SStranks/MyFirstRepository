// In cryptanalysis, words patterns can be a useful tool in cracking simple ciphers.

// A word pattern is a description of the patterns of letters occurring in a word, where each letter is given an integer code in order of appearance. So the first letter is given the code 0, and second is then assigned 1 if it is different to the first letter or 0 otherwise, and so on.

// As an example, the word "hello" would become "0.1.2.2.3". For this task case-sensitivity is ignored, so "hello", "helLo" and "heLlo" will all return the same word pattern.

// Your task is to return the word pattern for a given word. All words provided will be non-empty strings of alphabetic characters only, i.e. matching the regex "[a-zA-Z]+".

// My Solution
function wordPattern(word) {
  const dict = {};
  let i = 0,
    str = '';
  for (let char of word.toLowerCase()) {
    if (dict[char]) {
      str += `${dict[char]}.`;
      continue;
    }
    str += `${i}.`;
    dict[char] = `${i}`;
    i++;
  }
  return str.slice(0, -1);
}

// Other Solutions
const wordPattern = (word) => {
  word = word.toLowerCase();
  const set = [...new Set(word)];
  return word
    .split('')
    .map((e) => set.indexOf(e))
    .join('.');
};
