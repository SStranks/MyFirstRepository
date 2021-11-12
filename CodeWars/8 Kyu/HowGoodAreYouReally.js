// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


// My Solution
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return (classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length) < yourPoints;
}

// Other Solutions
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}