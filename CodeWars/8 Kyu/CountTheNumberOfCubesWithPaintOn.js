// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.


// My Solutions
const countSquares = function(cuts){
  return cuts ? (cuts + 1) ** 3 - (cuts - 1) ** 3: 1;
}

// Other Solution
let countSquares = c => c ? 6 * c * c + 2 : 1;