// List of possible choices
const choices = ['rock', 'paper', 'scissors'];

// Function to randomly generate the computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to handle when the player makes a choice
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Display the result
    document.getElementById('result').innerHTML = `
        You chose: <strong>${playerChoice}</strong> <br>
        Computer chose: <strong>${computerChoice}</strong> <br>
        <strong>${result}</strong>
    `;
}

// Event listeners for the buttons
document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
});