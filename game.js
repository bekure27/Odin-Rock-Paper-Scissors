function getComputerChoice(){
    let playWord = ["Rock","Paper","Scissors"];
    let randomWord = playWord[Math.floor(Math.random()*playWord.length)];
    // console.log(randomWord);
    return randomWord;
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    // your code here!
  }