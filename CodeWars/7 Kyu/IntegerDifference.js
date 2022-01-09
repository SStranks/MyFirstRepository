// Write a function that accepts two arguments: an array/list of integers and another integer (n).

// Determine the number of times where two integers in the array have a difference of n.

// For example:

// [1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
// [1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)


// My Solution
const intDiff = (arr, n) => {
  const newArr = arr.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < newArr.length - 1; i++){
    const num = newArr[i];
    for (let j = i + 1; j < newArr.length; j++){
      if (newArr[j] - newArr[i] > n) break;
      if (newArr[j] - newArr[i] === n) count++
    }
  }
  return count
}

// Other Solutions
const intDiff = (arr, n) => {
  let count = 0;
  for(let i = 1; i < arr.length; i++)
    for(let j = 0; j < i; j++)
        if (Math.abs(arr[i] - arr[j]) === n) count++;
  return count;
}