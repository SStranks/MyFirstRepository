// Given an integer, if the length of it's digits is a perfect square, return a square block of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

// Examples:

// 1212 returns:

// 12
// 12

// Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

// 123123123 returns:

// 123
// 123
// 123

// Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.

// My Solution
function squareIt(int) {
  const str = int.toString();
  if (Math.sqrt(str.length) % 1 !== 0) return 'Not a perfect square!';
  const regex = new RegExp(`.{${Math.sqrt(str.length)}}`, 'g');
  return str.match(regex).join('\n');
}
