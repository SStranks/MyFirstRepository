// Description:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Only capital characters can and will participate a battle.
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//   battle("ONE", "TWO"); // => "TWO"`
//   battle("ONE", "NEO"); // => "Tie!"


// My Solution
function battle(x, y) {
  function process(word){
    return word.split("").map((el) => el === el.toUpperCase() ? el.charCodeAt(0) - 64 : 0).reduce((acc, cur) => acc + cur, 0)
  }
  const a = process(x);
  const b = process(y);
  return a > b ? x : (a < b ? y : "Tie!")
}

// Other Solutions
const score = s => [...s].reduce((n, c) => n + c.charCodeAt(0) - 64, 0)
function battle(x, y) {
  const a = score(x)
  const b = score(y)
  return a > b ? x : a < b ? y : "Tie!"
}