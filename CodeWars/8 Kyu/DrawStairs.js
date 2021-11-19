// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I


// My Solution
function drawStairs(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "I\n".padStart(i + 2, " ")
  }
  return str.trimEnd();
}

// Other Solution
const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");