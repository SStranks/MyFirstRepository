// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.


// My Solution
function tripleTrouble(one, two, three){
  let str = "";
  for (let i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i];
  }
  return str;
}

// Other Solutions
const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");