// You have an array of non-negative integers. You need to calculate the difference between the 1st biggest number and the 2nd biggest number of the array.

//     diffBig2([10, 5, 2]);
// In this case, the 1st biggest number is 10 and the 2nd biggest number is 5. So, the function returns 5, the result of 10 - 5.

// You can assume that the input array has 2 or more elements.

// The input array has the sort method disabled, so you will have to solve it in another way.


// My Solution
function diffBig2(arr) {
  let newArr = arr;
  const h1 = Math.max(...newArr);
  newArr.splice(newArr.indexOf(h1), 1);
  const h2 = Math.max(...newArr);
  return h1 - h2;
}

// Other Solutions
function diffBig2(arr) {
  let [a,b] = arr.reduce( ([a,b],v) => v>a? [v,a] : [a, Math.max(b,v)], [-1/0,-1/0] );
  return a-b
}