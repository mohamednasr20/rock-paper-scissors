function computerPlay() {
  let num = Math.floor(Math.random() * 3 + 1);
  let choice;
  if (num === 1) {
    choice = "rock";
  } else if (num === 2) {
    choice = "paper";
  } else {
    choice = "scissor";
  }
  return choice;
}

const playerPlay = () => {
  return prompt("rock, paper, scissor").toLowerCase();
};
function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "tie";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    result = "win";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissor" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissor")
  ) {
    result = "lose";
  }
  return result;
}

function game() {
  let wins = 0;
  let lose = 0;
  let tie = 0;

  for (let i = 0; i < 5; i++) {
    let playerMove = playerPlay();
    let computerMove = computerPlay();
    let round = playRound(playerMove, computerMove);
    if (round === "win") {
      console.log(`you win this round ${playerMove} beats ${computerMove}`);
      wins += 1;
    } else if (round === "lose") {
      console.log(`you lose this round ${computerMove} beats ${playerMove}`);
      lose += 1;
    } else {
      console.log(`tie this round ${playerMove} against ${computerMove}`);
      tie += 1;
    }
  }

  if (wins > lose) {
    return `You are the winner!  win:${wins}, lose:${lose} and tie:${tie} `;
  } else if (lose > wins) {
    return `You lose!  win:${wins}, lose:${lose} and tie:${tie} `;
  } else {
    return `No winner!  win:${wins}, lose:${lose} and tie:${tie} `;
  }
}

console.log(game());
