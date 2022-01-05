// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.


// My Solution
function consecutive(arr){
  if (arr.length <= 1) return 0;
  const sorted = arr.sort((a, b) => a - b);
  const low = sorted[0];
  const high = sorted[sorted.length - 1];
  const int = high - low + 1;
  return int - arr.length
}

// Other Solutions
function consecutive(arr){
  let l = arr.length;
  return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
}

const consecutive = arr => arr.length ? Math.max(...arr) - Math.min(...arr) - arr.length + 1 : 0;