'use strict'

const data1 = [12, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // const outputString = [];
  let outputString = '';
  for (let i = 0; i < arr.length; i++) {
    outputString += `...${arr[i]}°c in ${i + 1} days`;
  }

  console.log(outputString);
}

// Call function
printForecast(data1);
printForecast(data2);