'use strict'

let billsArr = [125, 555, 44];

const calcTip = function (billValue) {
  let tipValue = billValue >= 50 && billValue <=300 ? billValue * 0.15 : billValue * 0.2;
  return tipValue;
};

const tipsArr = [calcTip(billsArr[0]), calcTip(billsArr[1]), calcTip(billsArr[2])];
// console.log(tipsArr);
const totalArr = [(billsArr[0] + tipsArr[0]), (billsArr[1] + tipsArr[1]), (billsArr[2] + tipsArr[2])];
console.log(totalArr);


