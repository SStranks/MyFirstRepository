// Define a function that determines if Joe's work is simple or complex.

// Input will be non emtpy strings with no punctuation.

// It is simple if: the length of each word does not exceed the amount of words in the string (See example test cases)

// Otherwise it is complex.

// If complex:

// return "Keep It Simple Stupid"
// or if it was kept simple:

// return "Good work Joe!"
// Note: Random test are random and nonsensical. Here is a silly example of a random test:

// "jump always mostly is touchy dancing choice is pineapples mostly"

// My Solution
function isKiss(sentence) {
  const words = sentence.match(/\b\w+\b/g);
  return words.every((el) => el.length <= words.length)
    ? 'Good work Joe!'
    : 'Keep It Simple Stupid';
}
