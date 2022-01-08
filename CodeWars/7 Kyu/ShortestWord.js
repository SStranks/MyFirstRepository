// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


// My Solution
function findShort(s){
  return s.split(" ").sort(function(a, b){
    if (a.length > b.length) return 1
    if (a.length < b.length) return -1
  })[0].length
}

// Other Solutions
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}