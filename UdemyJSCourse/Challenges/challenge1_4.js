'use strict'

// Challenge 4
// Do not use an If/Else Statement - Use Ternary Operator!

let billValue = 275;
// let billValue = 40;
// let billValue = 430;

const tipValue = (billValue >= 50 && billValue <=300) ? billValue * 0.15 : billValue * 0.2;
const finalValue = billValue + tipValue;

console.log(`The bill was ${billValue}, the tip was ${tipValue}, and the total value
${finalValue}`);

