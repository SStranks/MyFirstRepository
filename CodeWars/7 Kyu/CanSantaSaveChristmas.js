// Can Santa save Christmas?
// Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

// But he has only 24 hours left. Can he do it?

// Your Task:
// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

// My Solution
function determineTime(durations) {
  let time = 0;
  durations.forEach((el) => {
    const values = el.split(':');
    time += parseInt(values[0]) * 10000;
    time += parseInt(values[1]) * 100;
    time += parseInt(values[2]);
  });
  return time <= 240000;
}

// Other Solution
const determineTime = (durations) =>
  durations
    .map((val) => val.split(`:`))
    .reduce((pre, [h, m, s]) => pre + h * 3600 + m * 60 + +s, 0) <= 8.64e4;
