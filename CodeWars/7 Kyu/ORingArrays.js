// It started as a discussion with a friend, who didn't fully grasp some way of setting defaults, but I thought the idea was cool enough for a beginner kata: binary OR each matching element of two given arrays (or lists, if you do it in Python; vectors in c++) of integers and give the resulting ORed array [starts to sound like a tonguetwister, doesn't it?].

// If one array is shorter than the other, use the optional third parameter (defaulted to 0) to OR the unmatched elements.

// For example:

// orArrays([1,2,3],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[4,5,6]) === [5,7,7]
// orArrays([1,2,3],[1,2]) === [1,2,3]
// orArrays([1,2],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[1,2,3],3) === [1,2,3]

// My Solution
function orArrays(arr1, arr2, def) {
  if (arr1.length !== arr2.length) {
    const len = Math.max(arr1.length, arr2.length);
    const newArr = [];
    for (let i = 0; i < len; i++) {
      newArr.push((arr1[i] || def) | (arr2[i] || def));
    }
    return newArr;
  }
  return arr1.map((el, i) => el | arr2[i]);
}

// Other Solutions
const orArrays = (arr1, arr2, def = 0) => [
  ...arr1.map((val) => val | (arr2[0] !== undefined ? arr2.shift() : def)),
  ...arr2.map((val) => val | def),
];
