// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


// My Solution
var orderedCount = function (text) {
  return [...new Set(text)].map(function(el){
    const regexp = new RegExp(`[${el}]`, "g")
    return [el, text.match(regexp).length]
  })
}

// Other Solutions
const orderedCount = s => Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1]);