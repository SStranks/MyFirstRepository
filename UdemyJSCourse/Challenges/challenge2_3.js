'use strict'

const markMiller = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    let BMI = this.mass / this.height ** 2;
    this['BMI'] = BMI;
    return this.BMI;
  }
};

const johnSmith = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    let BMI = this.mass / this.height ** 2;
    this['BMI'] = BMI;
    return this.BMI;
  }
};

markMiller.calcBMI();
johnSmith.calcBMI();
// console.log(markMiller.BMI);
// console.log(markMiller);

if (markMiller.BMI > johnSmith.BMI) {
  console.log(`Mark's BMI (${markMiller.BMI}) is higher than John's (${johnSmith.BMI})`)
} else {
  console.log(`John's BMI (${johnSmith.BMI}) is higher than Mark's (${markMiller.BMI})`)
}


