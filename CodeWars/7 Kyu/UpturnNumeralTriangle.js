// Task
// Raj has got into a problem, he solved the triangle pattern but stuck in the codes of "inverse triangle". Help him with the codes and remember to get the output as per given in examples below.

// Rules:
// Take input as 'n' which is always a natural number
// Space between each digit
// No space after the rows end
// Examples
// pattern(5)

// 1 1 1 1 1
//  2 2 2 2
//   3 3 3
//    4 4
//     5
    
    
// pattern(9)

//   1 1 1 1 1 1 1 1 1
//    2 2 2 2 2 2 2 2
//     3 3 3 3 3 3 3
//      4 4 4 4 4 4
//       5 5 5 5 5
//        6 6 6 6
//         7 7 7
//          8 8
//           9
        
        
// pattern(16)

// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//  2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
//   3 3 3 3 3 3 3 3 3 3 3 3 3 3
//    4 4 4 4 4 4 4 4 4 4 4 4 4
//     5 5 5 5 5 5 5 5 5 5 5 5
//      6 6 6 6 6 6 6 6 6 6 6
//       7 7 7 7 7 7 7 7 7 7
//        8 8 8 8 8 8 8 8 8
//         9 9 9 9 9 9 9 9
//          0 0 0 0 0 0 0
//           1 1 1 1 1 1
//            2 2 2 2 2
//             3 3 3 3
//              4 4 4
//               5 5
//                6


// My Solution
function pattern(n){
  let output = "";
  let str;
  const m = n;
  for (let i = 1; i < m + 1; i++){
    str = i % 10;
    output += `${" ".repeat(i)}`
    output += (str.toString() + " ").repeat(n).trim()
    if (n !== 1) output += "\n"
    n--
  }
  return output;
}