// Task.

// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

// Hints

// Ignore dots.

// All triangles will be right isoceles.

// Example:

// .
// .      .  
// .      .       .      ---> should return 2.0

// .
// .      .  
// .      .       .     
// .      .       .      .      ---> should return 4.5


// My Solution
function tArea(tStr) {
  return ((tStr.match(/\n/g).length - 2) ** 2) / 2;
}

// Other Solutions
const tArea = t => Math.pow(t.split("\n").length - 3, 2) / 2