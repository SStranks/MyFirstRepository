// Description
// For this Kata you will need to create a function which works out the score of a dive in an Olympic diving competition and displays it in the correct format. The function will take 2 arguments:

// An array of numbers representing the judges' scores, called scores
// A number representing the degree of difficulty of the dive, called tariff
// The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the difficulty ( tariff ) to get the score for the dive.

// https://www.britannica.com/story/how-is-diving-scored

// The answer should be a string, and should always have exactly 2 digits after the decimal point, as this is how diving scores are displayed.

// Note
// The scores will only contain numbers between 0 and 10 and the tariff will always be greater than 0.

// Example
// scoreOfDive( [ 7, 7.5, 8, 7.5, 6, 7, 7 ], 3 )  =>  '64.50'

// My Solution
function scoreOfDive(scores, tariff) {
  const result =
    scores
      .sort((a, b) => a - b)
      .reduce((acc, cur, i) => {
        if (i > 1 && i < 5) return acc + cur;
        return acc;
      }, 0) * tariff;
  return Math.round(result * 100) / 100;
}
