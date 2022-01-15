// Your job is to fix the parentheses so that all opening and closing parentheses (brackets) have matching counterparts. You will do this by appending parenthesis to the beginning or end of the string. The result should be of minimum length. Don't add unnecessary parenthesis.

// The input will be a string of varying length, only containing '(' and/or ')'.

// For example:

// Input: ")("
// Output: "()()"

// Input: "))))(()("
// Output: "(((())))(()())"


// My Solution
const fixParentheses = (str) => {
  let newStr = str;
  while (newStr.match(/(\(\))/g) !== null){
    newStr = newStr.replace(/(\(\))/g, "")
  }
  const x = newStr.match(/\)/g) || [];
  const y = newStr.match(/\(/g) || [];
  return `${"(".repeat(x.length)}${str}${")".repeat(y.length)}`
};

// Other Solutions
function fixParentheses( str ){
  let left = 0, right = 0;
  [...str].map(el => el === '(' ? right++ : right === 0 ? left++ : right--)
  
  return '('.repeat(left) + str + ')'.repeat(right);
};

