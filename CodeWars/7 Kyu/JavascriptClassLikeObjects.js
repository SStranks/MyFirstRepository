// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be:

// var dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

// My Solution
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
