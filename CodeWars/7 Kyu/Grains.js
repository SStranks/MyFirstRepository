// Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.

// There are 64 squares on a chessboard.

// #Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...

// Write a program that shows how many grains were on each square.


// My Solution
function square(number){
  //   xn = ar^(n-1) // a = first term, r = common ratio
    return Math.pow(2, number - 1)
  }