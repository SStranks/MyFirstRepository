// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

// My Solution
function spacey(array){
  return array.map((el, i, arr) => arr.slice(0, i).join("") + el)
}

// Other Solutions
function spacey(array){
  let string = ''
  return array.map( (e) => string += e )
}

spacey = (a, s = "") => a.map(a => s += a)