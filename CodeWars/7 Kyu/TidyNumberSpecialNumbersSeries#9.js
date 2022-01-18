// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// Warm-up (Highly recommended)
// Playing With Numbers Series
// Notes
// Number passed is always Positive .

// Return the result as a Boolean

// Input >> Output Examples
// tidyNumber (12) ==> return (true)
// Explanation:
// The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .


// My Solution
function tidyNumber(n){
  while (n >= 10){
    const digit = n % 10;
    const tenth = Math.floor(n / 10) % 10;
    if (digit < tenth) return false;
    n = Math.floor(n / 10);
  }
  return true
}

// Other Solutions
function tidyNumber(n){
  return [...n+=""].sort().join``==n
}

function tidyNumber(n) {
  let m = 9;
  while (n) {
    if (n % 10 > m) return false;
    m = n % 10;
    n = n / 10 | 0;
  }
  return true;
}