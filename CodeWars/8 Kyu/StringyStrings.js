// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.


// My Solution
function stringy(size) {
  let string = "1";
  for (let i = 0; i < size - 1; i++) {
    i % 2 === 0 ? string += "0" : string += "1";
  }
  return string   
}

// Other Solutions
const stringy = x => ''.padStart(x,'10');

const stringy = size => "10".repeat(size).slice(0,size);