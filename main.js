// write a function that will randomly return "rock", paper, scissors
function getComputerChoice(){
    let comChoice = Math.floor(Math.random()*3)
    if(comChoice === 0){
        return "rock"
    }
    else if(comChoice === 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

//  write a function that prompt human to enter their choice
function getHumanChoice(){
    let humChoice = prompt().toLowerCase()
    if(humChoice === "rock" || humChoice === "paper" || humChoice === "scissors"){
        return humChoice 
    }
    else{
        return "Enter a valid choice"
    }
}

// Declare the players score variable
let humanScore = 0;
let computerScore = 0;

// write a function for the game play that takes is the human choice and compare it with computer choice to determine the winner
function playRound(humanChoice, computerChoice){

    console.log(`YOU: ${humanChoice}`);
    console.log(`COM: ${computerChoice}`)
  
      if(humanChoice === computerChoice){
          return console.log("Its a tie")
      }
     else if(humanChoice === "rock" && computerChoice === "scissors"){
      humanScore++;
      return console.log("You win! Rock beats Scissors");
     }
     else if(humanChoice === "rock" && computerChoice === "paper"){
      computerScore++
      return console.log("You loss! paper beats Rock");
     }
     else if(humanChoice === "scissors" && computerChoice === "paper"){
      humanScore++
      return console.log("You win! Scissors beats Paper");
     }
     else if(humanChoice === "scissors" && computerChoice === "rock"){
      computerScore++
      return console.log("You loss! Rock beats Scissors");
     }
     else if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore++
      return console.log("You Win! paper beats Rock");
     }
     else if(humanChoice === "paper" && computerChoice === "scissors"){
      computerScore++
      return console.log("You loss! Scissors beats paper");
     }
     else{
      return console.log("Enter a valid choice")
     }
     
  }

  /*write a function named playGame that calls playRound to play 5 rounds, 
keeps track of the scores and declares a winner at the end.*/

let getHumanChoice1 = getHumanChoice;
let getHumanChoice2 = getHumanChoice;
let getHumanChoice3 = getHumanChoice;
let getHumanChoice4 = getHumanChoice;
let getHumanChoice5 = getHumanChoice;

function playGame(){
    let round1 = playRound(getHumanChoice1(), getComputerChoice());
    let round2 = playRound(getHumanChoice2(), getComputerChoice());
    let round3 = playRound(getHumanChoice3(), getComputerChoice());
    let round4 = playRound(getHumanChoice4(), getComputerChoice());
    let round5 = playRound(getHumanChoice5(), getComputerChoice());

    console.log(humanScore)
    console.log(computerScore)

    if(humanScore === computerScore){
        return console.log("ITS A TIE PLAY AGAIN");
    }
    else if(humanScore > computerScore){
        return console.log("YOU WIN ALL ROUNDS")
    }
    else {
        return console.log("COMPUTER WIN ALL ROUNDS")
    }
}


playGame()

