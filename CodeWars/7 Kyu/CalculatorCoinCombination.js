// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

// My Solution
function coinCombo(cents) {
  function reducer(denom) {
    const count = Math.floor(cents / denom);
    cents -= count && count * denom;
    return count;
  }
  return [reducer(25), reducer(10), reducer(5), reducer(1)].reverse();
}

// Other Solutions
function coinCombo(cents) {
  let coins = [1, 5, 10, 25];
  let combo = [0, 0, 0, 0];
  for (let i = 3; i >= 0; i--) {
    combo[i] = Math.floor(cents / coins[i]);
    cents -= combo[i] * coins[i];
  }
  return combo;
}
