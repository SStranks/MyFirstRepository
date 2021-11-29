// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


// My Solution
function isTriangle(a,b,c) {
  const tri = [a, b, c].sort((a, b) => a - b);
  return tri[2] < (tri[0] + tri[1]) ? true : false;
}

// Other Solutions
function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}