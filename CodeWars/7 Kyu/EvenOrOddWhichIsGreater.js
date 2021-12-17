// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"


// My Solution
function evenOrOdd(str) {
  let nums = {even: 0, odd: 0};
  str.split("").map((el) => Number(el) % 2 === 0 ? nums["even"] = nums["even"] + Number(el) : nums["odd"] = nums["odd"] + Number(el));
  if (nums["even"] > nums["odd"]){
    return "Even is greater than Odd";
  } else if (nums["even"] < nums["odd"]){
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same"
  }
}