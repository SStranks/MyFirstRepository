// In this Kata, you will be given directions and your task will be to find your way back.

// solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
// solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
// More examples in test cases.


// My Solution
function solve(route){
  return route.slice().reverse().map((el, i, arr) => {
    if (i === 0) return el.replace(/^\w+/, "Begin");
    let direction = route[route.length -i].match(/^\w+/);
    direction = direction[0] === "Left" ? "Right" : "Left";
    return el.replace(/^\w+/, direction)
  })
}

// Other Solutions
