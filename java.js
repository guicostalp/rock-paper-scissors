
let playerScore = 0
let computerScore = 0


/**Loop 100x turns**/
for (let i = 0; i < 100; i++) { 

/*Run game until one score 5*/

if (playerScore < 5 && computerScore < 5) {

let computerSelection = getRandomChoice()
let playerSelection = 'ROCK'/*prompt("Choose one").toUpperCase() //**.toUpperCase() used to make all strings Upper case and compere with optons | This make input case insensitive**/


console.log (`Player Selection: ${playerSelection}`)
console.log (`Computer Selection: ${computerSelection}`)

/**Computer Choice**/

function getRandomChoice () {                       
    let randomNumber = Math.floor(Math.random() * 3); /*Get 3 random numbers*/
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }  
}

/*One turn fuction (for loop runs n times)*/

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        
        return 'tie'      
    }

    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
             playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ||
             playerSelection === 'PAPER' && computerSelection === 'ROCK') { 
          
        return 'player'    
    }    

    else {
        return 'computer'
    }  
    
}




/*Score and Round Result Message*/

let roundResult = playRound(playerSelection, computerSelection)


if (roundResult === 'player') {
    playerScore++
    console.log (`You win! ${playerSelection} beats ${computerSelection}`)
}

else if (roundResult === 'computer') {
    computerScore++
    console.log (`You loose! ${computerSelection} beats ${playerSelection}`)
}

else {
    console.log ("It's a tie!")
}

console.log (`Player Score: ${playerScore}`)
console.log (`Computer Score: ${computerScore}`)

}

}

/*Game winner*/

if (playerScore > computerScore){
    console.log ("You won the game! Congratulations")
}

else if (playerScore < computerScore) {
    console.log ("You lost the game! Try again.")
}
