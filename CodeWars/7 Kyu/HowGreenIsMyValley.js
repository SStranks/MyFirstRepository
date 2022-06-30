// Input : an array of integers.

// Output : this array, but sorted in such a way that there are two wings:

// the left wing with numbers decreasing,

// the right wing with numbers increasing.

// the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

// each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// The function is make_valley or makeValley or make-valley.

// a = [79, 35, 54, 19, 35, 25]
// make_valley(a) --> [79, 35, 25, *19*, 35, 54]
// The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
// 79..................54
//     35..........35
//         25.
//           ..19

// a = [67, 93, 100, -16, 65, 97, 92]
// make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
// The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
// 100.........................97
//     93..........
//                .........92
//         67......
//                .....65
//             -16

// a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
// make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
// The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

// a = [14,14,14,14,7,14]
// make_valley(a) => [14, 14, 14, *7*, 14, 14]

// a = [14,14,14,14,14]
// make_valley(a) => [14, 14, *14*, 14, 14]
// A counter-example:
// a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
// A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
// but the right wing [4, 4, 5, 7, 7] is much flatter than the left one
// [17, 17, 15, 14, 8].

// Summing the differences between left and right wing:
// (17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44

// Consider the following solution:
// [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
// Summing the differences between left and right wing:
// (17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
// The right wing is nearly as steep as the right one.

// My Solution
function makeValley(arr) {
  const values = arr.slice().sort((a, b) => a - b);
  const left = [];
  const right = [];
  if (values.length % 2 === 0) {
    for (let i = 0; i < values.length; i++) {
      i % 2 === 0 ? right.push(values[i]) : left.push(values[i]);
    }
  } else {
    for (let i = 0; i < values.length; i++) {
      i % 2 === 0 ? left.push(values[i]) : right.push(values[i]);
    }
  }

  return left.reverse().concat(right);
}

// Other Solutions
function makeValley(arr) {
  var leftWing = [];
  var rightWing = [];
  arr
    .sort((a, b) => b - a)
    .forEach((el, i) => (i % 2 == 0 ? leftWing.push(el) : rightWing.unshift(el)));

  return [...leftWing, ...rightWing];
}

const makeValley = (arr) => [
  ...arr.sort((a, b) => b - a).filter((_, idx) => !(idx % 2)),
  ...arr.filter((_, idx) => idx % 2).reverse(),
];

function makeValley(arr) {
  arr.sort((a, b) => b - a);
  const arr1 = [],
    arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      arr2.push(arr[i]);
    } else {
      arr1.unshift(arr[i]);
    }
  }

  return arr2.concat(arr1).reverse();
}
