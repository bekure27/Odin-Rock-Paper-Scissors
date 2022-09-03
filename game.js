function getComputerChoice(){
    let playWord = ["rock","paper","scissor"];
    let randomWord = playWord[Math.floor(Math.random()*playWord.length)];
    return randomWord;
}

function getPlayerChoice(){
    let playerSelection = prompt("Enter your word ('Rock','Paper','Scissor')");
    if(playerSelection === null){
        playerSelection = prompt("Enter your word ('Rock','Paper','Scissor')");
    }
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}


function playRound(playerSelection,computerSelection){

    if(playerSelection === computerSelection){
        return "It is a tie!";
      }
    else if (playerSelection === "rock" && computerSelection === "scissor" || 
      playerSelection === "paper" && computerSelection === "rock" || 
      playerSelection === "scissor" && computerSelection === "paper" ){
        return `you win! ${playerSelection} smashes ${computerSelection}`;
      }
    else{
        return `computer win! ${computerSelection} smashes ${playerSelection}`;
      }
}


function game (){
    let playerScore = 0;
    let computerScore = 0;
   
    for(let i=1 ; i<=5 ; i++){
       const playerSelection = getPlayerChoice();
       const computerSelection = getComputerChoice();
       console.log(`Round ${i}`);
       console.log(playRound(playerSelection,computerSelection));
       if(playRound(playerSelection,computerSelection) == `you win! ${playerSelection} smashes ${computerSelection}` ){
        playerScore++;
       }
       else if (playRound(playerSelection,computerSelection) == `computer win! ${computerSelection} smashes ${playerSelection}`){
        computerScore++;
       }
    }

    if(playerScore > computerScore){
        console.log("Game Over");
        console.log(`player win! ${playerScore} rounds from 5`);
    }
    else if(computerScore > playerScore){
        console.log("Game Over");
        console.log(`Computer win ${computerScore} rounds from 5`);
    }
    else{
        console.log("Game Over");
        console.log("It's is Tie");
    }

}
game();
        



  
  