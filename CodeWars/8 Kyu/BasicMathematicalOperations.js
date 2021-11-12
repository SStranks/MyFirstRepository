// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// My Solution
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+": return value1 + value2;
    case "-": return value1 - value2;
    case "*": return value1 * value2;
    case "/": return value1 / value2;
  }
}

// Other Solutions: DO NOT USE EVAL - SECURITY RISK FOR CODE INJECTION.
function basicOp(o, a, b) {
  return eval(a+o+b);
}