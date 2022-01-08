// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


// My Solution
function stray(numbers) {
  if (numbers[0] === numbers[1]){
    return numbers.filter((el) => el !== numbers[0])[0]
  } else {
    return numbers[0] === numbers[2] ? numbers[1] : (numbers[1] === numbers[2] ? numbers[0] : numbers[2])
  }
}

// Other Solutions
const stray = nums => nums.reduce((a, b) => a ^ b);

