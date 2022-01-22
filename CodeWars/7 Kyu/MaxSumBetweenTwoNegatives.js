// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell.

// No negative element should be present in this sum.

// Example:

// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.


// My Solution
function maxSumBetweenTwoNegatives(a) {
  let sum = -1
  let count;
  let toggle = false;
  for (let i = 0; i < a.length; i++){
    if (Math.sign(a[i]) === -1){
      if (count > sum) sum = count;
      count = 0;
      toggle = true;
      continue;
    }
    if (toggle !== false && Math.sign(a[i]) === 1) count += a[i];
  }
  return sum
}

// Other Solutions
function maxSumBetweenTwoNegatives(a) {
  let i = 0, c = 0, m = -1;
  while(i < a.length && a[i] >= 0) i++;
  while(++i < a.length){
    if(a[i] < 0){ 
      m = m < c ? c : m; 
      c = 0;
    }
    else c += a[i];
  }
  return m;
}