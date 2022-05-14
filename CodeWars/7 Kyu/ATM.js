// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// My Solution
function solve(n) {
  if (n % 10 !== 0) return -1;
  let count = 0;
  let notes = [10, 20, 50, 100, 200, 500];
  while (n > 0) {
    while (n >= notes[notes.length - 1]) {
      n = n - notes[notes.length - 1];
      count++;
    }
    notes.pop();
  }
  return count;
}

// Other Solutions
function solve(n) {
  if (n % 10) return -1;
  return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
    let ans = (n / v) | 0;
    n %= v;
    return s + ans;
  }, 0);
}

function solve(n) {
  let counter = 0;
  [500, 200, 100, 50, 20, 10].forEach((item) => {
    counter += Math.floor(n / item);
    n = n % item;
  });
  return n ? -1 : counter;
}
