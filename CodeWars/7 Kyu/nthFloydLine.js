// The Floyd's triangle is a right-angled triangular array of natural numbers listing them in order, in lines of increasing length, so a Floyds triangle of size 6 looks like:

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14 15
// 16 17 18 19 20 21
//     ...
// In this kata you're given a number, and expected to return the line number it falls in, in the Floyd's triangle

// Examples (input -> output)
// 3 -> 2 (i.e the number `3` falls in line 2 of the triangle)
// 17 -> 6
// 22 -> 7
// 499502 -> 1000
// Constraints
// 1 <= n <= 109

// My Solution
function nthFloyd(n) {
  return Math.ceil((-1 + Math.sqrt(1 + 8 * n)) / 2);
}
