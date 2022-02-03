// Definition
// Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

// Task
// Given a number, Find if it is Balanced or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// (balanced-num 7) ==> return "Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digit (0)

// and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

// (balanced-num 295591) ==> return "Not Balanced"
// Explanation:
// Since , The sum of all digits to the left of the middle digits (11)

// and the sum of all digits to the right of the middle digits (10) are Not equal , then It's Not Balanced

// Note : The middle digit(s) are 55 .


// My Solution
function balancedNum(number) {
  let left = 0;
  let right = 0;
  const length = number.toString().length;
  for (let i = 1, j = length; ;i++, j--){
    if (length % 2 !== 0 && i === j) break;
    if (length % 2 === 0 && i === j - 1) break;
    left += Math.floor(number / (10 ** (length - i))) % 10;
    right += Math.floor(number / 10 ** (i - 1)) % 10;
  }
  return left === right ? "Balanced" : "Not Balanced"
}

// Other Solutions
function balancedNum(number){
  let i, result = 0;
  number = number + "";
  for(i = 0; i < number.length / 2 - 1; i++){
      result += +number[i] - +number[number.length - 1 - i];
  }
  return result === 0 ? "Balanced" : "Not Balanced";
}