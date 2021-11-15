// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x and y attributes (X and Y in C#) attributes.

// Write a function calculating distance between Point a and Point b.

// Tests round answers to 6 decimal places.


// My Solution
function distanceBetweenPoints(a, b) {
  return Math.sqrt((Math.abs(a.x - b.x) ** 2) + (Math.abs(a.y - b.y) ** 2)).toFixed(6) * 1;
}

// Other Solutions
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}