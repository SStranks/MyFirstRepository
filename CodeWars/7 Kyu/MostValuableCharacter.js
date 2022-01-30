// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the alphabetically lowest character. [For Golang return rune]

// All inputs will be lower case.

// For example:
// solve('a') = 'a'
// solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
// solve("axyzxyz") = 'x'


// My Solution
function solve(st) {
  let high = [st[0], 0];
  st.split("").forEach(function(el){
    const index = st.lastIndexOf(el) - st.indexOf(el)
    if(index > high[1]) high = [el, index];
    if(index === high[1] && el < high[0]) high[0] = el
  })
  return high[0]
}

// Other Solutions
function solve(st) {
  return [...st].reduce((res, ch) => {
    const max = st.lastIndexOf(ch) - st.indexOf(ch);
    return (max > res.max || max === res.max && ch < res.ch) ? {max, ch} : res;
  }, {max : 0, ch: st[0]}).ch;
}