// Description:
// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

// Examples
// removeOrAdd("Hi!") === "Hi"
// removeOrAdd("Hi! Hi!") === "Hi Hi"
// removeOrAdd("Hi! Hi") === "Hi Hi!"
// removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
// removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

// My Solution
function removeOrAdd(string) {
  return string.replace(/\b\w+[!]*/g, (c) => {
    const lastIdx = c[c.length - 1];
    const secondLastIdx = c[c.length - 2];
    if (lastIdx !== '!') return `${c}!`;
    if (secondLastIdx !== '!') return `${c.slice(0, -1)}`;
    return c;
  });
}

// Other Solutions
function removeOrAdd(s) {
  return s
    .split(' ')
    .map((word) => {
      if (word.match(/!{2,}$/)) return word;
      if (!word.match(/!$/)) return word + '!';
      return word.replace(/!$/, '');
    })
    .join(' ');
}

const removeOrAdd = (str) =>
  str.replace(/\w\b\!*/g, (x) => (x.length === 1 ? x + '!' : x.length === 2 ? x[0] : x));
