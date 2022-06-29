// This is related to my other Kata about cats and dogs.

// Kata Task
// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My Solution
var ownedCatAndDog = function (catYears, dogYears) {
  const cat = catYears < 15 ? 0 : catYears < 24 ? 1 : Math.floor((catYears - 24) / 4) + 2;
  const dog = dogYears < 15 ? 0 : dogYears < 24 ? 1 : Math.floor((dogYears - 24) / 5) + 2;
  return [cat, dog];
};

// Other Solutions
const ownedCatAndDog = (...pets) =>
  pets.map((petYears, i) => {
    if (petYears < 15) return 0;
    if (petYears < 24) return 1;

    return 2 + Math.floor((petYears - 24) / (4 + i));
  });
