// Task:
// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

// Examples:
// grid(4)

// a b c d
// b c d e
// c d e f
// d e f g
// grid(10)

// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s
// Notes:
// After "z" comes "a"
// If function receive N < 0 should return:
// null

// My Solution
function grid(N) {
  if (N < 0) return null;
  let str = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      str += alphabet[(i + j) % 26];
      str += ' ';
    }
    str = str.trim();
    str += '\n';
  }
  return str.slice(0, -1);
}

// Other Solutions
