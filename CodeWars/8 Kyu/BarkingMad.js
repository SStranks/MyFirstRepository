// Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

// snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Use method prototypes to enable all Dogs to bark.


// My Solution
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");
snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");
scoobydoo.bark = function() {
  return "Woof";
};

// Other Solutions
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");