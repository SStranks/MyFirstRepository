// source: imgur.com
// A History Lesson
// The Pony Express was a mail service operating in the US in 1859-60.

// Pony Express
// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

// How it worked
// There were a number of stations, where:

// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

// NOTE: Each rider travels as far as he can, but never more than 100 miles.

// My Solution
function riders(stations) {
  return stations.reduce(
    (acc, cur, i) => {
      acc[0] += cur;
      if (acc[0] > 100) {
        acc[0] = cur;
        acc[1] += 1;
        return acc;
      }
      return acc;
    },
    [0, 1]
  )[1];
}

// Other Solutions
const riders = (stations) =>
  stations.reduce(
    ([dist, rid], val) => (val + dist > 100 ? [val, ++rid] : [dist + val, rid]),
    [0, 1]
  )[1];

function riders(stations) {
  let worker = 1,
    sum = 0;
  for (let i = 0; i < stations.length; i++) {
    sum += stations[i];
    if (sum > 100) {
      sum = stations[i];
      worker += 1;
    }
  }
  return worker;
}
