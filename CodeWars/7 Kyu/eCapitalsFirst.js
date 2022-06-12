// Create a function that takes an input String and returns a String, where all the uppercase words of the input String are in front and all the lowercase words at the end. The order of the uppercase and lowercase words should be the order in which they occur.

// If a word starts with a number or special character, skip the word and leave it out of the result.

// Input String will not be empty.

// For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

// My Solution
function capitalsFirst(str) {
  const upper = str
    .split(' ')
    .filter((el) => /[A-Z]/.test(el[0]))
    .join(' ');
  const lower = str
    .split(' ')
    .filter((el) => /[a-z]/.test(el[0]))
    .join(' ');
  return `${upper} ${lower}`.trim();
}

// Other SOlutions
function capitalsFirst(str) {
  let words = str.split(' ');
  let upper = words.filter(function (x) {
    return x.charAt(0).match(/[A-Z]/);
  });
  let lower = words.filter(function (x) {
    return x.charAt(0).match(/[a-z]/);
  });
  return upper.concat(lower).join(' ');
}
