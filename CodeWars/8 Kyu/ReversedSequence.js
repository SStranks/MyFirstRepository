// Build a function that returns an array of integers from n to 1 where n>0.

// My Solution
const reverseSeq = n => {
  let retVal = [];
  for (let i = n; i > 0; i--) {
    retVal.push(i);
  }
  return retVal;
};

// Other Solutions
const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};

const reverseSeq = length => Array.from({length}, () => length--)