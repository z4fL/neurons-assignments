function rockPaperScissor(player1, player2) {
  let output = "";
  if (
    (player1 == "scissor" && player2 == "paper") ||
    (player1 == "rock" && player2 == "scissor") ||
    (player1 == "paper" && player2 == "rock")
  ) {
    output = "Player 1 Won!";
  } else if (
    (player2 == "scissor" && player1 == "paper") ||
    (player2 == "rock" && player1 == "scissor") ||
    (player2 == "paper" && player1 == "rock")
  ) {
    output = "Player 2 Won!";
  } else {
    output = "Draw!";
  }

  return output;
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
