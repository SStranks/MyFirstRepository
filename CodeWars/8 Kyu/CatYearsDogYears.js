// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


// My Solution
const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears, dogYears;
  switch (humanYears) {
      case 1: {catYears = dogYears = 15} break;
      case 2: {catYears = dogYears = 24} break;
      default: {
        catYears = 24 + ((humanYears - 2) * 4)
        dogYears = 24 + ((humanYears - 2) * 5)
      }
  }
  return [humanYears, catYears, dogYears];
}

// Other Solutions
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];