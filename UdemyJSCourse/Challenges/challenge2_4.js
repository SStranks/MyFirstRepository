'use strict'

const billsArr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArr = [];
const totalArr = [];

const calcTip = function (billValue) {
  let tipValue = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tipValue;
};

for (let i = 0; i < billsArr.length; i++) {
  tipsArr.push(calcTip(billsArr[i]));
  totalArr.push(billsArr[i] + tipsArr[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum / arr.length;  
}

// Outputs
console.log(billsArr, tipsArr, totalArr);
console.log(calcAverage(totalArr));