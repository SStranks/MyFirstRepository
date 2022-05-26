// Task
// Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

// Example
// For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.

// After day 1 --> 100
// After night 1 --> 90
// After day 2 --> 190
// After night 2 --> 180
// After day 3 --> 280
// After night 3 --> 270
// After day 4 --> 370
// After night 4 --> 360
// After day 5 --> 460
// After night 5 --> 450
// After day 6 --> 550
// After night 6 --> 540
// After day 7 --> 640
// After night 7 --> 630
// After day 8 --> 730
// After night 8 --> 720
// After day 9 --> 820
// After night 9 --> 810
// After day 10 --> 910
// For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.

// Because the plant reach to the desired height at day 1(10 meters).

// After day 1 --> 10
// Input/Output
// [input] integer upSpeed

// A positive integer representing the daily growth.

// Constraints: 5 ≤ upSpeed ≤ 100.

// [input] integer downSpeed

// A positive integer representing the nightly decline.

// Constraints: 2 ≤ downSpeed < upSpeed.

// [input] integer desiredHeight

// A positive integer representing the threshold.

// Constraints: 4 ≤ desiredHeight ≤ 1000.

// [output] an integer

// The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count).

// My Solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  while (height < desiredHeight) {
    days % 2 === 0 ? (height += upSpeed) : (height -= downSpeed);
    days++;
  }
  return Math.ceil(days / 2);
}

// Other Solutions
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var i = 1;
  for (var height = upSpeed; height < desiredHeight; height = height + upSpeed) {
    height = height - downSpeed;
    i++;
  }
  return i;
}

const growingPlant = (u, d, h) => Math.max(Math.ceil((h - u) / (u - d)), 0) + 1;
