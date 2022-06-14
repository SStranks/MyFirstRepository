// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

// My Solution
function capMe(names) {
  return names.map((el) => `${el[0].toUpperCase()}${el.slice(1).toLowerCase()}`);
}

// Other Solutions
