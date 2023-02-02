let current_user = prompt("Enter your player alias");
alert(`Welcome ${current_user}`);


let computer_selections = ['rock', 'paper', 'scissors'];
let win_computer = 0;
let win_player = 0;


function playerChoice () {
    let playerSelection = prompt("Enter Choice Between Rock/Paper/Scissors").toLowerCase();
    if (computer_selections.includes(playerSelection)) {
        console.log(`${current_user} chose ${playerSelection}`)

    }
    else {
        playerChoice ();
    }
    return playerSelection;
}


function computerPlay () {
    let computerSelection = computer_selections[Math.floor(Math.random() * 3)];
    console.log(`Computer chose: ${computerSelection}`);
    return computerSelection;
}


function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay(computerSelection);
    playerSelection = playerChoice(playerSelection);

    if (playerSelection == "rock" && computerSelection == "rock"){
        console.log("It's a TIE!");
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`${computerSelection} beats ${playerSelection} You lose!`);
        win_computer ++;
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`${playerSelection} beats ${computerSelection} You Win!`);
        win_player ++;
    }
    if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("It's a TIE!");
    }
    if (playerSelection == "paper" && computerSelection == "rock"){
        console.log(`${playerSelection} beats ${computerSelection} You Win!`);
        win_player ++;
    }
    if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log(`${computerSelection} beats ${playerSelection} You lose!`);
        win_computer ++;
    }
    if (playerSelection == "scissors" && computerSelection == "scissors"){
        console.log("It's a TIE!");
    }
    if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`${playerSelection} beats ${computerSelection} You Win!`);
        win_player ++;
    }
    if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log(`${computerSelection} beats ${playerSelection} You lose!`);
        win_computer ++;
    }
    return win_player;
}


function game () {
    for (let i =0; i<5; i++) {
        player_wins = playRound(win_player, win_computer);
        computer_wins = win_computer;
        console.log(`Computer wins: ${computer_wins} vs ${current_user}'s wins: ${player_wins}`)
    }

    if (player_wins > computer_wins) {
        console.log(`${current_user} WINS !!!!!`)
    }
    if (player_wins == computer_wins) {
        console.log("Its a DRAW !!!!!")
    }
    else {
        console.log("Computer WINS !!!!!")
    }
}

game ();
