// From a sentence, deduce the total number of animals.

// For example :

// "I see 3 zebras, 5 lions and 6 giraffes." The answer must be 14

// "Mom, 3 rhinoceros and 6 snakes come to us!" The answer must be 9

// My Solution
function countAnimals(sentence) {
  return (sentence.match(/\d+/g) || [0]).reduce((acc, cur) => acc + Number(cur), 0);
}

// Other Solutions
function countAnimals(s, a = 0) {
  return s.replace(/\d+/g, (m) => (a += +m)), a;
}
