// Egg Talk.

// Insert an "egg" after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.

// eg:

// hello => heggeleggleggo

// eggs => egegggeggsegg

// FUN KATA => FeggUNegg KeggATeggA

// ////

// This Kata is designed for beginners to practice the basics of regular expressions. With this in mind a little bit of commenting in your solution could be very useful.


// My Solution
function heggeleggleggo(word){
  return word.replace(/([^aeiou\s])/gi, "$1egg")
}