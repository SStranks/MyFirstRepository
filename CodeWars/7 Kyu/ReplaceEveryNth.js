// Task
// Write a method, that replaces every nth char oldValue with char newValue.

// Method:

// replaceNth(text, n, oldValue, newValue)
// Example:
// n:         2
// oldValue: 'a'
// newValue: 'o'
// "Vader said: No, I am your father!" -> "Vader soid: No, I am your fother!"
//   1     2          3        4       -> 2nd and 4th occurence are replaced
// Your method has to be case sensitive!

// As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

// The text and the chars will never be null.

// My Solution
function replaceNth(text, n, oldValue, newValue) {
  if (n < 1) return text;
  let newStr = '';
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== oldValue) {
      newStr += text[i];
      continue;
    }
    count++;
    if (count % n === 0) {
      newStr += newValue;
      continue;
    }
    newStr += text[i];
  }
  return newStr;
}

// Other Solutions
const replaceNth = (text, n, oldValue, newValue, cnt = 0) =>
  n < 1 ? text : text.replace(new RegExp(oldValue, `g`), (val) => (++cnt % n ? val : newValue));
