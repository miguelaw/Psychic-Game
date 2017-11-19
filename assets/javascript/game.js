
// Arrray used by the computer to randomly choose a letter from the alphabet
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//variables
var guesses = "";
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerGuess = "";
var userGuess = "";
var gameOn = false;

compRand();
//Computer Randomizer Sequence
function compRand() {
	computerGuess = letters [Math.floor(Math.random() * letters.length)];
	console.log("PC Guess: " + computerGuess);
}

//This dictates the users input
document.onkeyup = function(event){
var userGuess = event.key;
userGuess = userGuess.toLowerCase();
console.log(userGuess);

for (var i = 0; i < letters.length; i++) {

    if (!gameOn){
    gameOn = true;
    reset();
	compRand();
    document.querySelector("#results").innerHTML = "";
    }
    
    else if (userGuess === letters[i]) {
    if (guesses.includes(userGuess)) {
        alert("You already chose that letter!");	
        gameOn = true;
    }
    
    
    else if (userGuess === computerGuess) {
    guesses = "";
     wins++;
    console.log("Wins: " + wins);
    alert("Congrats! You won! Press any key to play again.");
    summary();
    gameOn = false;
    }
    
    else {
    guessesLeft--;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;	
	if(guessesLeft == 0)
		{
		losses++;
        console.log("Losses: " + losses);
        alert("Too Bad! You Lost! Press any key to play again.");
        summary();
        gameOn = false;
        }
    }

guesses += userGuess + " ";
document.querySelector("#guesses").innerHTML = guesses;

}
}
}

//Functions are here

//Function displays wins, losses, and the computer's guess
function summary()
{
	document.querySelector("#computerGuess").innerHTML = computerGuess;	
	document.querySelector("#wins").innerHTML = wins;	
	document.querySelector("#losses").innerHTML = losses;	
}

//Function resets all of the variables after game is over
function reset()
{
	guesses = "";
	guessesLeft = 10;
	computerGuess = "";
	document.querySelector("#guesses").innerHTML = guesses;		
	document.querySelector("#guessesLeft").innerHTML = guessesLeft;	
	document.querySelector("#computerGuess").innerHTML = computerGuess;	
    document.querySelector("#results").innerHTML = "Press any key to re-start the game.";
}


