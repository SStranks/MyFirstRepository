// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.
// var websites = []


// My Solution
let websites = new Array(1000).fill("codewars", 0, 999);

// Other Solutions
var websites = [];
while (websites.length < 1000) websites.push("codewars")