let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
function getComputerChoice(){
	let num = Math.floor(Math.random()*3);
	console.log(`Computer's Choice : ${choices[num]}`);
	return choices[num];
}

function getHumanChoice(){
	let input = prompt("Enter the thing : ");
	console.log(`User input : ${input}`);
	return input;
}

function playRound(computer, human){
	
	if(computer == "rock" && human.toLowerCase() =="paper")
	{
		console.log("You won this round!");
		playerScore++;
	}
	else if(computer == "paper" && human.toLowerCase() =="scissor")
	{
		console.log("You won this round!");
		playerScore++;
	}
	else if(computer == "scissors" && human.toLowerCase() =="rock")
	{
		console.log("You won this round!");
		playerScore++;
	}
	else if(computer == human.toLowerCase())
	{
		console.log("This round is a draw");
	}
	else
	{
		console.log("Computer won this round!");
		computerScore++;
	}
	
}
function playGame()
{
	for(let i = 0 ; i<5; i++)
	{
		let computerDes = getComputerChoice();
		let humanDes = getHumanChoice();

		playRound(computerDes, humanDes);
	}
	if(computerScore>playerScore)
	{
		console.log("Computer Won! Game over");
	}
	else if(playerScore>computerScore)
	{
		console.log("Player Won! Game over");
	}
	else 
	{
		console.log("Game over! it's a draw");
	}
}

playGame();