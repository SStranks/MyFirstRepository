function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // TASK: Return an array containing all of the strings in the input array except those that match strings in geese
  
  // Some elements may be repeated, therefore can't reduce Geese array to narrow future checking
  // Use .filter to iterate over the input array and check against Geese
  return filteredBirds = birds.filter((bird) => !geese.includes(bird));
};