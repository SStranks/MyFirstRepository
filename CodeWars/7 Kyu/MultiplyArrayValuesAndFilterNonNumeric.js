// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

// My Solution
function multiplyAndFilter(array, multiplier) {
  return array.reduce((acc, cur) => {
    return typeof cur === 'number' && acc.push(cur * multiplier), acc;
  }, []);
}
