// In this Kata, you will check if it is possible to convert a string to a palindrome by changing one character.

// For instance:

// solve ("abbx") = True, because we can convert 'x' to 'a' and get a palindrome.
// solve ("abba") = False, because we cannot get a palindrome by changing any character.
// solve ("abcba") = True. We can change the middle character.
// solve ("aa") = False
// solve ("ab") = True

// My Solution
function solve(str) {
  let count = 0;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) count++;
  }
  if (str.length % 2 && !count) return true;
  return count === 1;
}

// Other Solutions
function solve(str) {
  let diff = [...str].reverse().filter((x, i) => x != str[i]).length;
  return diff == 2 || (diff == 0 && str.length % 2 == 1);
}
