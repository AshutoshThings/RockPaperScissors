let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let humanScoreElem = document.querySelector(".netHumanScore");
let computerScoreElem = document.querySelector(".netComputerScore");
humanScoreElem.textContent = 0;
computerScoreElem.textContent = 0;
function getComputerChoice(){
	let num = Math.floor(Math.random()*3);
	let computerChoice = document.querySelector(".computerChoice");
	computerChoice.textContent = `Computer has chosen : ${choices[num]}`;
	return choices[num];
}
function getHumanChoice(e){
	return e.srcElement.innerText;
}
function playRound(computer, human){
	let result = document.querySelector(".result");
	if(computer == "rock" && human =="paper")
	{
		playerScore++;
		result.textContent = "You won this round!";
		humanScoreElem.textContent = playerScore;
	}
	else if(computer == "paper" && human =="scissor")
	{
		playerScore++;
		result.textContent = "You won this round!";
		humanScoreElem.textContent = playerScore;
	}
	else if(computer == "scissors" && human=="rock")
	{
		result.textContent = "You won this round!";
		playerScore++;
		humanScoreElem.textContent = playerScore;
	}
	else if(computer == human)
	{
		result.textContent = "This round is a draw!";
	}
	else
	{
		computerScore++;
		result.textContent = "Computer won this round!";
		computerScoreElem.textContent = computerScore;
	}
}
function playGame(e)
{
	let computerDes = getComputerChoice();
	let humanDes = getHumanChoice(e);
	console.log("computer des " + computerDes);
	console.log("Human Des : " + humanDes);
	playRound(computerDes, humanDes);
}

let input = document.querySelectorAll("span");
input.forEach(inp => inp.addEventListener('click',playGame ));

input.forEach(inp => inp.addEventListener('click',()=>{
	inp.style.backgroundColor = "red";
	setTimeout(() => {
      inp.style.backgroundColor = "mediumpurple";
    }, 20);
}));