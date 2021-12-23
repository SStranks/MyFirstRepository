// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// My Solution
function solution(str, ending){
  return str.endsWith(ending)
}

function solution(str, ending){
  const newEnd = ending.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regstr = `${newEnd}$`
  return new RegExp(regstr, "g").test(str)
}

// Other Solutions
function solution(str, ending){
  return new RegExp(ending + "$", "i").test(str);
}
