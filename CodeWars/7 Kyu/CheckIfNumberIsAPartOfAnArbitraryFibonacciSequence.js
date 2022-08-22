// You will be given a function, isFibo, which will take three arguments: a, b and f.

// a is the first term of a Fibonacci sequence, b is the second term of this sequence ( it will always be bigger than or equal to a and they'll be both always positive, so don't worry about pesky input checking ) and f is a number which you'll need to check whether or not is a part of this Fibonacci sequence.

// Good luck, muh fellow coding warrior.

// My Solution
function isFibo(a, b, f) {
  let idx0 = a;
  let idx1 = b;
  let temp;
  while (idx0 + idx1 <= f) {
    if (idx0 + idx1 === f) return true;
    temp = idx0;
    idx0 = idx1;
    idx1 += temp;
  }
  return false;
}

// Other Solutions
function isFibo(a, b, f) {
  while (a < f) {
    [a, b] = [b, a + b];
  }
  return a == f;
}
