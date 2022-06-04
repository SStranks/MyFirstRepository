// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.

// My Solution
function longest(words) {
  return Math.max(...words.map((el) => el.length));
}
