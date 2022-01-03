// No description!!!

// Input :: [10,20,25,0]

// Output :: ["+0", "+10", "+15", "-10"]

// Show some love, rank and upvote!

// My Solution
function equalize(array){
  return array.map(function(el, i , arr){
    const value = el - arr[0]
    return `${Math.sign(value) > -1 ? "+" : ""}${value}`
  })
}

// Other Solutions
const equalize=a=>a.map(x=>("+"+(x-a[0])).replace("+-","-"))

