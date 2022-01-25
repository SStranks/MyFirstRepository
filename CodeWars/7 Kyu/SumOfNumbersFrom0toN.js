
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0



// My Solution
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count < 0) return `${count}<0`;
    if (count === 0) return "0=0"
    let result = "";
    for (let i = 0; i <= count; i++){
      result += `${i}+`
    }
    return `${result.slice(0, -1)} = ${(count + 1) / 2 * count}`
  };

  return SequenceSum;

})();

// Other Solutions
class SequenceSum {
  static showSequence(n) {
    return n < 0
      ? `${n}<0`
      : `${Array.from({length: n+1}, (v, k) => k).join('+')}${n?' = ':'='}${n*(n+1)/2}`;
  }
}