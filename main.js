const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const youWrite = document.querySelector("#you");
const comWrite =document.querySelector("#computer");
const roundPlay = document.querySelector("#scores");
const roundCounth2 = document.querySelector("#roundCounth2");
const playAgain = document.querySelector("#playAgainButton");
const scoreBord = document.querySelector("#scoreBord");
const finalSay = document.querySelector("#finalSay");
const gameOver = document.querySelector("#gameOver");

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

// function to determine human choice
let humanChoice;

function getRock(){
   humanChoice = "rock".toLowerCase()
   return humanChoice
}

function getPaper(){
    humanChoice = "paper".toLowerCase()
    return humanChoice
 }

 function getScissors(){
    humanChoice = "scissors".toLowerCase()
    return humanChoice
 } 

// Declare the players score variable
let humanScore = 0
let computerScore = 0
let roundCount = 0;

/* write a function for the game play that takes in the human choice and compare it with 
computer choice to determine the winner*/
function playRound(humanChoice, computerChoice){
    roundCount++;
    roundCounth2.textContent = `Round ${roundCount}`;

    youWrite.textContent = `YOU: ${humanChoice}`;
    comWrite.textContent =`COMPUTER: ${computerChoice}`;

    if(humanChoice === computerChoice){
        return roundPlay.textContent = "ITS A TIE! PLAY AGAIN";
    }
   else if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
    return roundPlay.textContent = "YOU WIN! ROCK BEATS SCISSORS";
   }
   else if(humanChoice === "rock" && computerChoice === "paper"){
    computerScore++
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
    return roundPlay.textContent = "YOU LOSS! PAPER BEATS ROCK";
   }
   else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
    return roundPlay.textContent ="YOU WIN! SCISSORS BEATS PAPER";
   }
   else if(humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
    return roundPlay.textContent = "YOU LOSS! ROCK BEATS SCISSORS";
   }
   else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
    return roundPlay.textContent = "YOU WIN! PAPER BEATS ROCK";
   }
   else if(humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
    return roundPlay.textContent = "YOU LOSS! SCISSORS BEATS PAPER";
   }
   else{
    return console.log("Enter a valid choice")
   }
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/* This function is a duplicate of the up one, but some codes were added and the function is 
called only on round 5 to display FINAL SCORE , Game Over, etc. */
function playRound2(humanChoice, computerChoice){
    roundCount++;
    roundCounth2.textContent = `Round ${roundCount}`;
    gameOver.textContent = "Game Over"

    youWrite.textContent = `YOU: ${humanChoice}`;
    comWrite.textContent =`COMPUTER: ${computerChoice}`;

    if(humanChoice === computerChoice){
    roundPlay.textContent = "ITS A TIE! PLAY AGAIN";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN!`
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
    }
   else if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    roundPlay.textContent = "YOU WIN! ROCK BEATS SCISSORS";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN! `
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
   }
   else if(humanChoice === "rock" && computerChoice === "paper"){
    computerScore++
    roundPlay.textContent = "YOU LOSS! PAPER BEATS ROCK";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN! `
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
   }
   else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++
    roundPlay.textContent ="YOU WIN! SCISSORS BEATS PAPER";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN! `
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
   }
   else if(humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++
    roundPlay.textContent = "YOU LOSS! ROCK BEATS SCISSORS";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN! `
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
   }
   else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++
    roundPlay.textContent = "YOU WIN! PAPER BEATS ROCK";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN! `
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
   }
   else if(humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++
    roundPlay.textContent = "YOU LOSS! SCISSORS BEATS PAPER";
    scoreBord.textContent = `You- ${humanScore} : ${computerScore} -Com`;
        if(humanScore === computerScore){
            finalSay.textContent = `Its a TIE!`;
        }
        else if(humanScore > computerScore){
            finalSay.textContent = `You WIN! `
        }
        else {
            finalSay.textContent = `Computer WIN!`
        }
   }
   else{
    return console.log("Enter a valid choice")
   }
}

/* The below functions calls on the playRound function and pass the computer choice and human choice as an
argument. it will be added to the click eventListener of the button ROCK, PAPER, SCISSORS.*/

function rockCall(){
    if(roundCount === 4){
        playRound2(getRock(), getComputerChoice()) 
    }
    else if(roundCount === 5){
        console.log()
    }
    else{
    playRound(getRock(), getComputerChoice()) 
    }
}

function paperCall(){
    if(roundCount === 4){
        playRound2(getPaper(), getComputerChoice()) 
    }
    else if(roundCount === 5){
        console.log()
    }
    else{
    playRound(getPaper(), getComputerChoice()) 
    }
}

function scissorsCall(){
    if(roundCount === 4){
        playRound2(getScissors(), getComputerChoice()) 
    }
    else if(roundCount === 5){
        console.log()
    }
    else{
    playRound(getScissors(), getComputerChoice()) 
    }
}

rockButton.addEventListener("click", rockCall);
paperButton.addEventListener("click", paperCall)
scissorsButton.addEventListener("click", scissorsCall)

// This is the play again button that resets the game back to default.
playAgain.addEventListener("click", ()=>{
    roundCount = 0;
    humanScore = 0;
    computerScore = 0;
    roundCounth2.textContent = "Round";
    youWrite.textContent = "YOU:";
    comWrite.textContent = "COMPUTER:";
    roundPlay.textContent = "NEW ROUND";
    scoreBord.textContent = "You-  0 : 0 -Com";
    finalSay.textContent = "...";
    gameOver.textContent = ":"
})



