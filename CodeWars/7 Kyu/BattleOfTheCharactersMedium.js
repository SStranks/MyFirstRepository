// Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

// Rules
// Each character has its own power:
//   A = 1, B = 2, ... Y = 25, Z = 26
//   a = 0.5, b = 1, ... y = 12.5, z = 13
// Only alphabetical characters can and will participate in a battle.
// Only two groups to a fight.
// Group whose total power (a + B + c + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples
// "One", "Two"  -->  "Two"
// "ONE", "NEO"  -->  "Tie!"

// My Solution
function battle(x, y) {
  function points(str) {
    return [...str].reduce((acc, cur) => {
      const val = cur === cur.toUpperCase() ? cur.charCodeAt(0) - 64 : (cur.charCodeAt(0) - 96) / 2;
      return acc + val;
    }, 0);
  }
  const a = points(x);
  const b = points(y);
  return a > b ? x : b > a ? y : 'Tie!';
}

// Other Solutions
function battle(x, y) {
  const abc = (z) => z.codePointAt();
  const val = (x) =>
    [...x]
      .map((el) => (abc(el) < 91 ? abc(el) - 64 : (abc(el) - 96) / 2))
      .reduce((a, b) => a + b, 0);
  const [first, second] = [val(x), val(y)];
  return first > second ? x : first < second ? y : 'Tie!';
}
