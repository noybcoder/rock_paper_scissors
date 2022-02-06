//To obtain the choice from the computer.
function computerPlay() {
    const CHOICE = ["Rock", "Paper", "Scissors"];
    // Obtains the index randomly
    let randIndex = Math.floor(Math.random() * CHOICE.length);
    return CHOICE[randIndex];
}

//To determine if the player wins or loses each round.
function playRound(playerSelection, computerSelection) {
    // Establishes the Tie condition
    if(playerSelection === computerSelection) {
        return `It's a Tie! Both you and computer selected ${playerSelection}.`;
    // Establishes the Lose condition
    } else if((playerSelection === "Rock" && computerSelection === "Paper") ||
              (playerSelection === "Paper" && computerSelection === "Scissors") ||
              (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    // Establishes the Win condition
    } else if((playerSelection === "Rock" && computerSelection === "Scissors") || 
              (playerSelection === "Scissors" && computerSelection === "Paper") ||
              (playerSelection === "Paper" && computerSelection === "Rock")){
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
}

//To format the player's input so that the first letter is upper case and the rest are lower case.
function getPlayerSelection(input) {
    let output = input[0].toUpperCase() + input.substr(1).toLowerCase();
    return output;
}

// To run the game.
function game(match) {
    //Instantiates the variable to track player score
    let playerScore = 0
    //Instantiates the variable to track computer score
    let computerScore = 0;
    //Instantiates the variable to track the round
    let i = 0;
    while(i < match) {
        //Prompts player to enter their choice
        let selection = prompt("Please enter Rock, Scissors or Paper: ");
        let result = playRound(getPlayerSelection(selection), computerPlay());

        try {
            //Increments the player score by 1 if they win
            if(result.includes("Win")) {
                playerScore++;
            //Increments the computer score by 1 if it wins
            } else if(result.includes("Lose")) {
                computerScore++;
            }
            //Increments the round by 1
            i++;
            //Prints the current score
            console.log(`Round ${i} \nCurrent Score: ${playerScore} vs ${computerScore}. ${result}\n `);
        } catch(TypeError) {
            //Prints the message if the TypeError is encountered
            console.log("Invalid entry. Please ensure you only enter 'Rock', 'Paper' or 'Scissors'");
        }
    }

    // Generates the final score and game result
    let outcome = (playerScore > computerScore)? "Impressive! You won!": (playerScore < computerScore)? 
                  "Sorry, Computer won!": "It's a tie! Please try again!";
    console.log(`Final Score: ${playerScore} vs ${computerScore}. ${outcome}`);
}

game(5);