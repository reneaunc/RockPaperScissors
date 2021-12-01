const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput == 'scissor' || userInput === 'paper'){
    return userInput;
  } else {
    console.log('Invalid Choice. Must choose between rock, paper, or scissors')
  }
};

const getComputerChoice = () => {
  num = Math.floor(Math.random() * 3)
  switch (num){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor';
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'Tie Game';
  }

  if(userChoice === 'rock'){
    switch (computerChoice){
      case 'paper':
        return 'You lost'
      case 'scissor':
        return 'You won'
    }
  }

  if(userChoice === 'paper'){
    switch(computerChoice){
      case 'scissor':
        return 'You Lost'
      case 'rock':
        return 'You won'
    }
  }

  if(userChoice === 'scissor'){
    switch(computerChoice){
      case 'rock':
        return 'You Lost'
      case 'paper':
        return 'You won'
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice('rock');
  console.log(`User Choice is ${userChoice}`)
  let computerChoice = getComputerChoice();
  console.log(`Computer Choice is ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
