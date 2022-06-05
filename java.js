

for (let i = 0; i < 5; i++) {

let computerSelection = getRandomChoice()
let playerSelection = 'ROCK' /** prompt("Choose one").toUpperCase() //**.toUpperCase() used to make all strings Upper case and compere with optons | This make input case insensitive**/
let playerScore = 0
let computerScore = 0

console.log (`Player Selection: ${playerSelection}`)
console.log (`Computer Selection: ${computerSelection}`)
console.log (`Round Result: ${playRound (playerSelection, computerSelection)}`)
console.log (`Player Score: ${playerScore}`)
console.log (`Computer Score: ${computerScore}`)


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









/*Pseudo code
    function to decide computer turn - DONE
        can chose between paper, scissors or rock
        var to storage result

    prompt to ask users choices - DONE
        can chose between paper, scissors or rock
        var to storage resul
   
    function to set choices values
        i.e rock wins over scissors
        may need several functions for each possibility

    function to play the round. 
        choose between computer and user choices

    string with turn result
        "You Lose! Paper beats Rock"

    Make user choice case-insensitive (rock, ROCK, RocK)

    






function playerSelection() {

}

function computerSelection() {

}




function playRound(playerSelection, computerSelection) {
    // your code here!
  }

function computerPlay() {

}
  
  
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
*/