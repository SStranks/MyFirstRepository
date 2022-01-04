// So, your task is to sum up all the digits in string, possibly multiple times, till you get a one digit result. You should then return it as a string. The input will be always valid.

// For example:

// var str = '1234';
// digitSum(str);  //returns 1

// /* 1 + 2 + 3 + 4 = 10 <= this result doesn't have one digit => 1 + 0 = 1 */

// var str = '1011';
// digitSum(str);  //returns 3
// /* 1 + 0 + 1 + 1 = 3 <= this result does have one digit => 3 */

// var str = '2468';
// digitSum(str);  //returns 2
// /* 2 + 4 + 6 + 8 = 20 <= this result doesn't have one digit => 2 + 0 = 2 */


// My Solution
function digitSum(str){
  if (str < 10) return str
  return digitSum((str.split("").reduce((acc, cur) => acc + Number(cur), 0)).toString())
}

// Other Solutions
function digitSum(str) {
  let sum = String([...str].map(Number).reduce((a, b) => a + b, 0));
  return sum.length > 1 ? digitSum(sum) : sum;
}

digitSum=s=>[...s].reduce((a,b)=>a + +b,-1)%9+1+''