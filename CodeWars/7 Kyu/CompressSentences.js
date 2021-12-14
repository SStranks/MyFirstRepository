// Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

// Example
// "Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

// becomes

// "01234567802856734"

// Another example
// "the one bumble bee one bumble the bee"

// becomes

// "01231203"


// My Solution
function compress(sentence) {
  let words = {};
  let count = 0;
  return sentence.split(" ").map(function(el) {
    el = el.toLowerCase();
    if ([el] in words) {
      return words[el]
    } else {
      words[el] = count;
      count++
      return words[el]
    }
  }).join("")
}

// Other Solutions
function compress(sentence) {
  sentence = sentence.toLowerCase()
  let arr = [...new Set(sentence.split` `)]
  return sentence.split` `.map(x => arr.indexOf(x)).join``
}