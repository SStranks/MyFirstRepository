// DESCRIPTION:
// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.

// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:

// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.

// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

// var group = {
//     A: 20,
//     B: 15,
//     C: 10
// }

// splitTheBill(group) // returns {A: 5, B: 0, C: -5}

// My Solution
function splitTheBill(x) {
  const returnObj = x;
  const mean =
    Object.values(returnObj).reduce((acc, cur) => acc + cur, 0) / Object.values(returnObj).length;
  for (const person in returnObj) {
    returnObj[person] = Math.round((returnObj[person] - mean) * 100) / 100;
  }
  return returnObj;
}

// Other Solutions
const splitTheBill = (x) => {
  let vals = Object.values(x),
    avg = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => ((y[v] = +(x[v] - avg).toFixed(2)), y), {});
};
