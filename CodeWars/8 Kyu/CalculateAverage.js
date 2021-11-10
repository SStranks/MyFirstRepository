function find_average(array) {
  // TASK: Write a function which calculates the average of the numbers in a given list.
  // Guard Clause for empty arrays
  if (!array.length) return 0
  
  // Add all the items in the array and divide by its length; return the average
  return array.reduce((prev, cur) => prev + cur) / array.length;
}