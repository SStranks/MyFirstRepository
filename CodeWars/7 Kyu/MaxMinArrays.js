// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!


// My Solution
function solve(arr){
  const arr1 = arr.slice().sort((a, b) => b - a);
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (i % 2 === 0){ 
      newArr.push(arr1[i / 2])
    } else {
      newArr.push(arr1.pop())
    }
  }
  return newArr
};

// Other Solutions
