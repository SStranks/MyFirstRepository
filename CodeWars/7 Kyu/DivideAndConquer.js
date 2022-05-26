// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

// My Solution
function divCon(x) {
  return x.reduce((acc, cur) => {
    return typeof cur === 'number' ? acc + cur : acc - cur;
  }, 0);
}

// Other Solutions
