// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}


// My Solution
function charFreq(message) {
  let obj = {};
  message.split("").map((el) => obj[el] = (obj[el] + 1) || 1);
  return obj;
}

// Other Solutions
function charFreq(message) {
  return message.split('').reduce(function(acc, cur) {
    return (acc[cur] = (acc[cur] || 0) + 1) && acc;
  }, {});
}