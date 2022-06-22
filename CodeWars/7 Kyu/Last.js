// Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

// My Solution
function last(list) {
  if (Array.isArray(arguments[0])) return list[list.length - 1];
  const last = [...arguments][arguments.length - 1];
  return last.length === 1 ? last : typeof last === 'string' ? last[last.length - 1] : last;
}

// Other Solutions
function last(list) {
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

const last = (...list) => ((val) => val[val.length - 1] || val)(list[list.length - 1]);
