console.log('Hello World');
console.log('--------------------------------------------------');


// 5 TIMES ROUND LOOP
let computerScore = 0;
let humanScore = 0;
let computerScoreBoard = 0;
let humanScoreBoard = 0;
let playRound = 0;
    for(let i=0; i<5 ; i++){
    
        const choices = ["rock", "paper", "scissors"];

        // GETTING USER INPUT
        const getHumanChoice = prompt("Do you choose rock, paper or scissors?");
        if (getHumanChoice === "paper" || getHumanChoice === "rock" || getHumanChoice === "scissors") {
        console.log("You chose " + `${getHumanChoice}`);
        } else {
        console.log("Error! Try again!");
        }

        // GETTING COMPUTER INPUT
        let getComputerChoice = choices[Math.floor(Math.random()*3)];
        console.log("Computer chose" + ` ${getComputerChoice}`);

        // DECLARE WINNER 
        const winner = playGame(getHumanChoice, getComputerChoice);

        function playGame(getHumanChoice, getComputerChoice) {
            
            if (getHumanChoice === 'rock' && getComputerChoice === 'paper') {
                console.log('You win!');
                humanScore++;
                humanScoreBoard.textContent = humanScore;
            } if (getHumanChoice === 'scissors' && getComputerChoice === 'paper') {
                console.log('You win!');
                humanScore++;
                humanScoreBoard.textContent = humanScore;
            } if (getHumanChoice === 'rock' && getComputerChoice === 'scissors') {
                console.log('You win!');
                humanScore++;
                humanScoreBoard.textContent = humanScore;
            } if (getHumanChoice === 'paper' && getComputerChoice === 'rock') {
                console.log('You lose!');
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } if (getHumanChoice === 'paper' && getComputerChoice === 'scissors') {
                console.log('You lose!');
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } if (getHumanChoice === 'scissors' && getComputerChoice === 'rock') {
                console.log('You lose!');
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } if (getHumanChoice === 'scissors' && getComputerChoice === 'scissors') {
                console.log('You tie!');
            } if (getHumanChoice === 'rock' && getComputerChoice === 'rock') {
                console.log('You tie!');
            } if (getHumanChoice === 'paper' && getComputerChoice === 'paper') {
                console.log('You tie!');
            }
            console.log('Computer score:' + computerScore);
            console.log('Your score:' + humanScore);
            console.log('--------------------------------------------------')
        }
        
}
const finalResult= whoWon(computerScore,humanScore);

function whoWon (computerScore,humanScore){

    if (computerScore > humanScore){
    console.log('###########################################################');   
    console.log('Sorry, you lose to computer.');
    console.log('###########################################################');
    } else if (computerScore < humanScore) {
        console.log('###########################################################');   
        console.log('Congratulations, you have won against the computer!');
        console.log('###########################################################');
    } else {
        console.log('###########################################################');   
        console.log('Good game. The result is tie.');
        console.log('###########################################################');
    }

}