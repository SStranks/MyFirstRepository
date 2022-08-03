// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!

// My Solution
function testit(act, s) {
  return act.reduce((acc, cur, i) => {
    if (cur === 'run') {
      return acc + (s[i] === '_' ? '_' : '/');
    } else {
      return acc + (s[i] === '|' ? '|' : 'x');
    }
  }, '');
}
