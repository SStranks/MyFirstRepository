// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'


// My Solution
function paul(x){
  const result = x.map(function(el){
    switch (true){
      case (el === "life"): return 0
      case (el === "eating"): return 1
      case (el === "kata"): return 5
      case (el === "Petes kata"): return 10
    }
  }).reduce((acc, cur) => acc + cur, 0)
    
  switch (true){
    case (result < 40): return "Super happy!"
    case (result < 70): return "Happy!"
    case (result < 100): return "Sad!"
    default: return "Miserable!"
  }
}

// Other Solutions
function paul(activities){
  const VALUES = {'Petes kata': 10, 'kata': 5, 'eating': 1, 'life': 0};
  const score = activities.reduce((s, a) => s + VALUES[a], 0);
  switch (true) {
    case score < 40: return 'Super happy!';
    case score < 70: return 'Happy!';
    case score < 100: return 'Sad!';
    default: return 'Miserable!';
  }
}