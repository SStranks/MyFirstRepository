// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

// My Solution
function getAges(sum, difference) {
  if (sum < 0 || difference < 0) return null;
  const result = [sum / 2 - difference / 2, sum - (sum / 2 - difference / 2)].sort((a, b) => b - a);
  return result[0] >= 0 && result[1] >= 0 ? result : null;
}

// Other Solutions
const getAges = (sum, difference) =>
  sum < 0 || difference < 0 || sum < difference
    ? null
    : [(sum + difference) / 2, (sum - difference) / 2];
