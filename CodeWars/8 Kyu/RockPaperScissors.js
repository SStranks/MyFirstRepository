// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


// My Solution
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!"
  if (p1 === "rock") {
    return p2 === "scissors" ? "Player 1 won!" : "Player 2 won!";
  } else if (p1 === "paper") {
    return p2 === "rock" ? "Player 1 won!" : "Player 2 won!";
  } else  {
    return p2 === "paper" ? "Player 1 won!" : "Player 2 won!";
  }
};

// Other Solutions
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}