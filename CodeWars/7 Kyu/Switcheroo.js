// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


// My Solution
function switcheroo(x){
  return x.replace(/[ab]/g, (el) => el === "a" ? "b" : "a")
}