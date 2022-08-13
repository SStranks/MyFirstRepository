// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

// Write a function calculating perimeter of a Triangle defined this way.

// Tests round answers to 6 decimal places.

// My Solution
function trianglePerimeter(triangle) {
  const { a, b, c } = triangle;
  const hypot = (i, j) => Math.hypot(Math.abs(i.x - j.x), Math.abs(i.y - j.y));
  return hypot(a, b) + hypot(b, c) + hypot(c, a);
}

// Other Solutions
function trianglePerimeter(ᐃ) {
  let ab = Math.hypot(ᐃ.a.x - ᐃ.b.x, ᐃ.a.y - ᐃ.b.y);
  let bc = Math.hypot(ᐃ.b.x - ᐃ.c.x, ᐃ.b.y - ᐃ.c.y);
  let ca = Math.hypot(ᐃ.c.x - ᐃ.a.x, ᐃ.c.y - ᐃ.a.y);
  return ab + bc + ca;
}
