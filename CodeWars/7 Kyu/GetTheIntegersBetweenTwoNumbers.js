// Build a function that can get all the integers between two given numbers.

// Example:

// (2,9)

// Should give you this output back:

// [ 3, 4, 5, 6, 7, 8 ]

// If startNum is the same as endNum, return an empty array.


// My Solutions
function range(startNum, endNum) {  
  let arr = [];
  for (let i = startNum + 1; i < endNum; i++) {
    arr.push(i);
  }
  return arr;
}; 

// Other Solutions
range = (a, b) => [...Array(b).keys()].slice(a + 1);

const range = (start, end) => Array.from({length: end-start-1}, (_, i)=> i+1+start)