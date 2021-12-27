// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// // Remove the 3's at indices 0 and 3
// // followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// More examples can be found in the test cases.

// Good luck!


// My Solution
function solve(arr){
  let newArr = arr.slice()
  for (let j = newArr.length - 1; j >= 0; j--){
    let elem = newArr[j]
    newArr = newArr.filter((el, i) => el !== elem || i === j)
  }
  return newArr
}

// Other Solutions
// #1 Not Optimal n^2 complexity
function solve(arr){
  return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}

const solve = arr => [...new Set(arr.reverse())].reverse()