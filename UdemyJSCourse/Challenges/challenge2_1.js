'use strict'

let dolphinScore1 = 44;
let dolphinScore2 = 23;
let dolphinScore3 = 71;
let koalaScore1 = 65;
let koalaScore2 = 54;
let koalaScore3 = 49;
// let dolphinScore1 = 85;
// let dolphinScore2 = 54;
// let dolphinScore3 = 41;
// let koalaScore1 = 23;
// let koalaScore2 = 34;
// let koalaScore3 = 27;

// let dolphinAvg = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
// let koalaAvg = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphinAvg = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
let koalaAvg = calcAverage(koalaScore1, koalaScore2, koalaScore3);

console.log(dolphinAvg);
console.log(koalaAvg);

function checkWinner (avgDolphin, avgKoala) {
  if (avgDolphin > avgKoala && (avgDolphin >= avgKoala * 2)) {
    console.log(`Dolphins win (${avgDolphin} vs. ${avgKoala})`);
  } else if (avgKoala > avgDolphin && (avgKoala >= avgDolphin * 2)) {
    console.log(`Koalas win (${avgKoala} vs. ${avgDolphin})`);
  } else {
    console.log("Neither team won - top score must be double the lower!")
  }
}

checkWinner(dolphinAvg, koalaAvg);
