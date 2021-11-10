// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Hint: Don't forget to check for bad values like null/undefined

// My Solution
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, cur) => acc + (cur || 0), 0);
}

// Other Solution
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}



