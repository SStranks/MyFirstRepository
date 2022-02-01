// Task:
// You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

// Note: Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// (n)(n-1)(n-2)...4321
// (n)(n-1)(n-2)...432
// (n)(n-1)(n-2)...43
// (n)(n-1)(n-2)...4
// ...............
// ..............
// (n)(n-1)(n-2)
// (n)(n-1)
// (n)
// Examples:
// pattern(4):

// 4321
// 432
// 43
// 4


// My Solution
function pattern(n){
  let output = ""; 
  for (let i = n; i > 0; i--){
    for (let j = n; j > n - i; j--){
      output += j.toString();
    }
    output += "\n";
  }
  return output.slice(0, -1);
}