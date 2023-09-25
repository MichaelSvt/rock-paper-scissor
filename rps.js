
function getComputerChoice() {
	var rps = ['rock','paper', 'scissors'];
  return rps[Math.floor(Math.random() * 3)];
}

function playRound(userSelection) {
	
	var computerSelection = getComputerChoice();
	console.log(computerSelection);
	if (userSelection.toLowerCase() == 'rock') {
		if (computerSelection == 'rock') {
			console.log('draw');
			return 0;
		} else if (computerSelection == 'paper'){
			console.log('Computer wins this round, paper beats rock.');
			return -1;
		} else if (computerSelection == 'scissors'){
			console.log('You win this round, rock beats scissors.');
			return 1;
		}
		
	} else if (userSelection.toLowerCase() == 'paper') {
		if (computerSelection == 'rock') {
			console.log('You win this round, paper beats rock.');
			return 1;
		} else if (computerSelection == 'paper'){
			console.log('draw');
			return 0;
		} else if (computerSelection == 'scissors'){
			console.log('Computer wins this round, scissors beats paper.');
			return -1;
		}
	} else if (userSelection.toLowerCase() == 'scissors') {
		if (computerSelection == 'rock') {
			console.log('Computer wins this round, rock beats scissors.');
			return -1;
		} else if (computerSelection == 'paper'){
			console.log('You win this round, scissors beat paper.');
			return 1;
		} else if (computerSelection == 'scissors'){
			console.log('draw.');
			return 0;
		}
	}
}

function game(){
	var userScore = 0;
	var computerScore = 0;
	let score = 0;
	while (score < 3 && score > -3) {
  		let userSelection = prompt("What's your choice?");
  		score = score + playRound(userSelection);
  		console.log('the score is: ' + score);
	}
	if (score > 2) {
		console.log('You win the game.');
	} else if (score < -2) {
		console.log('Computer wins the game.');
	}
}


