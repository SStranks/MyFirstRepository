// Task
// Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

// Return a nested array or a tuple depending on the language:

// The first sequence being only the 1s and 0s from the original sequence.
// The second sequence being the indexes of the elements greater than 1 in the original sequence.
// Examples
// [ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]

// My Solution
function binaryCleaner(arr) {
  const idxArr = arr.reduce((acc, cur, i) => {
    if (cur > 1) return acc.push(i) && acc;
    return acc;
  }, []);
  return [arr.filter((el) => el < 2), idxArr];
}

// Other Solutions
function binaryCleaner(a) {
  let r = [[], []];
  a.map((x, i) => (x < 2 ? r[0].push(x) : r[1].push(i)));
  return r;
}
