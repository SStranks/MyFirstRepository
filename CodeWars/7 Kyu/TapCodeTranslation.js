// Tap Code Translation
// Tap code is a way to communicate using a series of taps and pauses for each letter. In this kata, we will use dots . for the taps and whitespaces for the pauses.

// The number of taps needed for each letter matches its coordinates in the following polybius square (note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

//    1  2  3  4  5
// 1  A  B C\K D  E
// 2  F  G  H  I  J
// 3  L  M  N  O  P
// 4  Q  R  S  T  U
// 5  V  W  X  Y  Z
// Input:
// A lowercase string of a single word (no whitespaces or punctuation, only letters).

// Output:
// The encoded string as taps and pauses.

// Examples
// text = "dot"
//   "D" = (1, 4) = ". ...."
//   "O" = (3, 4) = "... ...."
//   "T" = (4, 4) = ".... ...."

// output: ". .... ... .... .... ...."

// "example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
// "more"    -> "... .. ... .... .... .. . ....."

// My Solution
function tapCodeTranslation(text) {
  const dict = {
    a: [1, 1],
    b: [1, 2],
    c: [1, 3],
    d: [1, 4],
    e: [1, 5],
    f: [2, 1],
    g: [2, 2],
    h: [2, 3],
    i: [2, 4],
    j: [2, 5],
    k: [1, 3],
    l: [3, 1],
    m: [3, 2],
    n: [3, 3],
    o: [3, 4],
    p: [3, 5],
    q: [4, 1],
    r: [4, 2],
    s: [4, 3],
    t: [4, 4],
    u: [4, 5],
    v: [5, 1],
    w: [5, 2],
    x: [5, 3],
    y: [5, 4],
    z: [5, 5],
  };
  return [...text].map((el) => `${'.'.repeat(dict[el][0])} ${'.'.repeat(dict[el][1])}`).join(' ');
}

// Other Solutions
const tapCodeTranslation = (s) =>
  ((str) =>
    [...s.replace(/k/g, `c`)]
      .map(
        (val) =>
          `${`.`.repeat(((str.indexOf(val) / 5) ^ 0) + 1)} ${`.`.repeat(
            (str.indexOf(val) % 5) + 1
          )}`
      )
      .join(` `))(`abcdefghijlmnopqrstuvwxyz`);
