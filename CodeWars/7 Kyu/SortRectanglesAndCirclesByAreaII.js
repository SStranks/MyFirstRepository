// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

// My Solution
function sortByArea(array) {
  return array
    .map((el, i) => {
      if (Array.isArray(el)) return [el[0] * el[1], el];
      return [Math.PI * el ** 2, el];
    })
    .sort((a, b) => a[0] - b[0])
    .map((el) => el[1]);
}

// Other Solutions
const sortByArea = (array) =>
  ((fn) => [...array].sort((a, b) => fn(a) - fn(b)))(
    (val) => val[0] * val[1] || val ** 2 * Math.PI
  );

// Other Solutions
function area(shape) {
  if (typeof shape === 'object') return shape[0] * shape[1];
  else return Math.PI * Math.pow(shape, 2);
}

function sortByArea(array) {
  return array.slice(0).sort((a, b) => area(a) - area(b));
}
