// Description:
// Count the number of exclamation marks and question marks, return the product.

// Examples
// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20

// My Solution
function product(string) {
  return (string.match(/!/g) || []).length * (string.match(/\?/g) || []).length;
}

// Other Solutions
function product(s) {
  excs = s.split('!').length - 1;
  ques = s.split('?').length - 1;
  return excs * ques;
}
