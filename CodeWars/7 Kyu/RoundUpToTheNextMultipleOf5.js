// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.


// My Solutions
function roundToNext5(n) {
  while (n % 5 !== 0) {
    n++;
  }
  return n
}

// Other Solutions
function roundToNext5(n){
  return Math.ceil(n/5)*5;
}