function findDifference(a, b) {
  // Calculate the 'volume' of each array; multiply all elements together.
  // Calculate the difference between the results of each array.
  
  // Reduce Function 
  let getVolume = (total, curVal) => total * curVal;
  
  // Calculate volumes
  a = a.reduce(getVolume, 1);
  b = b.reduce(getVolume, 1);
  
  // Calculate difference
  return Math.abs(a - b);
}