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

