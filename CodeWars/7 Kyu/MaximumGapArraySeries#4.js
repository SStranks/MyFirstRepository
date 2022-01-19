// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .


// My Solution
function maxGap (numbers){
  const newArr = numbers.slice().sort((a, b) => a - b);
  let maxGap = 0;
  for (let i = 0; i < newArr.length - 1; i++){
    const gap = Math.abs(newArr[i] - newArr[i + 1]);
    if (gap > maxGap) maxGap = gap
  }
  return maxGap
}

// Other Solutions
