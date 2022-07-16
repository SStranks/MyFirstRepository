// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

// It has to return a string with the type of triangle.
// For example:

// typeOfTriangle(2,2,1) --> "Isosceles"

// My Solution
var typeOfTriangle = function (a, b, c) {
  if ([...arguments].some((el) => !Number.isInteger(el)) || a + b <= c || a + c <= b || b + c <= a)
    return 'Not a valid triangle';
  if (a === b && b === c) return 'Equilateral';
  if (a == b || b === c || a === c) return 'Isosceles';
  return 'Scalene';
};
