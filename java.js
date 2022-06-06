
let playerScore = 0
let computerScore = 0


/**Loop 5x turns**/
for (let i = 0; i < 5; i++) { 


let computerSelection = getRandomChoice()
let playerSelection = 'ROCK'/*prompt("Choose one").toUpperCase() //**.toUpperCase() used to make all strings Upper case and compere with optons | This make input case insensitive**/


console.log (`Player Selection: ${playerSelection}`)
console.log (`Computer Selection: ${computerSelection}`)
console.log (`playRound: ${playRound (playerSelection, computerSelection)}`)



/*One turn fuction (for loop runs 5 times)*/

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



/*Score fuction*/

let roundResult = playRound(playerSelection, computerSelection)
console.log (`roundResult: ${roundResult}`)

if (roundResult === 'player') {
    playerScore++
}

else if (roundResult === 'computer') {
    computerScore++
}

else {
    console.log ("It`s a tie!")
}


console.log (`Player Score: ${playerScore}`)
console.log (`Computer Score: ${computerScore}`)

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

}