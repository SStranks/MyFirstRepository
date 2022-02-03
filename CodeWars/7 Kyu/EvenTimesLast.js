// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


// My Solution
function evenLast(numbers) {
  if (!numbers.length) return 0
  return numbers.reduce(function(acc, cur, i){
    return i % 2 === 0 ? acc + cur : acc
  }, 0) * numbers[numbers.length - 1]
}

// Other Solutions
