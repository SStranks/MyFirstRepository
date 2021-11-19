// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// My Solution
function getSize(width, height, depth) {
  console.log(width, height, depth)
  return [(width * height * 2) + (width * depth * 2) + (height * depth * 2), width * height * depth];
}
