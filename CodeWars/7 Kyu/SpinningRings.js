// Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer ring spins counter clockwise (increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment. How many moves will it take before both rings show the same number at the top again?

// The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are integers >= 1.

// e.g. if innerMax is 2 and outerMax is 3 then after
// 1 move: inner = 2, outer = 1
// 2 moves: inner = 1, outer = 2
// 3 moves: inner = 0, outer = 3
// 4 moves: inner = 2, outer = 0
// 5 moves: inner = 1, outer = 1
// Therefore it takes 5 moves for the two rings to reach the same number
// Therefore spinningRings(2, 3) = 5
// e.g. if innerMax is 3 and outerMax is 2 then after
// 1 move: inner = 3, outer = 1
// 2 moves: inner = 2, outer = 2
// Therefore it takes 2 moves for the two rings to reach the same number
// spinningRings(3, 2) = 2
// for a bigger challenge, check out the Performance Version of this kata by @Voile


// My Solutions
function spinningRings(innerMax, outerMax) {
  let i = 0, a = 0, b = 0;
  do {
    a === 0 ? a = innerMax : a -= 1;
    b === outerMax ? b = 0 : b += 1;
    i++;
    if (a === b) return i; 
  } while (a !== b && i !== 0);
};

// Other Solutions
function spinningRings(m, n) {
  var [a, b, result] = [0, 0, 0];
  do {
    result++;
    a = (a + m) % (m + 1);
    b = (b + 1) % (n + 1);
  } while (a !== b);
  return result;
}