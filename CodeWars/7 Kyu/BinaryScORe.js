// Objective
// Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

// Write a function that takes n and finds it's scORe.

// n	scORe n
// 0	0
// 1	1
// 49	63
// 1000000	1048575

// My SOlution
function score(n) {
  let j = 0,
    k = 0;
  while (j <= n) {
    j = Math.pow(2, k);
    k++;
  }
  return j - 1;
}

// ** Times Out **
// function score(n){
//   let score = 0;
//   for (let i = score; i <= n; i++){
//     console.log(score, i)
//     score = score | i
//   }
//   return score
// }

// Other Solutions
function score(n) {
  return n > 0 ? parseInt(new Number(n).toString(2).replace(/0/g, 1), 2) : 0;
}

const score = (n) => (1 << (Math.log2(n) + 1)) - 1;
