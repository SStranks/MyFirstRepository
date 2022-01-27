// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 consecutive digits.

// In the following 10 digit number:

// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.


// My Solution
function solution(digits){
  let highNum = 0
  for (let i = 0; i < digits.length - 4; i++){
    const num = digits.slice(i, i + 5)
    if (Number(num) > highNum) highNum = Number(num)
  }
  return highNum
}

// Other Solutions
function solution(digits){
  let answer = 0;
  for (let i = 0; i < digits.length; i++){
    let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
    if(Number(number) > answer){       //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}