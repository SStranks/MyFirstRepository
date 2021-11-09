const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // Multiply the fuelLeft by miles per gallon to determine remaining mileage; compare against miles to pump
  return mpg * fuelLeft < distanceToPump ? false : true;
};