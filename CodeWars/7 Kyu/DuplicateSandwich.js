// Task
// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
// All used elements will be primitive.

// My Solution
function duplicateSandwich(a) {
  for (let i = 0; i < a.length; i++) {
    const firstIdx = a.indexOf(a[i]);
    const lastIdx = a.lastIndexOf(a[i]);
    if (firstIdx !== lastIdx) return a.slice(firstIdx + 1, lastIdx);
  }
}

// Other Solutions
const duplicateSandwich = (a) =>
  ((start, end) => a.slice(++start, end))(
    ...[...a].reduce(
      (pre, val, idx) => (a.indexOf(val) === a.lastIndexOf(val) ? pre : [...pre, idx]),
      []
    )
  );
