// There's a built-in function called repeat on strings. It repeats the given string N times.

// Example:

// 'a'.repeat(3) === 'aaa'
// 'around the world '.repeat(2) === 'around the world around the world'
// It can be very useful for things like aligning text

// console.log('Root node')
// console.log(' '.repeat(4) + 'Sub-tree')
// console.log(' '.repeat(8) + 'Deeper sub-tree')
// Now imagine this function wasn't built-in. Can you implement it yourself?

// My Solution
String.prototype.repeat = function (count) {
  let str = '';
  for (let i = 0; i < count; i++) {
    str += this;
  }
  return str;
};

// Other Solutions
String.prototype.repeat = function (count) {
  return new Array(count + 1).join(this);
};
