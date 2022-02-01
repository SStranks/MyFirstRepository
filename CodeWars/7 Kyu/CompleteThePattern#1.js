// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn


// My Solution
function pattern(n){
  let output = "";
  for (let i = 1; i <= n; i++){
    output += `${i.toString().repeat(i)}\n`
  }
  return output.slice(0, -1)
}