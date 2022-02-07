// Introduction and Warm-up (Highly recommended)
// Playing With Lists/Arrays Series
// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always has even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22


// My Solution
function minSum(arr) {
  const newArr = arr.sort((a, b) => b - a);
  let total = 0;
  for (let i = 0; i < newArr.length / 2; i++){
    total += newArr[i] * newArr[newArr.length - 1 - i]
  }
  return total
}

// Other Solutions
function minSum(arr) {
  return arr.sort( (a,b) => a-b )
            .slice(0, arr.length/2)
            .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
}