// Goal
// Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

// If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

// Example
// majority(["A", "B", "A"]) returns "A"
// majority(["A", "B", "B", "A"]) returns null


// My Solution
function majority(arr) {
  if (!arr.length) return null;
  
  let elements = {};
  for (let el of arr) {
    elements[el] = (elements[el] + 1) || 1
  }
  
  let elementsArr = [];
  for (let item in elements) {
    elementsArr.push([item, elements[item]]);
  }
  elementsArr = elementsArr.sort((a, b) => b[1] - a[1]);
  
  if (elementsArr.length === 1) return elementsArr[0][0]
  return elementsArr[0][1] !== elementsArr[1][1] ? elementsArr[0][0] : null;
}

// Other Solutions
function majority(arr) {
  const obj = arr.reduce((acc,el)=> (acc[el] = acc[el]+1 || 1, acc), {});
  const values = [...new Set(Object.values(obj))].sort((a,b)=> b - a);
  const filter = arr.filter(el => obj[el] === values[0]);
  
  return arr.length === 0 || [...new Set(filter)].length > 1 ? null : filter[0]
}

function majority(arr) {
  let s = arr.reduce((acc, val) => (acc[val] = acc[val] + 1 || 1, acc), {})
  let n = Math.max(...Object.values(s))
  let a = Object.keys(s).filter(x => s[x] == n)
  return a.length != 1 ? null : a[0]
}