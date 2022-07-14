// Alternating Among Three Values
// Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

// What is the most efficient way to cycle among three values? Write a function f so that it satisfies

//   f(a) = b
//   f(b) = c
//   f(c) = a
// EXAMPLE
//   f( 3, { a:3, b:4, c:5 } ) => 4

// My Solution
function f(x, cc) {
  for (const [key, value] of Object.entries(cc)) {
    if (value === x) return cc[String.fromCharCode(((key.charCodeAt(0) + 1 - 97) % 3) + 97)];
  }
}

// Other Solutions
const f = (x, cc) => ((arr) => arr[(arr.indexOf(x) + 1) % arr.length])(Object.values(cc));
