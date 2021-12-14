// Write the definition of the function "say" such that calling this:

// say("Hello")("World")
// returns "Hello World"


// My Solution
var say = function(string1) {
  return function(y) {
    return `${string1} ${y}`
  }
}