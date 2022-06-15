// Agent 47, you have a new task! Among citizens of the city X are hidden 2 dangerous criminal twins. Your task is to identify them and eliminate!

// Given an array of integers, your task is to find two same numbers and return one of them, for example in array [2, 3, 6, 34, 7, 8, 2] answer is 2.

// If there are no twins in the city - return None or the equivalent in the language that you are using.

// My Solution
function elimination(arr) {
  const sortArr = arr.slice().sort();
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] === sortArr[i + 1]) return sortArr[i];
  }
  return null;
}

// Other Solution
const elimination = (ar) => ar.filter((e, i) => i !== ar.lastIndexOf(e))[0] || null;
