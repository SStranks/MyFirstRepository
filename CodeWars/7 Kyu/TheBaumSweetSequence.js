// Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:

// bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
// bn = 0 otherwise;

// for n ≥ 0.

// Define a generator function baumSweet that sequentially generates the values of this sequence.

// It will be tested for up to 1 000 000 values.

// Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ).

// My Solution
function* baumSweet() {
  for (let i = 0; i < 1000000; i++) {
    yield i
      .toString(2)
      .split('1')
      .some((el) => el.length % 2 !== 0 && i !== 0)
      ? 0
      : 1;
  }
}

// Revised Solution - Research Generators More
function* baumSweet2() {
  yield 1;
  for (let i = 1; i < 1000000; i++) {
    yield i
      .toString(2)
      .split('1')
      .some((el) => el.length % 2)
      ? 0
      : 1;
  }
}

// Other Solutions
function* baumSweet3() {
  yield 1;
  let i = 0;
  while (true) {
    ++i;
    yield i
      .toString(2)
      .split(/1/g)
      .some(($) => $.length % 2)
      ? 0
      : 1;
  }
}
