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
