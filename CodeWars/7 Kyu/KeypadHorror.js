// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n

// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n

// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only


// My Solution
const nums = {1: 7, 2: 8, 3: 9, 7: 1, 8: 2, 9: 3}
function computerToPhone(numbers) {
  return numbers.replace(/[1-37-9]/gi, function(m){ return nums[m]});
}

// Other Solutions
function computerToPhone(numbers) {
  return numbers.split('').map(function(d) {return "0789456123"[d]; }).join('');
}

function computerToPhone(numbers) {
  var map = [
    0,
    7, 8, 9,
    4, 5, 6,
    1, 2, 3,
  ]
  
  return numbers.replace(/\d/g, function(d) { return map[d] })
}

function computerToPhone($){
  const comp = "0789456123", phone = "0123456789"
  return $.replace(/\d/g, x=> phone[comp.indexOf(x)])
}