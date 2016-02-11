// Javascript game created by Bellamy Liu

// Variables
var mysteryNumber = 7;
var playerGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var playerScore = 0;

// Intiatilize the input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var outputScore = document.querySelector("#outputScore");

outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left."

// Button code
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click",clickHandler);

function clickHandler()
{

	if(guessesRemaining > 0)
	{
		playerGuess = parseInt(input.value);
	
		if(playerGuess > mysteryNumber)
		{
			output.innerHTML = "That's too high!";
			guessesRemaining --;
			guessesMade ++;
			if(guessesMade === 1)
			{
			outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left."
			}
			else if(guessesRemaining === 1)
			{
			outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guess left."
			}
			else if(guessesRemaining === 0)
			{
				outputScore.innerHTML = "Your final score is " + playerScore + ".";
				output.innerHTML = "Game over.";
			}
			else
			{
			outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left."
			}
		}
		else if(playerGuess < mysteryNumber)
		{
			output.innerHTML = "That's too low!";
			guessesRemaining --;
			guessesMade ++;
			if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left."
			}
			else if(guessesRemaining === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guess left."
			}
			else if(guessesRemaining === 0)
			{
				outputScore.innerHTML = "Your final score is " + playerScore + ".";
				output.innerHTML = "Game over.";
			}
			else
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left."
			}
		}
		else if(playerGuess === mysteryNumber)
		{
			output.innerHTML = "You win! Play again!";
			playerScore += guessesRemaining;
			guessesMade = 0;
			guessesRemaining = 10;
			outputScore.innerHTML = "Your current score is " + playerScore + ".";
			mysteryNumber = Math.floor(Math.random()*100);
		}
		else
		{
			output.innerHTML = "Stop playing around and play the game!"
		}
	}
	else
	{
		outputScore.innerHTML = "Your final score is " + playerScore + ".";
		output.innerHTML = "Game over."
	}
}
