const playerSelection = prompt("Choose one").toUpperCase() //**.toUpperCase() used to make all strings Upper case and compere with optons | This make input case insensitive**/
const computerSelection = getRandomChoice()
let roundWinner = playRound(playerSelection, computerSelection)


console.log (playerSelection)
console.log (computerSelection)
console.log (roundWinner)



/**Computer Choice**/
function getRandomChoice () {                       
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }  
}


function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Thats a tie"
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
             playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ||
             playerSelection === 'PAPER' && computerSelection === 'ROCK') { 

        return `You Win! ${playerSelection} beats ${computerSelection.toLowerCase()}`
        
    }    
    else {
        return `You loose! ${computerSelection} beats ${playerSelection.toLowerCase()}`
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