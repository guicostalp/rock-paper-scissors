const choices = ['rock', 'paper', 'scissors'];
const roundRecord = [];
let computerScore = 0;
let playerScore = 0;
let tieCount = 0;

function resetGame () {
    //reset game
    roundRecord.splice(0);
    computerScore = 0;
    playerScore = 0;
    tieCount = 0;

    document.querySelector(".playerScore").textContent = "Score: 0"
    document.querySelector(".computerScore").textContent = "Score: 0"
    document.querySelector(".ties").textContent = "Ties: 0"
    document.querySelector(".winner").textContent = ""
    document.querySelector(".playerChoice").textContent = ""
    document.querySelector(".computerChoice").textContent = ""
    document.querySelector(".result").textContent = "Choose your weapon!"
    document.querySelector(".reset").style.display = "none"

    console.clear();

}


function startGame() {
    //play the game 5 times until someone wins
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>
        img.addEventListener("click",() => {
            if (img.id) {
                playRound(img.id);
            }
        })
    ); 
}

function playRound(playerSelection) {
    let wins = checkWins();
    if (wins == false) {
        return
    }
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    scoreBoard(winner);
    roundRecord.push(winner);

    displayRound(playerSelection, computerSelection, winner);

    console.log(roundRecord);

    if (playerScore == 5 || computerScore == 5) {

        displayEnd();

    }
}

if (playerScore == 5 || computerScore == 5) {
    displayEnd();

}


function displayEnd() {
    if (playerScore == 5) {
        document.querySelector(".winner").textContent = 'You won 5 games, congratulations!'
    } else if (computerScore == 5)  {
        document.querySelector(".winner").textContent = 'You lost 5 games, better luck next time!'
        
    }     
    
    document.querySelector(".reset").style.display = "flex"

}

function displayRound(playerSelection, computerSelection, winner) {
    //update display on HTML each round    
    document.querySelector(".playerChoice").textContent = `You chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    document.querySelector(".computerChoice").textContent = `The computer chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    document.querySelector(".result").textContent = `${winner.charAt(0).toUpperCase() + winner.slice(1)} won this round`
    
    if (winner == 'tie')
    
    document.querySelector(".result").textContent = `It's a tie!`

}

function computerChoice(){
//get random input from computer
    const choice = choices[Math.floor(Math.random() * choices.length)]

    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active");

    }, 700);
    


    return choice
    



}

function checkWins() { //might be and issue, try rever true/false > < = 
    if (playerScore >= 5) {
        return false
    } else if (computerScore >= 5)  {
        return false
    }    
    
    else {
        return true
    }

}



function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {

        return 'tie'      
    }

    else if (choiceP === 'rock' && choiceC === 'scissors' ||
             choiceP === 'scissors' && choiceC === 'paper' ||
             choiceP === 'paper' && choiceC === 'rock') { 
            
        return 'player'    
    }    

    else {
        return 'computer'
    }  

}

function scoreBoard(roundResult){
    if (roundResult === 'player') {
        playerScore++
        console.log (`You win! `);
        document.querySelector(".playerScore").textContent = `Player Score: ${playerScore}`

    }
    else if (roundResult === 'computer') {
        computerScore++
        console.log ("You loose!");
        document.querySelector(".computerScore").textContent = `Computer Score: ${computerScore}`
    }
    else {
        tieCount++
        console.log ("It's a tie!");
        document.querySelector(".ties").textContent = `Ties: ${tieCount}`
    }
    console.log (`Player Score: ${playerScore}`)
    console.log (`Computer Score: ${computerScore}`)

}

startGame();
