// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

// For more examples,

// pyramid(1) == 1

// pyramid(3) == 2

// pyramid(6) == 3

// pyramid(10) == 4

// pyramid(15) == 5
// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.


// My Solution
function pyramid(balls) {
  let k = Math.ceil(Math.sqrt(balls)) + 1;
  while (k * ((k + 1)/2) <= balls) {
    k += 1;
  }
  return k - 1;
}

// Other Solutions
function pyramid(balls) {
  return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}

