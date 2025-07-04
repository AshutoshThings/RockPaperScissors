let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
function getComputerChoice(){
	let num = Math.floor(Math.random()*3);
	//console.log(`Computer's Choice : ${choices[num]}`);
	let computerChoice = document.querySelector(".computerChoice");
	computerChoice.textContent = `Computer has chosen : ${choices[num]}`;
	return choices[num];
}

function getHumanChoice(e){
	//console.log("Human Choice : ");
	//console.log(e.srcElement.innerText);
	return e.srcElement.innerText;
}

function playRound(computer, human){
	let result = document.querySelector(".result");
	if(computer == "rock" && human =="paper")
	{
		//console.log("You won this round!");
		playerScore++;
		result.textContent = "You won this round!";
	}
	else if(computer == "paper" && human =="scissor")
	{
		//console.log("You won this round!");
		playerScore++;
		result.textContent = "You won this round!";
	}
	else if(computer == "scissors" && human=="rock")
	{
		//console.log("You won this round!");
		result.textContent = "You won this round!";
		playerScore++;
	}
	else if(computer == human)
	{
		//console.log("This round is a draw");
		result.textContent = "This round is a draw!";
	}
	else
	{
		//console.log("Computer won this round!");
		computerScore++;
		result.textContent = "Computer won this round!";
	}
	
}
function playGame(e)
{
	//for(let i = 0 ; i<5; i++)
	//{
		let computerDes = getComputerChoice();
		let humanDes = getHumanChoice(e);
		console.log("computer des " + computerDes);
		console.log("Human Des : " + humanDes);
		playRound(computerDes, humanDes);
	//}
}
// 	if(computerScore>playerScore)
// 	{
// 		console.log("Computer Won! Game over");
// 	}
// 	else if(playerScore>computerScore)
// 	{
// 		console.log("Player Won! Game over");
// 	}
// 	else 
// 	{
// 		console.log("Game over! it's a draw");
// 	}
// }

// playGame();

let input = document.querySelectorAll("span");
input.forEach(inp => inp.addEventListener('click',playGame ));