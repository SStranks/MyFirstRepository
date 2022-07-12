// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }
// If a collision is detected, return true. If not, return false.

// My Solution
function collision(x1, y1, radius1, x2, y2, radius2) {
  const a = x1 - x2;
  const b = y1 - y2;
  const c = Math.sqrt(a ** 2 + b ** 2);
  return c <= radius1 + radius2 ? true : false;
}

// Other Solutions
function collision(x1, y1, radius1, x2, y2, radius2) {
  return Math.hypot(x1 - x2, y1 - y2) < radius1 + radius2;
}
