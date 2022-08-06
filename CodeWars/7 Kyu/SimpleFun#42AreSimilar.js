// My Solution
function areSimilar(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (count) return false;
      for (let j = i + 1; j < A.length; j++) {
        if (A[j] === B[i] && B[j] === A[i]) {
          const tmp = A[i];
          A[i] = A[j];
          A[j] = tmp;
          count++;
          break;
        }
      }
      if (!count) return false;
    }
  }
  return count < 2;
}

// Other Solutions
const areSimilar = (A, B) =>
  A.filter((val, idx) => val !== B[idx]).length < 3 && `${A.sort()}` === `${B.sort()}`;
