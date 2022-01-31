// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.


// My Solution
function capitalize(s){
  const s1 = s.split("").map((el, i) => i % 2 === 0 ? el.toUpperCase() : el).join("");
  const s2 = s.split("").map((el, i) => i % 2 !== 0 ? el.toUpperCase() : el).join("");
  return [s1, s2];
};

// Other Solutions
function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};