// For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

// In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

// Example:

// 192827764920 --> 192827000000

// 938473 --> 938000

// 2837743 --> 2830000


// My Solution
function manipulate(num) { 
  const numSecondHalf = num.toString().slice(Math.floor(num.toString().length / 2))
  return num - numSecondHalf
} 

// Other Solutions
function manipulate(num) {
  const a = Math.ceil((1 + Math.floor(Math.log10(num))) / 2)
  const b = Math.pow(10, a)
  return Math.floor(num / b) * b
}

function manipulate(num) { 
  const s = num.toString();
  const m = Math.floor(s.length / 2);
  return parseInt(s.substr(0, m) + '0'.repeat(s.length - m));
} 