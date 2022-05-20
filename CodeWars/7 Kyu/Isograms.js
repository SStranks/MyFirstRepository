// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution
function isIsogram(str) {
  return !(str.match(/(\w).*\1/i) || []).length;
}

// Other Solutions
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
