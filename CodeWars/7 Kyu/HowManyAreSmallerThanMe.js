// Write

// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]


// My Solution
function smaller(nums) {
  return nums.map((el, i, arr) => arr.filter((num, j) => num < el && j > i).length)
}

