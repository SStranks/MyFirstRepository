'use strict'

// Challenge 3
let dolphinScore1 = 95;
let dolphinScore2 = 95;
let dolphinScore3 = 95;
let koalaScore1 = 95;
let koalaScore2 = 95;
let koalaScore3 = 95;

let dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
let koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

if (dolphinAvg > koalaAvg) {
  if (dolphinAvg >= 100) {
    console.log(`Dolphins win the trophy, with an average score of ${dolphinAvg} points!`);
  } else {
    console.log(`Dolphins win the match, but not the trophy, with ${dolphinAvg} points!`);
  }
} else if (koalaAvg > dolphinAvg) {
  if (koalaAvg >= 100) {
    console.log(`Koalas win the trophy, with an average score of ${koalaAvg} points!`);
  } else {
    console.log(`Koalas win the match, but not the trophy, with ${koalaAvg} points!`);    
  }
} else {
  if (dolphinAvg === koalaAvg && dolphinAvg >= 100) {
    console.log(`A draw! Both teams have the same average score of ${dolphinAvg}!`);
  } else {
    console.log(`${dolphinAvg} points each, a draw! But no one wins the trophy - 100 points required!`);
  }
};

