// Write

// function consecutiveOnes(nums) {}
// that takes in array nums and returns the maximum consecutive 1's

// For example

// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
// consecutiveOnes([1, 1, 0, 0, 1]) === 2
// consecutiveOnes([0, 0, 0, 0, 0]) === 0
// PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT

// My Solution
function consecutiveOnes(nums) {
  let count = 0;
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      tmp++;
      continue;
    } else {
      if (tmp > count) {
        count = tmp;
        tmp = 0;
        continue;
      }
      tmp = 0;
      continue;
    }
  }
  return tmp > count ? tmp : count;
}

// Other Solutions
const consecutiveOnes = (nums, n = 0) =>
  nums.reduce((acc, i) => (acc < (n = (n + 1) * i) ? n : acc), (n = 0));

function consecutiveOnes(a) {
  var result = 0,
    counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      counter++;
    } else {
      result = Math.max(counter, result);
      counter = 0;
    }
  }
  return Math.max(result, counter);
}
