// You're given a procedure / method that executes a passed action n times, but it does so in a purely sequential manner. If you inspect the sample tests, you'll find that the action takes about 1 second to complete, and this action is repeated 20 times which results in a timeout.

// Find a way to execute the action n times in parallel, such that the sample tests complete under the 12 second time limit imposed by Codewars. The submission tests will also test for similar scenarios.

// My Solution
function execute(action, nTimes) {
  const arr = [];
  for (let i = 0; i < nTimes; i++) {
    arr.push((async () => await action())());
  }
  return Promise.all(arr);
}

// Other Solutions
async function execute(action, nTimes) {
  const arr = [];
  for (let i = 0; i < nTimes; i++) {
    arr.push(action());
  }
  await Promise.all(arr);
}
