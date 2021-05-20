'use strict';

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
*/

// Parent Class
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed)
  };
  
  brake() {
    this.speed -= 5;
    console.log(this.speed)
  };
};

// Child Class
class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }

  chargeBattery(chargeTo) {
    this.charge = chargeTo;
  };

  accelerate() {
    this.speed += 20;
    this.charge -= this.charge / 100
    console.log(`Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`)
  };
};

const rivian = new EV('Rivian', 120, 23);
console.log(rivian)