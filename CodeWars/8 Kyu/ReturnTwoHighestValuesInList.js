// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// My Solution
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).splice(0, 2);
}

// Other Solutions
function twoHighest(arr) {
  let newSet = new Set(arr)
  
  return Array.from(newSet).sort((a,b) => b - a).slice(0, 2)
}

const twoHighest = a => a
  .filter((e, i) => i === a.lastIndexOf(e))
  .sort((x, y) => y - x)
  .slice(0, 2);