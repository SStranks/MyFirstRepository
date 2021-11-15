// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"


// My Solution
function nameShuffler(str){
  return str.split(" ").reverse().join(" ");
}