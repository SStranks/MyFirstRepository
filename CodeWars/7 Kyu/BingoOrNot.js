// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// My Solution
function bingo(a) {
  const bingo = [2, 7, 14, 15, 9];
  return bingo.every((el) => a.includes(el)) ? 'WIN' : 'LOSE';
}

// Other Solutions
function bingo(a) {
  return [2, 9, 14, 7, 15].every((x) => a.includes(x)) ? 'WIN' : 'LOSE';
}
