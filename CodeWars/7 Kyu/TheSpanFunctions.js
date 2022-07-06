// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

// For example,

// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }

// var arr = [2,4,6,1,8,10];

// // This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]
// Your task is to...wait for it... write your own span function !!!

// My Solution
function span(arr, predicate) {
  const index = arr.findIndex((el) => !predicate(el));
  return index === -1
    ? [arr, []]
    : index === 0
    ? [[], arr]
    : [arr.slice(0, index), arr.slice(index)];
}

// Other Solutions
const span = (arr, predicate, idx) =>
  arr.reduce((pre, val) => ((idx = idx || +!predicate(val)), pre[idx].push(val), pre), [[], []]);
